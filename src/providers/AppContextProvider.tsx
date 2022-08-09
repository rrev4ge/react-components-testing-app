import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useAuth } from 'react-oauth2-pkce-btoa';
import { Spin, Typography } from 'antd';
import { services } from '../services';
import {
  OrganizationDto,
  OrganizationExtendedDto,
  OrganizationLevel,
  OrganizationRole,
  UserDto,
} from '../services/axiosApiAppClient';
import { errorHandlers } from '../utils';

type TAuthProfile = UserDto | null;
type TAuthProfileOrganizations = OrganizationExtendedDto[] | null | undefined;

export interface IAppContextProps<U = null> {
  apiError: any;
  authProfile: TAuthProfile;
  authProfileOrganizations: TAuthProfileOrganizations;
  loading: boolean;
  isAuthorized: boolean;
  setApiError: any;
}

export const AppContext = createContext<IAppContextProps | undefined>(undefined);
AppContext.displayName = 'AppContext';

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [apiError, setApiError] = useState<any>(null);
  const [authProfile, setAuthProfile] = useState<TAuthProfile>(null);
  const [authProfileOrganizations, setAuthProfileOrganizations] = useState<TAuthProfileOrganizations>(undefined);
  const [loading, setLoading] = useState<any>(true);
  const [isAuthorized, setIsAuthorized] = useState<any>(false);
  const { authService } = useAuth();

  const fetchProfileOrganizations = async (profile): Promise<OrganizationDto[] | null | void> => {
    try {
      if (
        profile?.organizationId === null &&
        [
          OrganizationRole.ADMINISTRATOR,
          OrganizationRole.GC_SECRETARY,
          OrganizationRole.GC_CHAIR,
          OrganizationRole.GC_TREASURER,
          OrganizationRole.GC_PUBLISHING_DIRECTOR,
        ].some((role) => profile?.roles!.includes(role))
      ) {
        return null;
      }
      const organization = await services.axiosApiAppClient.organizations.getApiOrgOrganizations1(
        profile?.organizationId || 'null',
      );
      if (organization?.level === OrganizationLevel.CONFERENCE) {
        return [organization];
      }
      if (organization && [OrganizationLevel.UNION].includes(organization.level!)) {
        const response = await services.axiosApiAppClient.organizations.getApiOrgOrganizations(
          undefined,
          undefined,
          undefined,
          [organization.organizationId!],
        );
        return [organization, ...response.items!];
      }
      if (organization && [OrganizationLevel.DIVISION].includes(organization.level!)) {
        const parentsResponse = await services.axiosApiAppClient.organizations.getApiOrgOrganizations(
          undefined,
          undefined,
          undefined,
          [organization.organizationId!],
        );
        const childrenResponse = await services.axiosApiAppClient.organizations.getApiOrgOrganizations(
          undefined,
          undefined,
          undefined,
          parentsResponse.items!.map((item) => item.organizationId!),
        );
        if (parentsResponse?.items && childrenResponse?.items) {
          return [organization, ...childrenResponse.items, ...parentsResponse.items];
        }
      }
      return undefined;
    } catch (error: any) {
      return Promise.reject(error);
    }
  };

  const authorizeProcess = async () => {
    try {
      // const validate = await services.axiosApiAppClient.authentication.getAuthValidate(
      //   authService.getAuthTokens()?.access_token,
      // );
      // const profile = await services.axiosApiAppClient.users.getApiOrgUsersMe();
      // const organizations = await fetchProfileOrganizations(profile);
      // setAuthProfile(profile);
      // if (organizations || organizations === null) {
      //   setAuthProfileOrganizations(organizations);
      // }
      setAuthProfileOrganizations(null);
    } catch (error) {
      // await authService.logout();

      setAuthProfileOrganizations(null);
    }
  };

  useEffect(() => {
    // if (
    //   (authService.isPending() && !authService.getCodeFromLocation(window.location)) ||
    //   (!authService.isPending() && !authService.isAuthenticated() && !authService.getCodeFromLocation(window.location))
    // ) {
    //   authService.authorize();
    // }
    // if (authService.isAuthenticated()) {
    //   authorizeProcess();
    // }
    authorizeProcess();
  }, []);

  useEffect(() => {
    // if (authProfileOrganizations || authProfileOrganizations === null) {
    setIsAuthorized(true);
    // }
  }, [authProfileOrganizations]);

  useEffect(() => {
    if (apiError) {
      errorHandlers.axiosErrorsHandler(apiError);
      setApiError(null);
      // !authService.isAuthenticated() && authService.logout(true);
    }
  }, [apiError]);

  const AppContextObject: IAppContextProps = useMemo(
    () => ({
      apiError,
      setApiError,
      authProfile,
      setAuthProfile,
      authProfileOrganizations,
      setAuthProfileOrganizations,
      loading,
      isAuthorized,
    }),
    [apiError, authProfile, isAuthorized],
  );

  // !authService.isPending() &&

  return isAuthorized ? (
    <AppContext.Provider value={AppContextObject}>{children}</AppContext.Provider>
  ) : (
    <div className="app-global-spinner">
      <Spin>
        <Typography.Title level={3}>Authorization. Please wait...</Typography.Title>
      </Spin>
    </div>
  );
};

export default AppContextProvider;

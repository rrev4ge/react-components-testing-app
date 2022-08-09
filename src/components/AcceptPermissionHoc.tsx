import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { OrganizationRole } from '../services/axiosApiAppClient';
import { useAppContext } from '../providers/AppContextProvider';

const AcceptPermissionHoc = ({
  component: Component,
  permissions,
  props,
}: {
  component: any;
  permissions?: OrganizationRole[];
  props?: any;
}): React.ReactElement => {
  const { authProfile } = useAppContext();
  const [isAuthorized, setIsAuthorized] = useState(true);

  function roleValidation(roles: OrganizationRole[] | undefined, profile): boolean {
    if (!roles) {
      return true;
    }
    return roles.some((role) => profile?.roles!.includes(role));
  }

  useEffect(() => {
    if (!isAuthorized) {
      props?.history.replace('/403');
    }
  }, [isAuthorized]);

  if (!roleValidation(permissions, authProfile)) {
    return (
      <Redirect
        to={{
          pathname: '/403',
          // search: `?replace=${encodeURIComponent(window.location.pathname)}`,
        }}
      />
    );
  }

  return <Component {...{ setIsAuthorized, ...props }} />;
};

export default AcceptPermissionHoc;

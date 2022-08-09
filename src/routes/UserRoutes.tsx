import { Route, useRouteMatch } from 'react-router-dom';
import React from 'react';
import { UserManagementPage, UserListPage } from '../ROUTES';
import { AcceptPermissionHoc } from '../components';
import SwitchRoutes from './SwitchRoutes';
import { OrganizationRole } from '../services/axiosApiAppClient';

const UserRoutes = (): React.ReactElement => {
  const { path } = useRouteMatch();
  return (
    <SwitchRoutes>
      <Route path={`${path}`} exact component={UserListPage} />
      <Route
        path={`${path}/create`}
        exact
        render={(props) => (
          <AcceptPermissionHoc
            {...{
              component: UserManagementPage,
              permissions: [
                OrganizationRole.ADMINISTRATOR,
                OrganizationRole.GC_SECRETARY,
                OrganizationRole.DIVISION_SECRETARY,
                OrganizationRole.UNION_SECRETARY,
              ],
              props: { ...props },
            }}
          />
        )}
      />
      <Route
        path={`${path}/:id`}
        exact
        render={(props) => (
          <AcceptPermissionHoc
            {...{
              component: UserManagementPage,
              permissions: [
                OrganizationRole.ADMINISTRATOR,
                OrganizationRole.GC_SECRETARY,
                OrganizationRole.DIVISION_SECRETARY,
                OrganizationRole.UNION_SECRETARY,
              ],
              props: { ...props },
            }}
          />
        )}
      />
    </SwitchRoutes>
  );
};

export default UserRoutes;

import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useAuth } from 'react-oauth2-pkce-btoa';
import SwitchRoutes from './SwitchRoutes';
import { AuthLayout } from '../layout';

const AuthRouter = ({ ...rest }): React.ReactElement => {
  const { path } = useRouteMatch();
  const { authService } = useAuth();

  return (
    <AuthLayout>
      <SwitchRoutes>
        <Route
          path={`${path}/logout`}
          exact
          render={() => {
            authService.logout();
            return false;
          }}
        />
        {/* <Route path={`${path}/oauth`} exact component={LoginPage} /> */}
        {/* <Route path={`${path}${PAGES.authLogin.url}`} component={LoginPage} /> */}
      </SwitchRoutes>
    </AuthLayout>
  );
};

export default AuthRouter;

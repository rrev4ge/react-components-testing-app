import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ResultPage } from '../ROUTES';

const SwitchRoutes = ({ children, ...rest }: { children: React.ReactNode; rest?: any }): React.ReactElement => {
  return (
    <Switch>
      {children}
      <Route
        path="/404"
        render={() => (
          <ResultPage
            {...{
              path: '/',
              status: '404',
              title: 'Page not found',
              subTitle: '404',
              // redirectTimer: 10,
            }}
          />
        )}
      />
      <Route
        path="/403"
        exact
        render={() => (
          <ResultPage
            {...{
              // path: '/accounts/logout',
              status: '403',
              title: 'Error 403',
              clearError: false,
            }}
          />
        )}
      />
      <Redirect from="*" to="/404" />
    </Switch>
  );
};

export default SwitchRoutes;

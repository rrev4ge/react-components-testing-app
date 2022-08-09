import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppRouter, AuthRouter } from './index';
import { AcceptPermissionHoc } from '../components';
import { CONSTANTS } from '../config';

const RootRouter = ({ ...rest }): React.ReactElement => {
  // else
  return (
    <Switch>
      <Route
        path="/401"
        exact
        render={() => {
          return <></>;
        }}
      />
      <Route path="/accounts" component={AuthRouter} />
      <Route render={(props) => <AcceptPermissionHoc {...{ component: AppRouter, props }} />} />
    </Switch>
  );
};

export default RootRouter;

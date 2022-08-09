import React from 'react';
import { Route } from 'react-router-dom';
import { ROUTES } from '../../config/ROUTES';
import { DevApiPage } from '../ROUTES';
import SwitchRoutes from '../../routes/SwitchRoutes';

const DevRouter = (): React.ReactElement => {
  return (
    <SwitchRoutes>
      <Route path={ROUTES.devApi.url} component={DevApiPage} />
    </SwitchRoutes>
  );
};

export default DevRouter;

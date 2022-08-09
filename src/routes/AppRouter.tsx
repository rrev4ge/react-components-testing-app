import React from 'react';
import { Route } from 'react-router-dom';
import SwitchRoutes from './SwitchRoutes';
import { ROUTES_MAP } from '../config';
import { AppLayout } from '../layout';
import { HomePage, ImageCropperPage, TextSelectorPage } from '../pages';

const AppRouter = ({ ...rest }): React.ReactElement => {
  const { app } = ROUTES_MAP;
  return (
    <AppLayout>
      <SwitchRoutes {...rest}>
        <Route path={app.home.url} exact component={HomePage} />
        <Route path={app.imageCropper.url} component={ImageCropperPage} />
        <Route path={app.textSelector.url} component={TextSelectorPage} />
      </SwitchRoutes>
    </AppLayout>
  );
};

export default AppRouter;

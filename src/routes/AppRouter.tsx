import React from 'react';
import { Route } from 'react-router-dom';
import SwitchRoutes from './SwitchRoutes';
import {
  CommentaryListPage,
  CountryListPage,
  HomePage,
  LanguageListPage,
  OrganizationListPage,
  ParagraphListPage,
  ProposalsPage,
  PublicationListPage,
  TranslationListPage,
  VersionListPage,
} from '../ROUTES';
import { ROUTES } from '../config/ROUTES';
import LazyRoute from './LazyRoute';
import { DevRouter } from '../Dev/routes';
import { AppLayout } from '../layout';

const UserRoutes = React.lazy(() => import('./UserRoutes'));

const AppRouter = ({ ...rest }): React.ReactElement => {
  return (
    <AppLayout>
      <SwitchRoutes {...rest}>
        <Route path={ROUTES.home.url} exact component={HomePage} />
        <Route path={ROUTES.translations.url} component={TranslationListPage} />
        <Route path={ROUTES.paragraphs.url} component={ParagraphListPage} />
        <Route path={ROUTES.versions.url} component={VersionListPage} />
        <Route path={ROUTES.commentaries.url} component={CommentaryListPage} />
        <Route path={ROUTES.languages.url} component={LanguageListPage} />
        <Route path={ROUTES.countries.url} component={CountryListPage} />
        <Route path={ROUTES.organizations.url} component={OrganizationListPage} />
        <Route path={ROUTES.publications.url} component={PublicationListPage} />
        <Route path={ROUTES.proposals.url} component={ProposalsPage} />
        <LazyRoute path={ROUTES.users.url}>
          <UserRoutes />
        </LazyRoute>
        <DevRouter />
      </SwitchRoutes>
    </AppLayout>
  );
};

export default AppRouter;

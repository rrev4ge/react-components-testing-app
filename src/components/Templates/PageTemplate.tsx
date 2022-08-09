import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PageHeader, Spin } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import { ROUTES } from '../../config/ROUTES';

export interface IPageTemplateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: string | React.ReactNode;
  routes?: Route[];
  children?: React.ReactNode;
  extra?: React.ReactNode;
  hideBreadcrumbs?: boolean;
  loading?: boolean;
}

const defaultProps = {
  loading: false,
};

const urls: { [url: string]: string } = {};
Object.keys(ROUTES).map((key) => {
  urls[ROUTES[key].url] = key;
});

const renderRoute = (route: any) => {
  if (ROUTES[urls[route.path]]?.inactive) {
    return route.breadcrumbName;
  }
  return <Link to={route.path}>{route.breadcrumbName}</Link>;
};

const PageTemplate: React.FC<IPageTemplateProps> = (props): React.ReactElement => {
  const { title, routes, extra, hideBreadcrumbs, children, loading } = props;
  const history = useHistory();

  useEffect(() => {
    const path = history.location.pathname.replace(/\//g, ' ');
    document.title = `${process.env.REACT_APP_TITLE}${path && path !== ' ' ? ` - ${path}` : ''}`;
  }, []);

  const rootRoute = {
    path: '/',
    breadcrumbName: 'Home',
  };

  const currentRoute = () => {
    if (history.location.pathname !== '/') {
      return history.location.pathname.split('/').map((item, i, arr) => {
        if ([''].includes(item)) {
          return rootRoute;
        }
        return {
          path: history.location.pathname.split(`/${arr[i + 1]}`)[0],
          breadcrumbName: item[0].toUpperCase() + item.slice(1),
        };
      });
    }
    return [rootRoute];
  };
  const gatheredRoutes = [...(routes ?? currentRoute())];
  return (
    <PageHeader
      className="site-page-header"
      title={!loading ? title : ''}
      breadcrumb={
        hideBreadcrumbs
          ? undefined
          : {
              routes: gatheredRoutes,
              itemRender: renderRoute,
            }
      }
      extra={!loading && extra}
    >
      {!loading ? <>{children}</> : <Spin tip="Loading..." />}
    </PageHeader>
  );
};

PageTemplate.defaultProps = defaultProps as IPageTemplateProps;

export default PageTemplate;

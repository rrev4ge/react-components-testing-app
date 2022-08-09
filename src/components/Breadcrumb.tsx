import React from 'react';
import { Breadcrumb } from 'antd';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { ROUTES_MAP, IRoute } from '../config';

type Props = RouteComponentProps;

const BreadcrumbComponent: React.FC<Props> = (props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const urls: { [url: string]: string } = {};

  const { app } = ROUTES_MAP;
  Object.keys(app).map((key) => {
    urls[app[key].url] = key;
  });
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const item: IRoute = app[urls[url]];
    return (
      <Breadcrumb.Item key={url}>
        {item && !item.inactive && <Link to={url}>{item.title}</Link>}
        {item && item.inactive && item.title}
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return <Breadcrumb style={{ margin: '16px 0' }}>{breadcrumbItems}</Breadcrumb>;
};

export default withRouter(BreadcrumbComponent);

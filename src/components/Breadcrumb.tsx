import React from 'react';
import { Breadcrumb } from 'antd';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { ROUTES, IPage } from '../config/ROUTES';

type Props = RouteComponentProps;

const BreadcrumbComponent: React.FC<Props> = (props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const urls: { [url: string]: string } = {};
  Object.keys(ROUTES).map((key) => {
    urls[ROUTES[key].url] = key;
  });
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const item: IPage = ROUTES[urls[url]];
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

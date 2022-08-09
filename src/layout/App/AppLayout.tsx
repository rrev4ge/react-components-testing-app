import React from 'react';
import { Layout } from 'antd';
import { ContentLayout, HeaderLayout, SiderLayout } from '../index';
import { useCollapsed } from '../../hooks';

const AppLayout = ({ children, ...rest }) => {
  const collapsedActions = useCollapsed();
  return (
    <Layout>
      <HeaderLayout />
      <Layout>
        <SiderLayout collapsedActions={collapsedActions} />
        <ContentLayout collapsedActions={collapsedActions}>{children}</ContentLayout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

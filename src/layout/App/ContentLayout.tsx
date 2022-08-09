import React from 'react';
import { BackTop, Layout } from 'antd';
import { FooterLayout } from '../index';

const ContentLayout = ({ collapsedActions, children, ...rest }): React.ReactElement => {
  const { margin } = collapsedActions;

  return (
    <Layout className="inner-layout" style={margin}>
      <Layout.Content className="inner-layout-body">
        <BackTop visibilityHeight={2} />
        <div>{children}</div>
      </Layout.Content>
      <FooterLayout />
    </Layout>
  );
};

export default ContentLayout;

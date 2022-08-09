import React from 'react';
import { Empty } from 'antd';
import { PageTemplate } from '../../components';

const HomePage = () => {
  return (
    <PageTemplate title="Home">
      <Empty description="Home Page" />
    </PageTemplate>
  );
};

export default HomePage;

import React from 'react';
import { Layout } from 'antd';
import { MenuTemplate } from '../../components';
import { SidebarMenu } from '../../config/Menus';

const SiderLayout = ({ collapsedActions }): React.ReactElement => {
  const { collapsed, manualCollapsed, setManualCollapsed } = collapsedActions;

  return (
    <>
      {/* <Button */}
      {/*  className="app-layout-sider-zero-width-trigger" */}
      {/*  icon={manualCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
      {/*  onClick={() => { */}
      {/*    setManualCollapsed(!manualCollapsed); */}
      {/*  }} */}
      {/* /> */}
      <Layout.Sider
        collapsedWidth={50}
        collapsed={collapsed}
        collapsible
        onCollapse={() => setManualCollapsed(!manualCollapsed)}
      >
        <MenuTemplate list={SidebarMenu} />
      </Layout.Sider>
    </>
  );
};

export default SiderLayout;

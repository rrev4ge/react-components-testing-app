import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const FooterLayout = (): React.ReactElement => {
  const now = new Date();
  return (
    <Layout.Footer>
      <div className="app-app-footer">
        <div className="app-app-footer--copyright">Copyright © {now.getFullYear()} rrew4ge</div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    </Layout.Footer>
  );
};

export default FooterLayout;

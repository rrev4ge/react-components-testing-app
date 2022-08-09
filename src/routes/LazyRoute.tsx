import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Skeleton } from 'antd';

const LazyRoute = ({ path, children }: { path: string; children: React.ReactNode }) => (
  <Route path={path}>
    <Suspense fallback={<Skeleton />}>{children}</Suspense>
  </Route>
);

export default LazyRoute;

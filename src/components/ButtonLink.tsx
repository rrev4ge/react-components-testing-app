import { Link } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as H from 'history';

const ButtonLink = (props: {
  icon?: React.ReactElement;
  to: H.LocationDescriptor | ((location: H.Location) => H.LocationDescriptor);
  children?: React.ReactElement;
  className?: string;
}): React.ReactElement => {
  const { className, to, icon, children } = props;
  return (
    <Link className={className || 'ant-btn ant-btn-link'} to={to}>
      {icon}
      <span>{children}</span>
    </Link>
  );
};

export default ButtonLink;

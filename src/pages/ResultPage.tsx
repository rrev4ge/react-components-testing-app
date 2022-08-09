import React, { useEffect, useState } from 'react';
import { Button, Result } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { observer } from 'mobx-react-lite';
import { PageTemplate } from '../components';
import { useMobxStoreContext } from '../providers/MobxAppClientProvider';
import { useAppContext } from '../providers/AppContextProvider';

export interface IResultPageProps {
  path?: string;
  backTo?: string;
  backToPath?: string;
  status?: 403 | 404 | 500 | '403' | '404' | '500' | 'success' | 'error' | 'info' | 'warning' | undefined | any;
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  className?: string;
  redirectTimer?: number;
  clearError?: boolean;
}

const getMessage = (status: any) => {
  if (['401', '403', 401, 403].includes(status)) {
    return 'Sorry, you are not authorized to access this page.';
  }
  if (['404', 404].includes(status)) {
    return 'Sorry, you request data not found';
  }

  if (['500', 500].includes(status)) {
    return 'Sorry, we have a problem with server.';
  }

  return 'Sorry, something went wrong.';
};

const defaultProps = {
  title: 'Wrong',
  path: '/',
  backTo: 'Home',
  backToPath: '/',
  status: 'warning',
  clearError: false,
};

const getDate = (timer: number): Date => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + timer);
  return time;
};

const ResultPage: React.FC<IResultPageProps> = ({
  title = 'Wrong',
  path = '/',
  backTo = 'Home',
  backToPath = '/',
  status = 'warning',
  clearError = false,
  subTitle,
  redirectTimer,
  children,
  className,
}): React.ReactElement => {
  const [isTimeOut, setIsTimeOut] = useState(false);

  const { seconds } = useTimer({
    expiryTimestamp: getDate(redirectTimer || 0),
    onExpire: () => redirectTimer && setIsTimeOut(true),
  });

  return (
    <>
      {isTimeOut && <Redirect to={`${path}`} />}
      <PageTemplate title={title} hideBreadcrumbs>
        <Result
          status={status}
          title={title}
          subTitle={subTitle || getMessage(status)}
          extra={
            <>
              <Link
                to={{
                  pathname: backToPath,
                }}
              >
                <Button type="primary">Back to {backTo}</Button>
              </Link>
              <Link
                to={{
                  pathname: path,
                }}
              >
                <Button type="primary">Back to last page {redirectTimer ? seconds : ''}</Button>
              </Link>
            </>
          }
        />
      </PageTemplate>
    </>
  );
};

export default ResultPage;

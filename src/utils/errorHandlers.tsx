import { FormInstance, notification, Row, Tag } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { AxiosError } from 'axios';
import { ContextType } from 'react';
import { GraphQLErrors, NetworkError } from '@apollo/client/errors';
import { ServerError } from '@apollo/client/link/utils';
import { ServerParseError } from '@apollo/client/link/http';
import { FlexListTemplate } from '../components';

interface IOptions<F = any> {
  context?: ContextType<any>;
  form?: FormInstance<F>;
}

const parseErrors = (errors, FORM) => {
  const newMsg = Object.entries(errors)
    .filter((i: any) => !['status', 'traceId', 'type', 'extensions', 'path', 'locations'].includes(i[0]))
    .map((i: any, key) => {
      if (Array.isArray(errors[i[0]])) {
        const msg = errors[i[0]].map((m, key) => {
          if (FORM && FORM.getFieldInstance(i[0]) !== undefined) {
            FORM.setFields([
              {
                name: i[0],
                errors: m,
              },
            ]);
          }
          return (
            <FlexListTemplate key={key} gap={5} flexWrap="nowrap" justifyContent="left">
              <Tag>{i[0]}</Tag>
              <div style={{ wordWrap: 'break-word' }}>{m}</div>
            </FlexListTemplate>
          );
        });
        return msg;
      }
      if (FORM && FORM.getFieldInstance(i[0]) !== undefined) {
        FORM.setFields([
          {
            name: i[0],
            errors: [i[1]],
          },
        ]);
      }
      return (
        <FlexListTemplate key={key} gap={5} flexWrap="nowrap" justifyContent="left">
          <Tag>{i[0]}</Tag>
          <div style={{ wordWrap: 'break-word' }}>{i[1]}</div>
        </FlexListTemplate>
      );
    });
  return newMsg;
};

const processError = (context, status, message, errorKey) => {
  const [logCode, strCode] = !status ? ['[500]', '500'] : [status.toString(), status.toString()];
  if (context) {
    context(strCode);
  }
  notification.error({
    placement: 'topRight',
    message: `Request error status: ${status}`,
    description: (
      <FlexListTemplate gap={5} alignItems="left" justifyContent="left" style={{ flexDirection: 'column' }}>
        {message}
      </FlexListTemplate>
    ),
    key: errorKey,
    duration: 7,
  });
  return Promise.resolve(`${logCode}: ${message}`);
};

const axiosErrorsHandler = (error: AxiosError, options: IOptions = {}): any => {
  const CONTEXT = options.context || undefined;
  const FORM = options.form || undefined;
  const errorKey = uuidv4();

  if (!error?.response) {
    console.error(`API: 0: No Response`);
    return processError(CONTEXT, 0, 'No Response', errorKey);
  }

  const { message: msg } = error;
  const { data, status } = error.response;

  if (typeof data === 'string') {
    console.error(`API: ${status}: ${data}`);
    return processError(CONTEXT, status, `${data}`, errorKey);
  }

  // if (status && [401, 403].includes(status)) {
  //   console.log(status);
  //   window.location.replace(`/${status}`);
  //   return;
  // }

  // else - data is string case
  if (data) {
    const errors = data.errors ? data.errors : data;
    const newMsg = parseErrors(errors, FORM);
    return processError(CONTEXT, status, newMsg, errorKey);
  }

  if (parseInt(String(status), 10) === 304) {
    return processError(CONTEXT, status, `${status}: Not Modified!`, errorKey);
  }
  console.log(`${status}: ${error.message}`);
  return processError(CONTEXT, status, error.message, errorKey);
};

const apolloErrorsHandler = (error: NetworkError | GraphQLErrors, options: IOptions = {}): any => {
  const CONTEXT = options.context || undefined;
  const FORM = options.form || undefined;
  const errorKey = uuidv4();

  if (error && Array.isArray(error as GraphQLErrors)) {
    const newMsg = (error as GraphQLErrors)?.map((e) => parseErrors(e, FORM)) || [];
    const status = (error as GraphQLErrors)?.[0].extensions.code || 0;
    return processError(CONTEXT, status, newMsg, errorKey);
  }

  if (error && (error as ServerError)?.result) {
    const {
      result: { errors },
      statusCode,
    } = error as ServerError;
    const newMsg = errors?.map((e) => parseErrors(e, FORM)) || [];
    return processError(CONTEXT, statusCode || 0, newMsg, errorKey);
  }

  if (error && (error as ServerParseError)?.response) {
    const {
      bodyText,
      response: { status },
    } = error as ServerParseError;

    if (typeof bodyText === 'string') {
      console.error(`API: ${status}: ${bodyText}`);
      return processError(CONTEXT, status, `${bodyText}`, errorKey);
    }

    if (parseInt(String(status), 10) === 304) {
      return processError(CONTEXT, status, `${status}: Not Modified!`, errorKey);
    }
    console.log(`${status}: error`);
    return processError(CONTEXT, status, 'error', errorKey);
  }
};

export default { axiosErrorsHandler, apolloErrorsHandler };

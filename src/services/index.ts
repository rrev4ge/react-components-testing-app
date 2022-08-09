import restApiAppClient from './restApiAppClient/restApiAppClient';
import apolloGraphqlAppClient from './apolloGraphqlAppClient/apolloGraphqlAppClient';
import CONSTANTS from '../config/CONSTANTS';
import { AxiosApiAppClient } from './axiosApiAppClient/axiosApiAppClient';

const axiosApiAppClient = new AxiosApiAppClient({
  BASE: CONSTANTS.APP_API_URL,
  TOKEN: JSON.parse(window.localStorage.getItem(CONSTANTS.APP_API_CACHE_STORAGE_OAUTH_POINT) || '{}')[
    CONSTANTS. APP_API_CACHE_STORAGE_ACCESS_TOKEN_POINT
  ],
});

export const services = {
  restApiAppClient,
  apolloGraphqlAppClient,
  axiosApiAppClient,
};

// export { apiErrorHandler } from './apiErrorHandler';

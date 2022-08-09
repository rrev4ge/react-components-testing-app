import axios, { AxiosResponse } from 'axios';
import queryString from 'query-string';
import CONSTANTS from '../../config/CONSTANTS';
import { ERestProp, ILanguage, IUser, IVersion } from './models/_interfaces';

interface IReqTypes {
  get: string;
  post: string;
  put: string;
  patch: string;
  delete: string;
  all: string;
}

enum EReqTypes {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DEL',
  All = 'ALL',
}

interface IReqConfig {
  url: string;
  values?: any;
  settings?: { [key: string]: any };
}

interface IReqProps {
  type: EReqTypes;
  config: IReqConfig;
}

type IAuthCfg = Record<string, any>;

const { APP_API_URL } = CONSTANTS;

const SESSION_ACCESS_TOKEN = () => {
  const token = JSON.parse(window.localStorage.getItem(CONSTANTS.APP_API_CACHE_STORAGE_OAUTH_POINT) || '{}').access_token;
  return token;
};

const API_EDITOR_URL = `${APP_API_URL}/api/editor`;
const API_ORG_URL = `${APP_API_URL}/api/org`;

export const urls: { [key: string]: string } = {
  auth: `${APP_API_URL}/auth`,
  paragraphs: `${API_EDITOR_URL}/paragraphs`,
  translations: `${API_EDITOR_URL}/translations`,
  commentaries: `${API_EDITOR_URL}/commentaries`,
  versions: `${API_EDITOR_URL}/versions`,
  languages: `${API_ORG_URL}/languages`,
  countries: `${API_ORG_URL}/countries`,
  organizations: `${API_ORG_URL}/organizations`,
  publications: `${API_ORG_URL}/publications`,
  users: `${API_ORG_URL}/users`,
  userActions: `${API_ORG_URL}/user-actions`,
  proposals: `${API_ORG_URL}/proposals`,
};

const auth = (): IAuthCfg => ({
  appApiAuthCfg: {
    headers: {
      Authorization: `Bearer ${SESSION_ACCESS_TOKEN()}`,
    },
  },
});

const makeRequest = async <T>(type: EReqTypes, reqConfig: IReqConfig): Promise<AxiosResponse<T>> => {
  const { url, values, settings } = reqConfig;

  switch (type) {
    case EReqTypes.Get: {
      const params =
        typeof values === 'string'
          ? values
          : `?${queryString.stringify(values, {
              skipEmptyString: true,
              skipNull: true,
            })}`;
      return axios.get(`${url}${values ? params : ''}`, {
        ...auth().appApiAuthCfg,
        ...settings,
      });
    }
    case EReqTypes.Post: {
      return axios.post(url, values, { ...auth().appApiAuthCfg, ...settings });
    }
    case EReqTypes.Put: {
      return axios.put(url, values, { ...auth().appApiAuthCfg, ...settings });
    }
    case EReqTypes.Patch: {
      return axios.patch(url, values, { ...auth().appApiAuthCfg, ...settings });
    }
    case EReqTypes.Delete: {
      return axios.delete(url, { ...auth().appApiAuthCfg });
    }
    default:
      return Promise.reject();
  }
};

const api = {
  dummy: {
    fileUpload: ({ onSuccess }) => {
      setTimeout(() => {
        onSuccess('ok');
      }, 0);
    },
  },
  any: {
    get: <T>(values: Record<string, any> = {}) => {
      const config = {
        url: urls.translations,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
  },
};

export default api;

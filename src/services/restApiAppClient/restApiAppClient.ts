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
  translations: {
    get: <T>(values: Record<string, any> = {}) => {
      const config = {
        url: urls.translations,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
  },
  versions: {
    get: <T>(values: Record<string, any>, id = '', prop: ERestProp = ERestProp.Empty) => {
      const config = {
        url: `${urls.versions}${id}${prop}`,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
    post: (values: IVersion) => {
      const config = {
        url: `${urls.versions}/add`,
        values,
      };
      return makeRequest<IVersion>(EReqTypes.Post, config);
    },
    put: (values: IUser, prop: ERestProp = ERestProp.Empty) => {
      const config = {
        url: `${urls.versions}${prop}`,
        values,
      };
      return makeRequest<IVersion>(EReqTypes.Put, config);
    },
    delete: (id) => {
      const config = {
        url: `${urls.versions}/${id}/delete`,
      };
      return makeRequest<IVersion>(EReqTypes.Delete, config);
    },
  },
  paragraphs: {
    get: <T>(values: Record<string, any>) => {
      const config = {
        url: urls.paragraphs,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
    info: <T>(paragraphId: string) => {
      const config = {
        url: `${urls.paragraphs}/${paragraphId}/info`,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
  },
  commentaries: {
    get: <T>(values: Record<string, any>) => {
      const config = {
        url: urls.commentaries,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
  },
  countries: {
    get: <T>(values: Record<string, any>) => {
      const config = {
        url: urls.countries,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
  },
  languages: {
    get: <T>(values: Record<string, any>) => {
      const config = {
        url: urls.languages,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
    put: (id, values: ILanguage) => {
      const config = {
        url: `${urls.languages}/${id}/egw-code`,
        values,
      };
      return makeRequest<ILanguage>(EReqTypes.Put, config);
    },
  },
  organizations: {
    get: <T>(values: Record<string, any>, id = '', prop: ERestProp = ERestProp.Empty) => {
      const config = {
        url: `${urls.organizations}${id ? `/${id}` : ''}${prop}`,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
  },
  publications: {
    get: <T>(values: Record<string, any>) => {
      const config = {
        url: urls.publications,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
  },
  users: {
    get: <T>(values: Record<string, any>, id = '', prop: ERestProp = ERestProp.Empty) => {
      const config = {
        url: `${urls.users}${id ? `/${id}` : ''}${prop}`,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
    post: (values: IUser) => {
      const config = {
        url: `${urls.userActions}`,
        values,
      };
      return makeRequest<IUser>(EReqTypes.Post, config);
    },
    put: (id, values: IUser, prop: ERestProp = ERestProp.Empty) => {
      const config = {
        url: `${urls.userActions}/${id}${prop}`,
        values,
      };
      return makeRequest<IUser>(EReqTypes.Put, config);
    },
    patch: (id, values: IUser, prop: ERestProp = ERestProp.Empty) => {
      const config = {
        url: `${urls.userActions}/${id}${prop}`,
        values,
      };
      return makeRequest<IUser>(EReqTypes.Patch, config);
    },
    delete: (id, prop: ERestProp = ERestProp.Empty) => {
      const config = {
        url: `${urls.userActions}/${id}${prop}`,
      };
      return makeRequest<IUser>(EReqTypes.Delete, config);
    },
  },
  auth: {
    validate: <T>(token) => {
      const config = {
        url: `${urls.auth}/validate`,
        values: {
          token,
        },
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
    getProfile: <T>(token: string) => {
      const config = [
        {
          type: EReqTypes.Get,
          config: {
            url: `${urls.auth}/validate`,
            values: {
              token,
            },
          },
        },
        {
          type: EReqTypes.Get,
          config: {
            url: `${urls.users}/me`,
          },
        },
      ];
      return axios.all(config.map((item) => makeRequest<IUser | any>(item.type, item.config)));
    },
  },
  proposals: {
    get: <T>(values: Record<string, any>, id = '', prop: ERestProp = ERestProp.Empty) => {
      const config = {
        url: `${urls.proposals}${id ? `/${id}` : ''}${prop}`,
        values,
      };
      return makeRequest<T>(EReqTypes.Get, config);
    },
    post: <T>(values: T) => {
      const config = {
        url: `${urls.proposals}`,
        values,
      };
      return makeRequest<T>(EReqTypes.Post, config);
    },
    put: <T>(id, values: T, prop: ERestProp = ERestProp.Empty) => {
      const config = {
        url: `${urls.proposals}/${id}${prop}`,
        values,
      };
      return makeRequest<T>(EReqTypes.Put, config);
    },
  },
};

export default api;

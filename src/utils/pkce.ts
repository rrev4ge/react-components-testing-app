export type PKCECodePair = {
  codeVerifier: string;
  codeChallenge: string;
  createdAt: Date;
};

export const getCodeFromLocation = (location: Location): string => {
  const split = location.toString().split('?');
  if (split.length < 2) {
    return '';
  }
  const pairs = split[1].split('&');
  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    if (key === 'code') {
      return decodeURIComponent(value || '');
    }
  }
  return '';
};

export const removeCodeFromLocation = (location: Location): void => {
  const [base, search] = location.href.split('?');
  if (!search) {
    return;
  }
  const newSearch = search
    .split('&')
    .map((param) => param.split('='))
    .filter(([key]) => key !== 'code')
    .map((keyAndVal) => keyAndVal.join('='))
    .join('&');
  window.history.replaceState(window.history.state, '', base + (newSearch.length ? `?${newSearch}` : ''));
};

export const toSnakeCase = (str: string): string => {
  return str
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
};

export const toUrlEncoded = (obj: object): string => {
  return Object.keys(obj)
    .map((k) => `${encodeURIComponent(toSnakeCase(k))}=${encodeURIComponent(obj[k])}`)
    .join('&');
};

const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export const createPKCECodes = async (): Promise<PKCECodePair> => {
  const codeVerifier = generateRandomString(64);
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));

  const codeChallenge = btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const createdAt = new Date();

  const codePair = {
    codeVerifier,
    codeChallenge,
    createdAt,
  };
  return codePair;
};

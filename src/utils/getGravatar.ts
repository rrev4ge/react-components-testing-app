import md5 from 'md5';

export interface IOptions {
  size?: string;
  rating?: 'g' | 'pg' | 'r' | 'x';
  default?: '404' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro:' | 'robohash' | 'blank';
}

const getGravatar = (email = '', options: IOptions = {}) => {
  const EMAIL = email || '';
  const SIZE = options.size || '32';
  const RATING = options.rating || 'g';
  const DEFAULT = options.default || 'mp';
  return `//www.gravatar.com/avatar/${md5(EMAIL)}?s=${SIZE}&r=${RATING}&d=${DEFAULT}`;
};

export default getGravatar;

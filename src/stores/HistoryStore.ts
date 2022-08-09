import { makeAutoObservable } from 'mobx';
import queryString from 'query-string';
import RootStore from './RootStore';

export interface ILocation<S = unknown> {
  pathname?: string;
  search?: string;
  state?: S | undefined;
}

class HistoryStore {
  root: RootStore;

  public location: ILocation = null!;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setLocation = ({ pathname, search, state }: ILocation): void => {
    const paramsStringify = (params: any): string =>
      `?${queryString.stringify(params, {
        skipEmptyString: true,
        skipNull: true,
      })}`;

    this.location = { ...this.location, pathname, search, state };
  };

  resetLocation = (): void => {
    this.location = null!;
  };
}

export default HistoryStore;

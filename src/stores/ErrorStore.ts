import { AxiosError } from 'axios';
import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';

export interface IError {
  errorCode: string | number | null | undefined;
  error: AxiosError | null;
}

class ErrorStore {
  root: RootStore;

  public errorCode: IError['errorCode'] = null;

  public error: IError['error'] = null;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }

  setError = (error: IError): void => {
    this.errorCode = error.errorCode;
    this.error = error.error;
  };

  resetError = (): void => {
    this.errorCode = null;
    this.error = null;
  };
}

export default ErrorStore;

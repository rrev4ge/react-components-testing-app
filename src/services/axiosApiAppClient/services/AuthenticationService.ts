/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthenticationService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Validates token correctness
   * @param token Authorization token to validate
   * @returns void
   * @throws ApiError
   */
  public getAuthValidate(token: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/auth/validate',
      query: {
        token: token,
      },
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}

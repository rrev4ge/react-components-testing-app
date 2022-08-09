/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UtilitiesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @deprecated
   * Migrates database
   * @returns any Success
   * @throws ApiError
   */
  public postUtilitiesMigrateOrg(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/_/utilities/migrate-org',
    });
  }

  /**
   * @deprecated
   * Migrates database
   * @returns any Success
   * @throws ApiError
   */
  public postUtilitiesMigrateTranslations(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/_/utilities/migrate-translations',
    });
  }
}

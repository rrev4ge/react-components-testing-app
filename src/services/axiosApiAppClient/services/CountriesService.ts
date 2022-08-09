/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountryDtoPaginatedResponse } from '../models/CountryDtoPaginatedResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CountriesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List countries
   * @param orderBy Order by
   * @param limit Request limit
   * @param offset Request offset
   * @param code Country code
   * @param query Search query
   * @returns CountryDtoPaginatedResponse Success
   * @throws ApiError
   */
  public getApiOrgCountries(
    orderBy?: Array<'code' | '-code' | 'name' | '-name'>,
    limit?: number,
    offset?: number,
    code?: string,
    query?: string,
  ): CancelablePromise<CountryDtoPaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/countries',
      query: {
        orderBy: orderBy,
        limit: limit,
        offset: offset,
        code: code,
        query: query,
      },
    });
  }
}

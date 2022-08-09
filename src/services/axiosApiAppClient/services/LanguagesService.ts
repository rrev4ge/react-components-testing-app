/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LanguageDtoPaginatedResponse } from '../models/LanguageDtoPaginatedResponse';
import type { SetEgwCodePayload } from '../models/SetEgwCodePayload';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LanguagesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List languages
   * @param orderBy Order by
   * @param limit Request limit
   * @param offset Request offset
   * @param code ISO Language code
   * @param egwCode EGW Language code
   * @param query Search query
   * @returns LanguageDtoPaginatedResponse Success
   * @throws ApiError
   */
  public getApiOrgLanguages(
    orderBy?: Array<'code' | '-code' | 'name' | '-name' | 'egwCode' | '-egwCode'>,
    limit?: number,
    offset?: number,
    code?: Array<string>,
    egwCode?: string,
    query?: string,
  ): CancelablePromise<LanguageDtoPaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/languages',
      query: {
        orderBy: orderBy,
        limit: limit,
        offset: offset,
        code: code,
        egwCode: egwCode,
        query: query,
      },
    });
  }

  /**
   * Sets EGW Code for language
   * @param code ISO Code
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public putApiOrgLanguagesEgwCode(code: string, requestBody?: SetEgwCodePayload): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/org/languages/{code}/egw-code',
      path: {
        code: code,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}

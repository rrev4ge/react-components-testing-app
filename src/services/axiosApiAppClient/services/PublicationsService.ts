/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PublicationDtoPaginatedResponse } from '../models/PublicationDtoPaginatedResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PublicationsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Lists publications
   * @param orderBy Order by
   * @param limit Request limit
   * @param offset Request offset
   * @param ids Publication ID List
   * @param parents Publication ID List
   * @param language Publication Language
   * @param code Publication Code
   * @param query Search query
   * @returns PublicationDtoPaginatedResponse Success
   * @throws ApiError
   */
  public getApiOrgPublications(
    orderBy?: Array<'id' | '-id' | 'languageCode' | '-languageCode' | 'code' | '-code' | 'title' | '-title'>,
    limit?: number,
    offset?: number,
    ids?: Array<number>,
    parents?: Array<number>,
    language?: string,
    code?: string,
    query?: string,
  ): CancelablePromise<PublicationDtoPaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/publications',
      query: {
        orderBy: orderBy,
        limit: limit,
        offset: offset,
        ids: ids,
        parents: parents,
        language: language,
        code: code,
        query: query,
      },
    });
  }
}

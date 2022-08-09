/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalStatusEnum } from '../models/ApprovalStatusEnum';
import type { ParagraphInfoResponse } from '../models/ParagraphInfoResponse';
import type { ParagraphsListResponsePaginatedResponse } from '../models/ParagraphsListResponsePaginatedResponse';
import type { VersionResponsePaginatedResponse } from '../models/VersionResponsePaginatedResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ParagraphsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get paragraphs list
   * @param limit Request limit
   * @param offset Request offset
   * @param translationId * Translation Id
   * @param paragraphId * Paragraphs Id
   * @param paraId * Para Ids
   * @param bookId *  Translated Book Id
   * @param originalBookId *  Original book id
   * @param modifiedAfter Last modified after
   * @returns ParagraphsListResponsePaginatedResponse Success
   * @throws ApiError
   */
  public getApiEditorParagraphs(
    limit?: number,
    offset?: number,
    translationId?: string,
    paragraphId?: Array<string>,
    paraId?: Array<string>,
    bookId?: number,
    originalBookId?: number,
    modifiedAfter?: string,
  ): CancelablePromise<ParagraphsListResponsePaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/editor/paragraphs',
      query: {
        limit: limit,
        offset: offset,
        translationId: translationId,
        paragraphId: paragraphId,
        paraId: paraId,
        bookId: bookId,
        originalBookId: originalBookId,
        modifiedAfter: modifiedAfter,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }

  /**
   * Get single paragraph
   * @param paragraphId
   * @returns ParagraphInfoResponse Success
   * @throws ApiError
   */
  public getApiEditorParagraphsInfo(paragraphId: string): CancelablePromise<ParagraphInfoResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/editor/paragraphs/{paragraphId}/info',
      path: {
        paragraphId: paragraphId,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }

  /**
   * Get sliced paragraphs
   * @param translationId TranslationId
   * @param startParagraphId Start paragraphId
   * @param limit Paragraph count
   * @returns ParagraphInfoResponse Success
   * @throws ApiError
   */
  public getApiEditorParagraphsSlice(
    translationId: string,
    startParagraphId: string,
    limit?: number,
  ): CancelablePromise<Array<ParagraphInfoResponse>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/editor/paragraphs/slice',
      query: {
        translationId: translationId,
        startParagraphId: startParagraphId,
        limit: limit,
      },
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Get paragraph versions
   * @param paragraphId
   * @param limit Request limit
   * @param offset Request offset
   * @param lastOnly Get last version only
   * @param isActive Get active version
   * @param status Approval status
   * @param fromDate From date
   * @param toDate To date
   * @returns VersionResponsePaginatedResponse Success
   * @throws ApiError
   */
  public getApiEditorParagraphsVersions(
    paragraphId: string,
    limit?: number,
    offset?: number,
    lastOnly?: boolean,
    isActive?: boolean,
    status?: ApprovalStatusEnum,
    fromDate?: string,
    toDate?: string,
  ): CancelablePromise<VersionResponsePaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/editor/paragraphs/{paragraphId}/versions',
      path: {
        paragraphId: paragraphId,
      },
      query: {
        limit: limit,
        offset: offset,
        lastOnly: lastOnly,
        isActive: isActive,
        status: status,
        fromDate: fromDate,
        toDate: toDate,
      },
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
}

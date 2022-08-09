/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalStatusEnum } from '../models/ApprovalStatusEnum';
import type { CreateSkeletonRequest } from '../models/CreateSkeletonRequest';
import type { SetTranslationStatusRequest } from '../models/SetTranslationStatusRequest';
import type { TranslationResponsePaginatedResponse } from '../models/TranslationResponsePaginatedResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TranslationsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Translations list
   * @param limit Request limit
   * @param offset Request offset
   * @param translationId Translations Id (GUID)
   * @param languageCode Languages code
   * @param code Books code
   * @param originalBookId Original books Id
   * @param translatedBookId Translated books Id
   * @param status Translation status
   * @returns TranslationResponsePaginatedResponse Success
   * @throws ApiError
   */
  public getApiEditorTranslations(
    limit?: number,
    offset?: number,
    translationId?: Array<string>,
    languageCode?: Array<string>,
    code?: Array<string>,
    originalBookId?: Array<number>,
    translatedBookId?: Array<number>,
    status?: Array<ApprovalStatusEnum>,
  ): CancelablePromise<TranslationResponsePaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/editor/translations',
      query: {
        limit: limit,
        offset: offset,
        translationId: translationId,
        languageCode: languageCode,
        code: code,
        originalBookId: originalBookId,
        translatedBookId: translatedBookId,
        status: status,
      },
      errors: {
        400: `Bad Request`,
      },
    });
  }

  /**
   * Change translation status
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public putApiEditorTranslationsStatus(requestBody?: SetTranslationStatusRequest): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/editor/translations/status',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
      },
    });
  }

  /**
   * Create book skeleton for translate
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public postApiEditorTranslationsSkeleton(requestBody?: CreateSkeletonRequest): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/editor/translations/skeleton',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
}

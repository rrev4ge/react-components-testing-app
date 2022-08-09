/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddVersionRequest } from '../models/AddVersionRequest';
import type { SetActiveVersionRequest } from '../models/SetActiveVersionRequest';
import type { SetVersionStatusRequest } from '../models/SetVersionStatusRequest';
import type { UnlockVersionRequest } from '../models/UnlockVersionRequest';
import type { VersionInfoResponse } from '../models/VersionInfoResponse';
import type { VersionResponsePaginatedResponse } from '../models/VersionResponsePaginatedResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class VersionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get version info
   * @param versionId
   * @returns VersionInfoResponse Success
   * @throws ApiError
   */
  public getApiEditorVersionsInfo(versionId: string): CancelablePromise<VersionInfoResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/editor/versions/{versionId}/info',
      path: {
        versionId: versionId,
      },
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Add paragraph version
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public postApiEditorVersionsAdd(requestBody?: AddVersionRequest): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/editor/versions/add',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
      },
    });
  }

  /**
   * Change version status
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public putApiEditorVersionsStatus(requestBody?: SetVersionStatusRequest): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/editor/versions/status',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
      },
    });
  }

  /**
   * Unlock version
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public putApiEditorVersionsUnlock(requestBody?: UnlockVersionRequest): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/editor/versions/unlock',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Set active version
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public putApiEditorVersionsActive(requestBody?: SetActiveVersionRequest): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/editor/versions/active',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Delete version
   * @param versionId
   * @returns void
   * @throws ApiError
   */
  public deleteApiEditorVersionsDelete(versionId: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/editor/versions/{versionId}/delete',
      path: {
        versionId: versionId,
      },
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Get user versions
   * @param limit Request limit
   * @param offset Request offset
   * @param userId User Id
   * @param translationId Translation Id
   * @param paragraphId Paragraph Id
   * @returns VersionResponsePaginatedResponse Success
   * @throws ApiError
   */
  public getApiEditorVersionsByUser(
    limit?: number,
    offset?: number,
    userId?: string,
    translationId?: string,
    paragraphId?: string,
  ): CancelablePromise<VersionResponsePaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/editor/versions/by_user',
      query: {
        limit: limit,
        offset: offset,
        userId: userId,
        translationId: translationId,
        paragraphId: paragraphId,
      },
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
}

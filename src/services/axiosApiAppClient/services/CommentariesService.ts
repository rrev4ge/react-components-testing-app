/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCommentaryRequest } from '../models/AddCommentaryRequest';
import type { CommentaryResponsePaginatedResponse } from '../models/CommentaryResponsePaginatedResponse';
import type { CommentaryTypeEnum } from '../models/CommentaryTypeEnum';
import type { EditCommentaryRequest } from '../models/EditCommentaryRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CommentariesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get commentaries
   * @param id Source Id
   * @param type Source type
   * @param limit Request limit
   * @param offset Request offset
   * @returns CommentaryResponsePaginatedResponse Success
   * @throws ApiError
   */
  public getApiEditorCommentaries(
    id: string,
    type: CommentaryTypeEnum,
    limit?: number,
    offset?: number,
  ): CancelablePromise<CommentaryResponsePaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/editor/commentaries',
      query: {
        limit: limit,
        offset: offset,
        id: id,
        type: type,
      },
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Add commentary
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public postApiEditorCommentariesAdd(requestBody?: AddCommentaryRequest): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/editor/commentaries/add',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Edit commentary
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public putApiEditorCommentariesEdit(requestBody?: EditCommentaryRequest): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/editor/commentaries/edit',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }

  /**
   * Delete commentary
   * @param commentaryId
   * @returns void
   * @throws ApiError
   */
  public deleteApiEditorCommentariesDelete(commentaryId: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/editor/commentaries/{commentaryId}/delete',
      path: {
        commentaryId: commentaryId,
      },
      errors: {
        400: `Bad Request`,
        404: `Not Found`,
      },
    });
  }
}

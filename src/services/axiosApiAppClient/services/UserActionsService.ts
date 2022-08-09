/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddUserRolesPayload } from '../models/AddUserRolesPayload';
import type { CreateUserPayload } from '../models/CreateUserPayload';
import type { UpdateUserEmailPayload } from '../models/UpdateUserEmailPayload';
import type { UpdateUserNamePayload } from '../models/UpdateUserNamePayload';
import type { UpdateUserOrganizationPayload } from '../models/UpdateUserOrganizationPayload';
import type { UpdateUserStatusPayload } from '../models/UpdateUserStatusPayload';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserActionsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create a new user
   * @param requestBody Request
   * @returns any Success
   * @throws ApiError
   */
  public postApiOrgUserActions(requestBody?: CreateUserPayload): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/org/user-actions',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a user
   * @param userId User Id
   * @returns any Success
   * @throws ApiError
   */
  public deleteApiOrgUserActions(userId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/org/user-actions/{userId}',
      path: {
        userId: userId,
      },
    });
  }

  /**
   * Clear user roles
   * @param userId User Id
   * @returns any Success
   * @throws ApiError
   */
  public deleteApiOrgUserActionsRoles(userId: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/org/user-actions/{userId}/roles',
      path: {
        userId: userId,
      },
    });
  }

  /**
   * Replaces user roles
   * @param userId User Id
   * @param requestBody Request body
   * @returns any Success
   * @throws ApiError
   */
  public putApiOrgUserActionsRoles(userId: string, requestBody?: AddUserRolesPayload): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/org/user-actions/{userId}/roles',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Updates user roles
   * @param userId User Id
   * @param requestBody Request body
   * @returns any Success
   * @throws ApiError
   */
  public patchApiOrgUserActionsRoles(userId: string, requestBody?: AddUserRolesPayload): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/api/org/user-actions/{userId}/roles',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Set user first and last name
   * @param userId User Id
   * @param requestBody Request body
   * @returns any Success
   * @throws ApiError
   */
  public putApiOrgUserActionsName(userId: string, requestBody?: UpdateUserNamePayload): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/org/user-actions/{userId}/name',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Set user email
   * @param userId User id
   * @param requestBody Request body
   * @returns any Success
   * @throws ApiError
   */
  public putApiOrgUserActionsEmail(userId: string, requestBody?: UpdateUserEmailPayload): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/org/user-actions/{userId}/email',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Set user status
   * @param userId User id
   * @param requestBody Request body
   * @returns any Success
   * @throws ApiError
   */
  public putApiOrgUserActionsStatus(userId: string, requestBody?: UpdateUserStatusPayload): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/org/user-actions/{userId}/status',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Move user to another organization
   * @param userId User ID
   * @param requestBody Request body
   * @returns any Success
   * @throws ApiError
   */
  public putApiOrgUserActionsOrg(userId: string, requestBody?: UpdateUserOrganizationPayload): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/org/user-actions/{userId}/org',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationRole } from '../models/OrganizationRole';
import type { UserDto } from '../models/UserDto';
import type { UserDtoPaginatedResponse } from '../models/UserDtoPaginatedResponse';
import type { UserRoleSetDto } from '../models/UserRoleSetDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Returns user info
   * @returns UserDto Success
   * @throws ApiError
   */
  public getApiOrgUsersMe(): CancelablePromise<UserDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/users/me',
    });
  }

  /**
   * List users
   * @param orderBy Order by
   * @param limit Request limit
   * @param offset Request offset
   * @param query Search query
   * @param organizations Organization
   * @param role Filter user by role
   * @param enabled User is enabled
   * @param ids User Id List
   * @returns UserDtoPaginatedResponse Success
   * @throws ApiError
   */
  public getApiOrgUsers(
    orderBy?: Array<'email' | '-email' | 'firstName' | '-firstName' | 'lastName' | '-lastName'>,
    limit?: number,
    offset?: number,
    query?: string,
    organizations?: Array<string>,
    role?: OrganizationRole,
    enabled?: boolean,
    ids?: Array<string>,
  ): CancelablePromise<UserDtoPaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/users',
      query: {
        orderBy: orderBy,
        limit: limit,
        offset: offset,
        query: query,
        organizations: organizations,
        role: role,
        enabled: enabled,
        ids: ids,
      },
    });
  }

  /**
   * Retrieves user details
   * @param userId
   * @returns UserDto Success
   * @throws ApiError
   */
  public getApiOrgUsers1(userId: string): CancelablePromise<UserDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/users/{userId}',
      path: {
        userId: userId,
      },
    });
  }

  /**
   * Retrieves user details
   * @param userId User id
   * @param w Avatar width
   * @returns void
   * @throws ApiError
   */
  public getApiOrgUsersAvatar(userId: string, w?: number): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/users/{userId}/avatar',
      path: {
        userId: userId,
      },
      query: {
        w: w,
      },
      errors: {
        302: `Redirect`,
      },
    });
  }

  /**
   * Retrieves list of available user roles
   * @param userId
   * @returns UserRoleSetDto Success
   * @throws ApiError
   */
  public getApiOrgUsersRoles(userId: string): CancelablePromise<UserRoleSetDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/users/{userId}/roles',
      path: {
        userId: userId,
      },
    });
  }
}

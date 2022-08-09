/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDto } from './UserDto';

/**
 * Base paginated class
 */
export type UserDtoPaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<UserDto> | null;
  /**
   * Total item count
   */
  totalCount?: number;
  /**
   * Requested limit
   */
  readonly limit?: number;
  /**
   * Requested offset
   */
  readonly offset?: number;
};

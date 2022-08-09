/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VersionResponse } from './VersionResponse';

/**
 * Base paginated class
 */
export type VersionResponsePaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<VersionResponse> | null;
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

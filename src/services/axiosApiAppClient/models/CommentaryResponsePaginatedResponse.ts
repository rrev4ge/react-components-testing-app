/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentaryResponse } from './CommentaryResponse';

/**
 * Base paginated class
 */
export type CommentaryResponsePaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<CommentaryResponse> | null;
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

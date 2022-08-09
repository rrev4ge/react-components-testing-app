/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ParagraphsListResponse } from './ParagraphsListResponse';

/**
 * Base paginated class
 */
export type ParagraphsListResponsePaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<ParagraphsListResponse> | null;
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

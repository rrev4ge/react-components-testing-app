/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TranslationResponse } from './TranslationResponse';

/**
 * Base paginated class
 */
export type TranslationResponsePaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<TranslationResponse> | null;
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

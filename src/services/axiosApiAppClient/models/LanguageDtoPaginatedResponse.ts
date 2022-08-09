/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LanguageDto } from './LanguageDto';

/**
 * Base paginated class
 */
export type LanguageDtoPaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<LanguageDto> | null;
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

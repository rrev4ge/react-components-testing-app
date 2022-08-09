/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CountryDto } from './CountryDto';

/**
 * Base paginated class
 */
export type CountryDtoPaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<CountryDto> | null;
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

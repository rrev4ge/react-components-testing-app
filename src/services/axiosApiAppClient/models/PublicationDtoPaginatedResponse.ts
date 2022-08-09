/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PublicationDto } from './PublicationDto';

/**
 * Base paginated class
 */
export type PublicationDtoPaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<PublicationDto> | null;
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

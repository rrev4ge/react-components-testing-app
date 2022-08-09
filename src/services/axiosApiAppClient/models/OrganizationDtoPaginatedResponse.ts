/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationDto } from './OrganizationDto';

/**
 * Base paginated class
 */
export type OrganizationDtoPaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<OrganizationDto> | null;
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

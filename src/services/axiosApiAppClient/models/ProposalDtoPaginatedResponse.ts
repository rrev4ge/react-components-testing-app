/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProposalDto } from './ProposalDto';

/**
 * Base paginated class
 */
export type ProposalDtoPaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<ProposalDto> | null;
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

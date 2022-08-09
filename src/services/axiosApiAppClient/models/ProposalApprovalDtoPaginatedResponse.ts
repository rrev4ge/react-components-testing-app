/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProposalApprovalDto } from './ProposalApprovalDto';

/**
 * Base paginated class
 */
export type ProposalApprovalDtoPaginatedResponse = {
  /**
   * Returned list of items
   */
  items?: Array<ProposalApprovalDto> | null;
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

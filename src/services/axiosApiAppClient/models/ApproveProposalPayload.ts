/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalStatus } from './ApprovalStatus';
import type { OrganizationLevel } from './OrganizationLevel';

/**
 * Approval proposal
 */
export type ApproveProposalPayload = {
  level?: OrganizationLevel;
  status?: ApprovalStatus;
  /**
   * Comment
   */
  comment?: string | null;
};

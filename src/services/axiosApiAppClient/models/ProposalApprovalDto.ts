/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalStatus } from './ApprovalStatus';
import type { OrganizationLevel } from './OrganizationLevel';

/**
 * Approval
 */
export type ProposalApprovalDto = {
  /**
   * Approval ID
   */
  readonly approvalId?: string;
  level?: OrganizationLevel;
  status?: ApprovalStatus;
  /**
   * User, who made last change
   */
  readonly approvedById?: string;
  /**
   * Approval comment
   */
  readonly comment?: string | null;
  /**
   * Date of creation
   */
  readonly createdAt?: string;
  /**
   * Date of last modification
   */
  readonly updatedAt?: string;
};

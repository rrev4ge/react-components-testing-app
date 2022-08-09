/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalStatus } from './ApprovalStatus';

/**
 * Translation proposal
 */
export type ProposalDto = {
  /**
   * Proposal ID
   */
  proposalId?: string;
  /**
   * User who proposed
   */
  proposerId?: string;
  /**
   * Union ID
   */
  organizationId?: string | null;
  /**
   * English book ID
   */
  englishBookId?: number;
  /**
   * Target language code
   */
  languageId?: string | null;
  /**
   * Proposed code
   */
  code?: string | null;
  /**
   * Proposed title
   */
  title?: string | null;
  /**
   * Date when proposal was created
   */
  createdAt?: string;
  /**
   * Last modification date of proposal
   */
  updatedAt?: string;
  status?: ApprovalStatus;
};

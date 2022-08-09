/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Create proposal
 */
export type CreateProposalPayload = {
  /**
   * English book id
   */
  bookId?: number;
  /**
   * Translation language
   */
  language?: string | null;
  /**
   * Translation code
   */
  code?: string | null;
  /**
   * Translation title
   */
  title?: string | null;
  /**
   * Organization Id
   */
  organizationId?: string | null;
  /**
   * Proposal comment
   */
  comment?: string | null;
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalResponse } from './ApprovalResponse';
import type { ApprovalStatusEnum } from './ApprovalStatusEnum';
import type { CommentaryResponse } from './CommentaryResponse';

/**
 * Single version info response
 */
export type VersionInfoResponse = {
  /**
   * Version Id
   */
  id?: string;
  /**
   * Paragraph Id
   */
  paragraphId?: string;
  /**
   * Version content
   */
  content?: string | null;
  status?: ApprovalStatusEnum;
  /**
   * Is version active
   */
  isActive?: boolean;
  /**
   * Is locked
   */
  isLocked?: boolean;
  /**
   * Create date
   */
  createdAt?: string;
  /**
   * Update date
   */
  updatedAt?: string;
  /**
   * User Id
   */
  userId?: string;
  /**
   * Version commentaries
   */
  commentaries?: Array<CommentaryResponse> | null;
  /**
   * Approvals
   */
  approvals?: Array<ApprovalResponse> | null;
};

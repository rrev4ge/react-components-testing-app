/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalStatusEnum } from './ApprovalStatusEnum';
import type { CommentaryResponse } from './CommentaryResponse';

/**
 * Paragraph version response
 */
export type VersionResponse = {
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
};

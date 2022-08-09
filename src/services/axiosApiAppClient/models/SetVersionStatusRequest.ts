/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalStatusEnum } from './ApprovalStatusEnum';

/**
 * Set version status request
 */
export type SetVersionStatusRequest = {
  /**
   * Paragraph Id
   */
  paragraphId?: string;
  /**
   * Translation Id
   */
  versionId?: string;
  status?: ApprovalStatusEnum;
};

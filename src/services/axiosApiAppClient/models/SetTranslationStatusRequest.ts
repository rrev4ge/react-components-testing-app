/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalStatusEnum } from './ApprovalStatusEnum';

/**
 * Change translation status request
 */
export type SetTranslationStatusRequest = {
  /**
   * Translation Id
   */
  translationId?: string;
  status?: ApprovalStatusEnum;
};

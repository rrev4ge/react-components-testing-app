/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalStatusEnum } from './ApprovalStatusEnum';

/**
 * Approval response
 */
export type ApprovalResponse = {
  /**
   * Id
   */
  id?: string;
  /**
   * User Id
   */
  userId?: string;
  status?: ApprovalStatusEnum;
  /**
   * Created date
   */
  createdAt?: string;
};

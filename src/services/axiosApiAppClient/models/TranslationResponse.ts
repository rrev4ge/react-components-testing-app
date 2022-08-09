/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApprovalStatusEnum } from './ApprovalStatusEnum';

/**
 * Translation response
 */
export type TranslationResponse = {
  /**
   * Translation Id
   */
  id?: string;
  status?: ApprovalStatusEnum;
  /**
   * Book code
   */
  code?: string | null;
  /**
   * Language code
   */
  languageCode?: string | null;
  /**
   * Book title
   */
  title?: string | null;
  /**
   * Translated book Id
   */
  bookId?: number;
  /**
   * Original book Id
   */
  originalBookId?: number;
  /**
   * ISBN
   */
  isbn?: string | null;
  /**
   * Created At
   */
  createdAt?: string;
  /**
   * Updated At
   */
  updatedAt?: string;
  /**
   * Paragraphs count
   */
  paragraphsCount?: number;
  /**
   * Approved paragraphs count
   */
  approvedParagraphsCount?: number;
};

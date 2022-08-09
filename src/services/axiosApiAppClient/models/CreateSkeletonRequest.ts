/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Create skeleton request
 */
export type CreateSkeletonRequest = {
  /**
   * Translation Id
   */
  translationId?: string;
  /**
   * Book Id translated
   */
  bookId?: number;
  /**
   * Original book Id
   */
  originalBookId?: number;
  /**
   * Target language code (de, ru etc.)
   */
  languageCode?: string | null;
  /**
   * Egw language code
   */
  egwLanguageCode?: string | null;
  /**
   * Translated book code
   */
  bookCode?: string | null;
  /**
   * Translated book title
   */
  title?: string | null;
};

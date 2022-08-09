/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VersionResponse } from './VersionResponse';

/**
 * Paragraph response
 */
export type ParagraphsListResponse = {
  /**
   * Paragraph Id
   */
  id?: string;
  /**
   * Book Id
   */
  bookId?: number;
  /**
   * Para Id
   */
  paraId?: string | null;
  /**
   * Chapter Id
   */
  chapterId?: number;
  /**
   * Chapter Key (GUID)
   */
  tocId?: string | null;
  /**
   * Translation Key (GUID)
   */
  translationId?: string;
  /**
   * Original content
   */
  originalContent?: string | null;
  version?: VersionResponse;
  /**
   * Versions count
   */
  versionsCount?: number;
  /**
   * Commentaries count
   */
  commentariesCount?: number;
  /**
   * Logs count
   */
  logsCount?: number;
  /**
   * Paragraph in book order
   */
  order?: number;
};

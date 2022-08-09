/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Publication model
 */
export type PublicationDto = {
  /**
   * Publication ID
   */
  id?: number;
  /**
   * Language code
   */
  languageCode?: string | null;
  /**
   * Original (English) publication ID
   */
  originalPublicationId?: number | null;
  /**
   * Publication code
   */
  code?: string | null;
  /**
   * Publication title
   */
  title?: string | null;
  /**
   * Number of chapters
   */
  chapterCount?: number | null;
  /**
   * Number of ROUTES
   */
  pageCount?: number | null;
  /**
   * Date of upload
   */
  createdAt?: string;
  /**
   * Date of last modification
   */
  updatedAt?: string;
};

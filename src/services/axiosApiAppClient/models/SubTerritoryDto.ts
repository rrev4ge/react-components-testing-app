/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Sub-territory (country-language combination)
 */
export type SubTerritoryDto = {
  /**
   * Language ID
   */
  languageCode?: string | null;
  /**
   * Country ID
   */
  countryId?: string | null;
  /**
   * Number of people speaking this on this language in this country
   */
  speakers?: number;
};

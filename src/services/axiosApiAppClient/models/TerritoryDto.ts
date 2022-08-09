/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SubTerritoryDto } from './SubTerritoryDto';

/**
 * Union territory
 */
export type TerritoryDto = {
  /**
   * Territory name
   */
  name?: string | null;
  /**
   * Number of churches
   */
  churchCount?: number;
  /**
   * Number of church members
   */
  memberCount?: number;
  /**
   * Total populateion
   */
  population?: number;
  /**
   * Language statistics
   */
  territoryLanguages?: Array<SubTerritoryDto> | null;
};

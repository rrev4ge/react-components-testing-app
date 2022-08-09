/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationLevel } from './OrganizationLevel';
import type { TerritoryDto } from './TerritoryDto';

/**
 * Extended organization info
 */
export type OrganizationExtendedDto = {
  /**
   * Division ID
   */
  organizationId?: string | null;
  /**
   * Parent Id
   */
  parentId?: string | null;
  /**
   * Organization name
   */
  name?: string | null;
  level?: OrganizationLevel;
  /**
   * Child organization count
   */
  childCount?: number;
  /**
   * List of available languages
   */
  languages?: Array<string> | null;
  territory?: TerritoryDto;
};

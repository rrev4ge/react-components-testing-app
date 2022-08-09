/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationRole } from './OrganizationRole';

/**
 * Role details
 */
export type RoleDetailsDto = {
  role?: OrganizationRole;
  /**
   * If role can be set/unset by current user
   */
  canBeSet?: boolean;
  /**
   * Role is enabled for a user
   */
  isEnabled?: boolean;
};

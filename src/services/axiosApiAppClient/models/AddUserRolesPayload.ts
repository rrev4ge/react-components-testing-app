/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationRole } from './OrganizationRole';

/**
 * Payload for adding user roles
 */
export type AddUserRolesPayload = {
  /**
   * List of roles to add
   */
  roles?: Array<OrganizationRole> | null;
};

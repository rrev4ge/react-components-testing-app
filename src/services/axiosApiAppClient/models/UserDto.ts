/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrganizationRole } from './OrganizationRole';

/**
 * User transfer object
 */
export type UserDto = {
  /**
   * User id
   */
  userId?: string;
  /**
   * Email
   */
  email?: string | null;
  /**
   * First name
   */
  firstName?: string | null;
  /**
   * Last name
   */
  lastName?: string | null;
  /**
   * Division id
   */
  organizationId?: string | null;
  /**
   * Is enabled
   */
  isEnabled?: boolean;
  /**
   * Date of creation
   */
  createdAt?: string;
  /**
   * Date of last login
   */
  updatedAt?: string;
  /**
   * List of assigned roles
   */
  roles?: Array<OrganizationRole> | null;
};

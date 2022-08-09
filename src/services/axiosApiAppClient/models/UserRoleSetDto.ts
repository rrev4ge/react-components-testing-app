/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleDetailsDto } from './RoleDetailsDto';

/**
 * Role set
 */
export type UserRoleSetDto = {
  /**
   * Roles
   */
  roles?: Record<string, Array<RoleDetailsDto>> | null;
};

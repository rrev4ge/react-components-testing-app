/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RoleDetailsDto = {
  description: `Role details`,
  properties: {
    role: {
      type: 'OrganizationRole',
    },
    canBeSet: {
      type: 'boolean',
      description: `If role can be set/unset by current user`,
    },
    isEnabled: {
      type: 'boolean',
      description: `Role is enabled for a user`,
    },
  },
} as const;

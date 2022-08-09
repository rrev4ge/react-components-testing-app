/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AddUserRolesPayload = {
  description: `Payload for adding user roles`,
  properties: {
    roles: {
      type: 'array',
      contains: {
        type: 'OrganizationRole',
      },
      isNullable: true,
    },
  },
} as const;

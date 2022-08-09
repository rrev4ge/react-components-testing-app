/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserRoleSetDto = {
  description: `Role set`,
  properties: {
    roles: {
      type: 'dictionary',
      contains: {
        type: 'array',
        contains: {
          type: 'RoleDetailsDto',
        },
      },
      isNullable: true,
    },
  },
} as const;

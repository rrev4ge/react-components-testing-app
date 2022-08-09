/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserDto = {
  description: `User transfer object`,
  properties: {
    userId: {
      type: 'string',
      description: `User id`,
      format: 'uuid',
    },
    email: {
      type: 'string',
      description: `Email`,
      isNullable: true,
    },
    firstName: {
      type: 'string',
      description: `First name`,
      isNullable: true,
    },
    lastName: {
      type: 'string',
      description: `Last name`,
      isNullable: true,
    },
    organizationId: {
      type: 'string',
      description: `Division id`,
      isNullable: true,
    },
    isEnabled: {
      type: 'boolean',
      description: `Is enabled`,
    },
    createdAt: {
      type: 'string',
      description: `Date of creation`,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      description: `Date of last login`,
      format: 'date-time',
    },
    roles: {
      type: 'array',
      contains: {
        type: 'OrganizationRole',
      },
      isNullable: true,
    },
  },
} as const;

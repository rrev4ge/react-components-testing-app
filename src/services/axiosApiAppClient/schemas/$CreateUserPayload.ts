/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateUserPayload = {
  description: `Create user request`,
  properties: {
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
      description: `Organization ID`,
      isNullable: true,
    },
  },
} as const;

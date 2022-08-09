/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateUserNamePayload = {
  description: `Update user name`,
  properties: {
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
  },
} as const;

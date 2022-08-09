/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LogResponse = {
  description: `Log response`,
  properties: {
    id: {
      type: 'string',
      description: `Id`,
      format: 'uuid',
    },
    userId: {
      type: 'string',
      description: `UserId`,
      format: 'uuid',
    },
    content: {
      type: 'string',
      description: `Content`,
      isNullable: true,
    },
    createdAt: {
      type: 'string',
      description: `Created date`,
      format: 'date-time',
    },
  },
} as const;

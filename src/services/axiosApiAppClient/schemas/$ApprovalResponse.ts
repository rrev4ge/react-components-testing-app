/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ApprovalResponse = {
  description: `Approval response`,
  properties: {
    id: {
      type: 'string',
      description: `Id`,
      format: 'uuid',
    },
    userId: {
      type: 'string',
      description: `User Id`,
      format: 'uuid',
    },
    status: {
      type: 'ApprovalStatusEnum',
    },
    createdAt: {
      type: 'string',
      description: `Created date`,
      format: 'date-time',
    },
  },
} as const;

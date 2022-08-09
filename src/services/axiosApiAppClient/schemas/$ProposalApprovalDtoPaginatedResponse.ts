/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProposalApprovalDtoPaginatedResponse = {
  description: `Base paginated class`,
  properties: {
    items: {
      type: 'array',
      contains: {
        type: 'ProposalApprovalDto',
      },
      isNullable: true,
    },
    totalCount: {
      type: 'number',
      description: `Total item count`,
      format: 'int32',
    },
    limit: {
      type: 'number',
      description: `Requested limit`,
      isReadOnly: true,
      format: 'int32',
    },
    offset: {
      type: 'number',
      description: `Requested offset`,
      isReadOnly: true,
      format: 'int32',
    },
  },
} as const;

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProposalApprovalDto = {
  description: `Approval`,
  properties: {
    approvalId: {
      type: 'string',
      description: `Approval ID`,
      isReadOnly: true,
      format: 'uuid',
    },
    level: {
      type: 'OrganizationLevel',
    },
    status: {
      type: 'ApprovalStatus',
    },
    approvedById: {
      type: 'string',
      description: `User, who made last change`,
      isReadOnly: true,
      format: 'uuid',
    },
    comment: {
      type: 'string',
      description: `Approval comment`,
      isReadOnly: true,
      isNullable: true,
    },
    createdAt: {
      type: 'string',
      description: `Date of creation`,
      isReadOnly: true,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      description: `Date of last modification`,
      isReadOnly: true,
      format: 'date-time',
    },
  },
} as const;

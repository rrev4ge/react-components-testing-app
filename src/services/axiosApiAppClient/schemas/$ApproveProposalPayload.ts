/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ApproveProposalPayload = {
  description: `Approval proposal`,
  properties: {
    level: {
      type: 'OrganizationLevel',
    },
    status: {
      type: 'ApprovalStatus',
    },
    comment: {
      type: 'string',
      description: `Comment`,
      isNullable: true,
    },
  },
} as const;

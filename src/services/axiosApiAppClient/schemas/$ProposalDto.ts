/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProposalDto = {
  description: `Translation proposal`,
  properties: {
    proposalId: {
      type: 'string',
      description: `Proposal ID`,
      format: 'uuid',
    },
    proposerId: {
      type: 'string',
      description: `User who proposed`,
      format: 'uuid',
    },
    organizationId: {
      type: 'string',
      description: `Union ID`,
      isNullable: true,
    },
    englishBookId: {
      type: 'number',
      description: `English book ID`,
      format: 'int32',
    },
    languageId: {
      type: 'string',
      description: `Target language code`,
      isNullable: true,
    },
    code: {
      type: 'string',
      description: `Proposed code`,
      isNullable: true,
    },
    title: {
      type: 'string',
      description: `Proposed title`,
      isNullable: true,
    },
    createdAt: {
      type: 'string',
      description: `Date when proposal was created`,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      description: `Last modification date of proposal`,
      format: 'date-time',
    },
    status: {
      type: 'ApprovalStatus',
    },
  },
} as const;

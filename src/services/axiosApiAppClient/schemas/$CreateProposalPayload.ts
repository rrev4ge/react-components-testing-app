/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateProposalPayload = {
  description: `Create proposal`,
  properties: {
    bookId: {
      type: 'number',
      description: `English book id`,
      format: 'int32',
    },
    language: {
      type: 'string',
      description: `Translation language`,
      isNullable: true,
    },
    code: {
      type: 'string',
      description: `Translation code`,
      isNullable: true,
    },
    title: {
      type: 'string',
      description: `Translation title`,
      isNullable: true,
    },
    organizationId: {
      type: 'string',
      description: `Organization Id`,
      isNullable: true,
    },
    comment: {
      type: 'string',
      description: `Proposal comment`,
      isNullable: true,
    },
  },
} as const;

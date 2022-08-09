/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $VersionInfoResponse = {
  description: `Single version info response`,
  properties: {
    id: {
      type: 'string',
      description: `Version Id`,
      format: 'uuid',
    },
    paragraphId: {
      type: 'string',
      description: `Paragraph Id`,
      format: 'uuid',
    },
    content: {
      type: 'string',
      description: `Version content`,
      isNullable: true,
    },
    status: {
      type: 'ApprovalStatusEnum',
    },
    isActive: {
      type: 'boolean',
      description: `Is version active`,
    },
    isLocked: {
      type: 'boolean',
      description: `Is locked`,
    },
    createdAt: {
      type: 'string',
      description: `Create date`,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      description: `Update date`,
      format: 'date-time',
    },
    userId: {
      type: 'string',
      description: `User Id`,
      format: 'uuid',
    },
    commentaries: {
      type: 'array',
      contains: {
        type: 'CommentaryResponse',
      },
      isNullable: true,
    },
    approvals: {
      type: 'array',
      contains: {
        type: 'ApprovalResponse',
      },
      isNullable: true,
    },
  },
} as const;

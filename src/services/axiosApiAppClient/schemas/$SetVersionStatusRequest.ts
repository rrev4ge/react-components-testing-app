/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SetVersionStatusRequest = {
  description: `Set version status request`,
  properties: {
    paragraphId: {
      type: 'string',
      description: `Paragraph Id`,
      format: 'uuid',
    },
    versionId: {
      type: 'string',
      description: `Translation Id`,
      format: 'uuid',
    },
    status: {
      type: 'ApprovalStatusEnum',
    },
  },
} as const;

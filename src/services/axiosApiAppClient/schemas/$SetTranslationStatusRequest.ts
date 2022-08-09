/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SetTranslationStatusRequest = {
  description: `Change translation status request`,
  properties: {
    translationId: {
      type: 'string',
      description: `Translation Id`,
      format: 'uuid',
    },
    status: {
      type: 'ApprovalStatusEnum',
    },
  },
} as const;

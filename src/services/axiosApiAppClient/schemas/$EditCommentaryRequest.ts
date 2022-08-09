/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $EditCommentaryRequest = {
  description: `Edit commentary`,
  properties: {
    commentaryId: {
      type: 'string',
      description: `Commentary Id`,
      format: 'uuid',
    },
    content: {
      type: 'string',
      description: `Commentary content`,
      isNullable: true,
    },
  },
} as const;

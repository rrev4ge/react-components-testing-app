/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AddCommentaryRequest = {
  description: `Add comment request`,
  properties: {
    versionId: {
      type: 'string',
      description: `Paragraph version Id`,
      format: 'uuid',
    },
    content: {
      type: 'string',
      description: `Comment content`,
      isNullable: true,
    },
  },
} as const;

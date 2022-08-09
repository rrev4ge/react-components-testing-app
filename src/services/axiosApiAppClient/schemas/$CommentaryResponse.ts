/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CommentaryResponse = {
  description: `Commentary response`,
  properties: {
    id: {
      type: 'string',
      description: `Id`,
      format: 'uuid',
    },
    userId: {
      type: 'string',
      description: `User Id`,
      format: 'uuid',
    },
    content: {
      type: 'string',
      description: `Commentary content`,
      isNullable: true,
    },
    versionId: {
      type: 'string',
      description: `VersionId`,
      format: 'uuid',
    },
    paragraphId: {
      type: 'string',
      description: `ParagraphId`,
      format: 'uuid',
    },
    createdAt: {
      type: 'string',
      description: `Created date`,
      format: 'date-time',
    },
  },
} as const;

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ParagraphsListResponse = {
  description: `Paragraph response`,
  properties: {
    id: {
      type: 'string',
      description: `Paragraph Id`,
      format: 'uuid',
    },
    bookId: {
      type: 'number',
      description: `Book Id`,
      format: 'int32',
    },
    paraId: {
      type: 'string',
      description: `Para Id`,
      isNullable: true,
    },
    chapterId: {
      type: 'number',
      description: `Chapter Id`,
      format: 'int32',
    },
    tocId: {
      type: 'string',
      description: `Chapter Key (GUID)`,
      isNullable: true,
      format: 'uuid',
    },
    translationId: {
      type: 'string',
      description: `Translation Key (GUID)`,
      format: 'uuid',
    },
    originalContent: {
      type: 'string',
      description: `Original content`,
      isNullable: true,
    },
    version: {
      type: 'VersionResponse',
    },
    versionsCount: {
      type: 'number',
      description: `Versions count`,
      format: 'int32',
    },
    commentariesCount: {
      type: 'number',
      description: `Commentaries count`,
      format: 'int32',
    },
    logsCount: {
      type: 'number',
      description: `Logs count`,
      format: 'int32',
    },
    order: {
      type: 'number',
      description: `Paragraph in book order`,
      format: 'int32',
    },
  },
} as const;

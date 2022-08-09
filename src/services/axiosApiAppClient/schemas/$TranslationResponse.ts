/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TranslationResponse = {
  description: `Translation response`,
  properties: {
    id: {
      type: 'string',
      description: `Translation Id`,
      format: 'uuid',
    },
    status: {
      type: 'ApprovalStatusEnum',
    },
    code: {
      type: 'string',
      description: `Book code`,
      isNullable: true,
    },
    languageCode: {
      type: 'string',
      description: `Language code`,
      isNullable: true,
    },
    title: {
      type: 'string',
      description: `Book title`,
      isNullable: true,
    },
    bookId: {
      type: 'number',
      description: `Translated book Id`,
      format: 'int32',
    },
    originalBookId: {
      type: 'number',
      description: `Original book Id`,
      format: 'int32',
    },
    isbn: {
      type: 'string',
      description: `ISBN`,
      isNullable: true,
    },
    createdAt: {
      type: 'string',
      description: `Created At`,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      description: `Updated At`,
      format: 'date-time',
    },
    paragraphsCount: {
      type: 'number',
      description: `Paragraphs count`,
      format: 'int32',
    },
    approvedParagraphsCount: {
      type: 'number',
      description: `Approved paragraphs count`,
      format: 'int32',
    },
  },
} as const;

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateSkeletonRequest = {
  description: `Create skeleton request`,
  properties: {
    translationId: {
      type: 'string',
      description: `Translation Id`,
      format: 'uuid',
    },
    bookId: {
      type: 'number',
      description: `Book Id translated`,
      format: 'int32',
    },
    originalBookId: {
      type: 'number',
      description: `Original book Id`,
      format: 'int32',
    },
    languageCode: {
      type: 'string',
      description: `Target language code (de, ru etc.)`,
      isNullable: true,
    },
    egwLanguageCode: {
      type: 'string',
      description: `Egw language code`,
      isNullable: true,
    },
    bookCode: {
      type: 'string',
      description: `Translated book code`,
      isNullable: true,
    },
    title: {
      type: 'string',
      description: `Translated book title`,
      isNullable: true,
    },
  },
} as const;

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PublicationDto = {
  description: `Publication model`,
  properties: {
    id: {
      type: 'number',
      description: `Publication ID`,
      format: 'int32',
    },
    languageCode: {
      type: 'string',
      description: `Language code`,
      isNullable: true,
    },
    originalPublicationId: {
      type: 'number',
      description: `Original (English) publication ID`,
      isNullable: true,
      format: 'int32',
    },
    code: {
      type: 'string',
      description: `Publication code`,
      isNullable: true,
    },
    title: {
      type: 'string',
      description: `Publication title`,
      isNullable: true,
    },
    chapterCount: {
      type: 'number',
      description: `Number of chapters`,
      isNullable: true,
      format: 'int32',
    },
    pageCount: {
      type: 'number',
      description: `Number of ROUTES`,
      isNullable: true,
      format: 'int32',
    },
    createdAt: {
      type: 'string',
      description: `Date of upload`,
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      description: `Date of last modification`,
      format: 'date-time',
    },
  },
} as const;

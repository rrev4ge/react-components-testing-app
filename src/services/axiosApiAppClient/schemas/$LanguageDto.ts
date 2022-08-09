/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LanguageDto = {
  description: `Languages`,
  properties: {
    code: {
      type: 'string',
      description: `Language code`,
      isNullable: true,
    },
    name: {
      type: 'string',
      description: `Language name`,
      isNullable: true,
    },
    egwCode: {
      type: 'string',
      description: `EGW Language Code`,
      isNullable: true,
    },
  },
} as const;

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SubTerritoryDto = {
  description: `Sub-territory (country-language combination)`,
  properties: {
    languageCode: {
      type: 'string',
      description: `Language ID`,
      isNullable: true,
    },
    countryId: {
      type: 'string',
      description: `Country ID`,
      isNullable: true,
    },
    speakers: {
      type: 'number',
      description: `Number of people speaking this on this language in this country`,
      format: 'int64',
    },
  },
} as const;

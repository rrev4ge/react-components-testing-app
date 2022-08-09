/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CountryDto = {
  description: `Country DTO`,
  properties: {
    code: {
      type: 'string',
      description: `Country code`,
      isNullable: true,
    },
    name: {
      type: 'string',
      description: `Country name`,
      isNullable: true,
    },
  },
} as const;

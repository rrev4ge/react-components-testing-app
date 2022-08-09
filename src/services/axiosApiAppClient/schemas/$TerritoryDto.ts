/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TerritoryDto = {
  description: `Union territory`,
  properties: {
    name: {
      type: 'string',
      description: `Territory name`,
      isNullable: true,
    },
    churchCount: {
      type: 'number',
      description: `Number of churches`,
      format: 'int64',
    },
    memberCount: {
      type: 'number',
      description: `Number of church members`,
      format: 'int64',
    },
    population: {
      type: 'number',
      description: `Total populateion`,
      format: 'int64',
    },
    territoryLanguages: {
      type: 'array',
      contains: {
        type: 'SubTerritoryDto',
      },
      isNullable: true,
    },
  },
} as const;

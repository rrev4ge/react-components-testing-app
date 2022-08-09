/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrganizationDto = {
  description: `Short organization details`,
  properties: {
    organizationId: {
      type: 'string',
      description: `Division ID`,
      isNullable: true,
    },
    parentId: {
      type: 'string',
      description: `Parent Id`,
      isNullable: true,
    },
    name: {
      type: 'string',
      description: `Organization name`,
      isNullable: true,
    },
    level: {
      type: 'OrganizationLevel',
    },
    childCount: {
      type: 'number',
      description: `Child organization count`,
      format: 'int32',
    },
    languages: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isNullable: true,
    },
  },
} as const;

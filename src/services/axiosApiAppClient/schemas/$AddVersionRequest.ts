/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AddVersionRequest = {
  description: `Add paragraph version`,
  properties: {
    paragraphId: {
      type: 'string',
      description: `Paragraph Id`,
      format: 'uuid',
    },
    content: {
      type: 'string',
      description: `Paragraph content`,
      isNullable: true,
    },
  },
} as const;

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SetActiveVersionRequest = {
  description: `Set active version request`,
  properties: {
    paragraphId: {
      type: 'string',
      description: `Paragraph Id`,
      format: 'uuid',
    },
    versionId: {
      type: 'string',
      description: `Version Id`,
      format: 'uuid',
    },
  },
} as const;

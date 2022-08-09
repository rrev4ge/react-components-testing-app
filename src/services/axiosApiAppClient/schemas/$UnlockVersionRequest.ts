/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UnlockVersionRequest = {
  description: `Unlock paragraph version request`,
  properties: {
    versionId: {
      type: 'string',
      description: `Version Id`,
      format: 'uuid',
    },
  },
} as const;

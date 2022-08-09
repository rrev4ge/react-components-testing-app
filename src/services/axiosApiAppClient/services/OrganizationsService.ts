/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationDtoPaginatedResponse } from '../models/OrganizationDtoPaginatedResponse';
import type { OrganizationExtendedDto } from '../models/OrganizationExtendedDto';
import type { OrganizationLevel } from '../models/OrganizationLevel';
import type { TerritoryDto } from '../models/TerritoryDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrganizationsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List organizations
   * @param limit? Request limit
   * @param offset? Request offset
   * @param ids? Division ID List
   * @param parents? Parents list
   * @param level? Division ID List
   * @param query? Search query
   * @returns OrganizationDtoPaginatedResponse Success
   * @throws ApiError
   */
  public getApiOrgOrganizations(
    limit?: number,
    offset?: number,
    ids?: Array<string>,
    parents?: Array<string>,
    level?: OrganizationLevel,
    query?: string,
  ): CancelablePromise<OrganizationDtoPaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/organizations',
      query: {
        limit: limit,
        offset: offset,
        ids: ids,
        parents: parents,
        level: level,
        query: query,
      },
    });
  }

  /**
   * Get organization by id
   * @param id Organization id
   * @returns OrganizationExtendedDto Success
   * @throws ApiError
   */
  public getApiOrgOrganizations1(id: string): CancelablePromise<OrganizationExtendedDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/organizations/{id}',
      path: {
        id: id,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }

  /**
   * Get organization territories
   * @param id Organization id
   * @returns TerritoryDto Success
   * @throws ApiError
   */
  public getApiOrgOrganizationsTerritories(id: string): CancelablePromise<Array<TerritoryDto>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/organizations/{id}/territories',
      path: {
        id: id,
      },
      errors: {
        404: `Not Found`,
      },
    });
  }
}

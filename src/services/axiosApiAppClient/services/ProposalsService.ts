/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApproveProposalPayload } from '../models/ApproveProposalPayload';
import type { CreateProposalPayload } from '../models/CreateProposalPayload';
import type { ProposalApprovalDtoPaginatedResponse } from '../models/ProposalApprovalDtoPaginatedResponse';
import type { ProposalDto } from '../models/ProposalDto';
import type { ProposalDtoPaginatedResponse } from '../models/ProposalDtoPaginatedResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProposalsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List translation proposals
   * @param limit Request limit
   * @param offset Request offset
   * @param proposals Division ID List
   * @returns ProposalDtoPaginatedResponse Success
   * @throws ApiError
   */
  public getApiOrgProposals(
    limit?: number,
    offset?: number,
    proposals?: Array<string>,
  ): CancelablePromise<ProposalDtoPaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/proposals',
      query: {
        limit: limit,
        offset: offset,
        proposals: proposals,
      },
    });
  }

  /**
   * Create transaction proposal
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public postApiOrgProposals(requestBody?: CreateProposalPayload): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/org/proposals',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get proposal by id
   * @param id Proposal id
   * @returns ProposalDto Success
   * @throws ApiError
   */
  public getApiOrgProposals1(id: string): CancelablePromise<ProposalDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/proposals/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * Get proposal by id
   * @param id Proposal id
   * @returns ProposalApprovalDtoPaginatedResponse Success
   * @throws ApiError
   */
  public getApiOrgProposalsApprovals(id: string): CancelablePromise<ProposalApprovalDtoPaginatedResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/org/proposals/{id}/approvals',
      path: {
        id: id,
      },
    });
  }

  /**
   * Approve proposal
   * @param id Proposal id
   * @param requestBody Request body
   * @returns void
   * @throws ApiError
   */
  public putApiOrgProposalsApprove(id: string, requestBody?: ApproveProposalPayload): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/org/proposals/{id}/approve',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Create transaction proposal
   * @param id Proposal id
   * @returns void
   * @throws ApiError
   */
  public postApiOrgProposalsSkeleton(id: string): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/org/proposals/{id}/skeleton',
      path: {
        id: id,
      },
    });
  }
}

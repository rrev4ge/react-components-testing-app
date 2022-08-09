import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  UUID: any;
};

/** Payload for adding user roles */
export type AddUserRolesPayloadInput = {
  /** List of roles to add */
  roles: Array<OrganizationRole>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export enum ApprovalStatus {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Undecided = 'UNDECIDED'
}

export type ApproveProposalInput = {
  /** Optional comment */
  comment?: InputMaybe<Scalars['String']>;
  /** Organization level */
  level: OrganizationLevel;
  /** Proposal ID */
  proposalId: Scalars['UUID'];
  /** New status */
  status: ApprovalStatus;
};

export type ApproveProposalPayload = {
  __typename?: 'ApproveProposalPayload';
  proposalDto?: Maybe<ProposalDto>;
};

export type ChangeUserEmailInput = {
  /** User email payload */
  payload: UpdateUserEmailPayloadInput;
  /** User ID */
  userId: Scalars['UUID'];
};

export type ChangeUserEmailPayload = {
  __typename?: 'ChangeUserEmailPayload';
  userDto?: Maybe<UserDto>;
};

export type ChangeUserNameInput = {
  /** User name payload */
  payload: UpdateUserNamePayloadInput;
  /** User ID */
  userId: Scalars['UUID'];
};

export type ChangeUserNamePayload = {
  __typename?: 'ChangeUserNamePayload';
  userDto?: Maybe<UserDto>;
};

export type ChangeUserOrganizationInput = {
  /** User organization payload */
  payload: UpdateUserOrganizationPayloadInput;
  /** User ID */
  userId: Scalars['UUID'];
};

export type ChangeUserOrganizationPayload = {
  __typename?: 'ChangeUserOrganizationPayload';
  userDto?: Maybe<UserDto>;
};

export type ClearUserRolesInput = {
  /** User ID */
  userId: Scalars['UUID'];
};

export type ClearUserRolesPayload = {
  __typename?: 'ClearUserRolesPayload';
  userDto?: Maybe<UserDto>;
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
};

/** Country DTO */
export type CountryDto = {
  __typename?: 'CountryDto';
  /** Country code */
  code: Scalars['String'];
  /** Country name */
  name: Scalars['String'];
};

export type CountryDtoCollectionSegment = {
  __typename?: 'CountryDtoCollectionSegment';
  items?: Maybe<Array<CountryDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

/** Countries filter */
export type CountryFilterDtoInput = {
  /** Country code */
  code?: InputMaybe<Scalars['String']>;
  /** Search query */
  query?: InputMaybe<Scalars['String']>;
};

/** Country list sorting */
export enum CountryListSorting {
  /** Code */
  Code = 'CODE',
  /** Name */
  Name = 'NAME'
}

export type CreateProposalInput = {
  /** Source book id */
  bookId: Scalars['Int'];
  /** Target book code */
  code: Scalars['String'];
  /** Comment */
  comment?: InputMaybe<Scalars['String']>;
  /** Target language code */
  language: Scalars['String'];
  /** Organization ID to create proposal for */
  organizationId: Scalars['String'];
  /** Proposal ID */
  proposalId: Scalars['UUID'];
  /** Target book title */
  title: Scalars['String'];
};

export type CreateProposalPayload = {
  __typename?: 'CreateProposalPayload';
  proposalDto?: Maybe<ProposalDto>;
};

export type CreateUserInput = {
  /** User details */
  payload: CreateUserPayloadInput;
  /** User ID */
  userId: Scalars['UUID'];
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  userDto?: Maybe<UserDto>;
};

/** Create user request */
export type CreateUserPayloadInput = {
  /** Email */
  email: Scalars['String'];
  /** First name */
  firstName: Scalars['String'];
  /** Last name */
  lastName: Scalars['String'];
  /** Organization ID */
  organizationId?: InputMaybe<Scalars['String']>;
};

export type DeleteUserInput = {
  /** User ID */
  userId: Scalars['UUID'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto = {
  __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto';
  key: OrganizationLevel;
  value: Array<RoleDetailsDto>;
};

/** Languages */
export type LanguageDto = {
  __typename?: 'LanguageDto';
  /** Language code */
  code: Scalars['String'];
  /** EGW Language Code */
  egwCode?: Maybe<Scalars['String']>;
  /** Language name */
  name: Scalars['String'];
};

export type LanguageDtoCollectionSegment = {
  __typename?: 'LanguageDtoCollectionSegment';
  items?: Maybe<Array<LanguageDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

/** Languages filter */
export type LanguageFilterDtoInput = {
  /** ISO Language code */
  code?: InputMaybe<Array<Scalars['String']>>;
  /** EGW Language code */
  egwCode?: InputMaybe<Scalars['String']>;
  /** Search query */
  query?: InputMaybe<Scalars['String']>;
};

/** Language sorting enumeration */
export enum LanguageSorting {
  /** Language code */
  Code = 'CODE',
  /** EGW Code */
  EgwCode = 'EGW_CODE',
  /** Language name */
  Name = 'NAME'
}

/** Short organization details */
export type OrganizationDto = {
  __typename?: 'OrganizationDto';
  /** Child organization count */
  childCount: Scalars['Int'];
  children?: Maybe<Array<OrganizationDto>>;
  /** List of available languages */
  languages: Array<Scalars['String']>;
  /** Organization level */
  level: OrganizationLevel;
  /** Organization name */
  name: Scalars['String'];
  /** Division ID */
  organizationId: Scalars['String'];
  parent?: Maybe<OrganizationDto>;
  /** Parent Id */
  parentId?: Maybe<Scalars['String']>;
};

export type OrganizationDtoCollectionSegment = {
  __typename?: 'OrganizationDtoCollectionSegment';
  items?: Maybe<Array<OrganizationDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

/** Organization filters */
export type OrganizationFilterDtoInput = {
  /** Division ID List */
  ids?: InputMaybe<Array<Scalars['String']>>;
  /** Division ID List */
  level?: InputMaybe<OrganizationLevel>;
  /** Parents list */
  parents?: InputMaybe<Array<Scalars['String']>>;
  /** Search query */
  query?: InputMaybe<Scalars['String']>;
};

export enum OrganizationLevel {
  Conference = 'CONFERENCE',
  Division = 'DIVISION',
  Global = 'GLOBAL',
  Union = 'UNION'
}

export enum OrganizationRole {
  Administrator = 'ADMINISTRATOR',
  ConferenceSopCoordinator = 'CONFERENCE_SOP_COORDINATOR',
  DivisionChair = 'DIVISION_CHAIR',
  DivisionLiaison = 'DIVISION_LIAISON',
  DivisionPublishingDirector = 'DIVISION_PUBLISHING_DIRECTOR',
  DivisionSecretary = 'DIVISION_SECRETARY',
  DivisionSopCoordinator = 'DIVISION_SOP_COORDINATOR',
  DivisionTreasurer = 'DIVISION_TREASURER',
  GcChair = 'GC_CHAIR',
  GcPublishingDirector = 'GC_PUBLISHING_DIRECTOR',
  GcSecretary = 'GC_SECRETARY',
  GcTreasurer = 'GC_TREASURER',
  UnionChair = 'UNION_CHAIR',
  UnionPublishingDirector = 'UNION_PUBLISHING_DIRECTOR',
  UnionSecretary = 'UNION_SECRETARY',
  UnionSopCoordinator = 'UNION_SOP_COORDINATOR',
  UnionTreasurer = 'UNION_TREASURER',
  Unprivileged = 'UNPRIVILEGED'
}

/** Approval */
export type ProposalApprovalDto = {
  __typename?: 'ProposalApprovalDto';
  /** Approval ID */
  approvalId: Scalars['UUID'];
  approvedBy?: Maybe<UserDto>;
  /** User, who made last change */
  approvedById: Scalars['UUID'];
  /** Approval comment */
  comment?: Maybe<Scalars['String']>;
  /** Date of creation */
  createdAt: Scalars['DateTime'];
  /** Organization level */
  level: OrganizationLevel;
  /** Approval status */
  status: ApprovalStatus;
  /** Date of last modification */
  updatedAt: Scalars['DateTime'];
};

/** Translation proposal */
export type ProposalDto = {
  __typename?: 'ProposalDto';
  approvals?: Maybe<Array<ProposalApprovalDto>>;
  /** Proposed code */
  code: Scalars['String'];
  /** Date when proposal was created */
  createdAt: Scalars['DateTime'];
  /** English book ID */
  englishBookId: Scalars['Int'];
  /** Target language code */
  languageId: Scalars['String'];
  /** Union ID */
  organizationId: Scalars['String'];
  /** Proposal ID */
  proposalId: Scalars['UUID'];
  proposer?: Maybe<UserDto>;
  /** Approval status */
  status: ApprovalStatus;
  /** Proposed title */
  title: Scalars['String'];
  /** Last modification date of proposal */
  updatedAt: Scalars['DateTime'];
};

export type ProposalDtoCollectionSegment = {
  __typename?: 'ProposalDtoCollectionSegment';
  items?: Maybe<Array<ProposalDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

/** Filtering of translation proposals */
export type ProposalFilterDtoInput = {
  /** Division ID List */
  proposals?: InputMaybe<Array<Scalars['UUID']>>;
};

/** Publications ordering */
export enum ProposalsSorting {
  /** By code */
  Code = 'CODE',
  /** By ID */
  Id = 'ID',
  /** By language code */
  LanguageCode = 'LANGUAGE_CODE',
  /** By language code */
  Organization = 'ORGANIZATION',
  /** By title */
  Title = 'TITLE'
}

/** Publication model */
export type PublicationDto = {
  __typename?: 'PublicationDto';
  /** Number of chapters */
  chapterCount?: Maybe<Scalars['Int']>;
  /** Publication code */
  code: Scalars['String'];
  /** Date of upload */
  createdAt: Scalars['DateTime'];
  /** Publication ID */
  id: Scalars['Int'];
  language: LanguageDto;
  original?: Maybe<PublicationDto>;
  /** Number of ROUTES */
  pageCount?: Maybe<Scalars['Int']>;
  /** Publication title */
  title: Scalars['String'];
  translations: Array<PublicationDto>;
  /** Date of last modification */
  updatedAt: Scalars['DateTime'];
};

export type PublicationDtoCollectionSegment = {
  __typename?: 'PublicationDtoCollectionSegment';
  items?: Maybe<Array<PublicationDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

/** Publication filter */
export type PublicationFilterDtoInput = {
  /** Publication Code */
  code?: InputMaybe<Scalars['String']>;
  /** Publication ID List */
  ids?: InputMaybe<Array<Scalars['Int']>>;
  /** Publication Language */
  language?: InputMaybe<Scalars['String']>;
  /** Publication ID List */
  parents?: InputMaybe<Array<Scalars['Int']>>;
  /** Search query */
  query?: InputMaybe<Scalars['String']>;
};

/** Publications ordering */
export enum PublicationsSorting {
  /** By code */
  Code = 'CODE',
  /** By ID */
  Id = 'ID',
  /** By language code */
  LanguageCode = 'LANGUAGE_CODE',
  /** By title */
  Title = 'TITLE'
}

/** Role details */
export type RoleDetailsDto = {
  __typename?: 'RoleDetailsDto';
  /** If role can be set/unset by current user */
  canBeSet: Scalars['Boolean'];
  /** Role is enabled for a user */
  isEnabled: Scalars['Boolean'];
  /** Role name */
  role: OrganizationRole;
};

export type SetLanguageCodeInput = {
  code: Scalars['String'];
  egwCode?: InputMaybe<Scalars['String']>;
};

export type SetLanguageCodePayload = {
  __typename?: 'SetLanguageCodePayload';
  languageDto?: Maybe<LanguageDto>;
};

export type SetUserStatusInput = {
  /** User is enabled */
  isEnabled: Scalars['Boolean'];
  /** User ID */
  userId: Scalars['UUID'];
};

export type SetUserStatusPayload = {
  __typename?: 'SetUserStatusPayload';
  boolean?: Maybe<Scalars['Boolean']>;
};

export type SortFieldOfCountryListSortingInput = {
  field: CountryListSorting;
  order: SortOrder;
};

export type SortFieldOfLanguageSortingInput = {
  field: LanguageSorting;
  order: SortOrder;
};

export type SortFieldOfProposalsSortingInput = {
  field: ProposalsSorting;
  order: SortOrder;
};

export type SortFieldOfPublicationsSortingInput = {
  field: PublicationsSorting;
  order: SortOrder;
};

export type SortFieldOfUserListSortingInput = {
  field: UserListSorting;
  order: SortOrder;
};

/** Sorting order */
export enum SortOrder {
  /** Ascending */
  Asc = 'ASC',
  /** Descending */
  Desc = 'DESC'
}

/** User-related mutations */
export type TranslationDashboardMutations = {
  __typename?: 'TranslationDashboardMutations';
  /** Sets language code */
  approveProposal: ApproveProposalPayload;
  /** Change user Email */
  changeUserEmail: ChangeUserEmailPayload;
  /** Change user name */
  changeUserName: ChangeUserNamePayload;
  /** Change user organization */
  changeUserOrganization: ChangeUserOrganizationPayload;
  /** Clears user roles */
  clearUserRoles: ClearUserRolesPayload;
  /** Create a new proposal */
  createProposal: CreateProposalPayload;
  /** Create a new user */
  createUser: CreateUserPayload;
  /** Deletes user */
  deleteUser: DeleteUserPayload;
  /** Sets language code */
  setLanguageCode: SetLanguageCodePayload;
  /** Deletes user */
  setUserStatus: SetUserStatusPayload;
  /** Adds roles to user */
  updateUserRoles: UpdateUserRolesPayload;
};

/** User-related mutations */
export type TranslationDashboardMutationsApproveProposalArgs = {
  input: ApproveProposalInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsChangeUserEmailArgs = {
  input: ChangeUserEmailInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsChangeUserNameArgs = {
  input: ChangeUserNameInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsChangeUserOrganizationArgs = {
  input: ChangeUserOrganizationInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsClearUserRolesArgs = {
  input: ClearUserRolesInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsCreateProposalArgs = {
  input: CreateProposalInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsCreateUserArgs = {
  input: CreateUserInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsDeleteUserArgs = {
  input: DeleteUserInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsSetLanguageCodeArgs = {
  input: SetLanguageCodeInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsSetUserStatusArgs = {
  input: SetUserStatusInput;
};

/** User-related mutations */
export type TranslationDashboardMutationsUpdateUserRolesArgs = {
  input: UpdateUserRolesInput;
};

/** User-related queries */
export type TranslationDashboardQueries = {
  __typename?: 'TranslationDashboardQueries';
  /** List countries */
  countries?: Maybe<CountryDtoCollectionSegment>;
  /** List countries */
  country?: Maybe<CountryDto>;
  /** List languages */
  language?: Maybe<LanguageDto>;
  /** List languages */
  languages?: Maybe<LanguageDtoCollectionSegment>;
  /** List organizations */
  organization?: Maybe<OrganizationDto>;
  /** List organizations */
  organizations?: Maybe<OrganizationDtoCollectionSegment>;
  /** Retrieves proposals for a user */
  proposal?: Maybe<ProposalDto>;
  /** Retrieves proposals for a user */
  proposals?: Maybe<ProposalDtoCollectionSegment>;
  /** List publications */
  publication?: Maybe<PublicationDto>;
  /** List publications */
  publications?: Maybe<PublicationDtoCollectionSegment>;
  /** List users */
  user?: Maybe<UserDto>;
  /** List users */
  users?: Maybe<UserDtoCollectionSegment>;
};

/** User-related queries */
export type TranslationDashboardQueriesCountriesArgs = {
  filter?: InputMaybe<CountryFilterDtoInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SortFieldOfCountryListSortingInput>>;
  take?: InputMaybe<Scalars['Int']>;
};

/** User-related queries */
export type TranslationDashboardQueriesCountryArgs = {
  code: Scalars['String'];
};

/** User-related queries */
export type TranslationDashboardQueriesLanguageArgs = {
  code: Scalars['String'];
};

/** User-related queries */
export type TranslationDashboardQueriesLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterDtoInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SortFieldOfLanguageSortingInput>>;
  take?: InputMaybe<Scalars['Int']>;
};

/** User-related queries */
export type TranslationDashboardQueriesOrganizationArgs = {
  id: Scalars['String'];
};

/** User-related queries */
export type TranslationDashboardQueriesOrganizationsArgs = {
  filter?: InputMaybe<OrganizationFilterDtoInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

/** User-related queries */
export type TranslationDashboardQueriesProposalArgs = {
  id: Scalars['UUID'];
};

/** User-related queries */
export type TranslationDashboardQueriesProposalsArgs = {
  filter?: InputMaybe<ProposalFilterDtoInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SortFieldOfProposalsSortingInput>>;
  take?: InputMaybe<Scalars['Int']>;
};

/** User-related queries */
export type TranslationDashboardQueriesPublicationArgs = {
  id: Scalars['Int'];
};

/** User-related queries */
export type TranslationDashboardQueriesPublicationsArgs = {
  filter?: InputMaybe<PublicationFilterDtoInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SortFieldOfPublicationsSortingInput>>;
  take?: InputMaybe<Scalars['Int']>;
};

/** User-related queries */
export type TranslationDashboardQueriesUserArgs = {
  id: Scalars['UUID'];
};

/** User-related queries */
export type TranslationDashboardQueriesUsersArgs = {
  filter?: InputMaybe<UserFilterDtoInput>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SortFieldOfUserListSortingInput>>;
  take?: InputMaybe<Scalars['Int']>;
};

/** Update user email */
export type UpdateUserEmailPayloadInput = {
  /** User email */
  email: Scalars['String'];
};

/** Update user name */
export type UpdateUserNamePayloadInput = {
  /** First name */
  firstName: Scalars['String'];
  /** Last name */
  lastName: Scalars['String'];
};

/** User organization request */
export type UpdateUserOrganizationPayloadInput = {
  /** Division ID */
  organizationId?: InputMaybe<Scalars['String']>;
};

export type UpdateUserRolesInput = {
  /** User roles payload */
  payload: AddUserRolesPayloadInput;
  /** User ID */
  userId: Scalars['UUID'];
};

export type UpdateUserRolesPayload = {
  __typename?: 'UpdateUserRolesPayload';
  userDto?: Maybe<UserDto>;
};

/** User transfer object */
export type UserDto = {
  __typename?: 'UserDto';
  /** Date of creation */
  createdAt: Scalars['DateTime'];
  /** Email */
  email: Scalars['String'];
  /** First name */
  firstName: Scalars['String'];
  /** Is enabled */
  isEnabled: Scalars['Boolean'];
  /** Last name */
  lastName: Scalars['String'];
  /** Division id */
  organizationId?: Maybe<Scalars['String']>;
  /** List of assigned roles */
  roles: Array<KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto>;
  /** Date of last login */
  updatedAt: Scalars['DateTime'];
  /** User id */
  userId: Scalars['UUID'];
};

/** User transfer object */
export type UserDtoRolesArgs = {
  canBeSet?: InputMaybe<Scalars['Boolean']>;
  isEnabled?: InputMaybe<Scalars['Boolean']>;
};

export type UserDtoCollectionSegment = {
  __typename?: 'UserDtoCollectionSegment';
  items?: Maybe<Array<UserDto>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
  totalCount: Scalars['Int'];
};

/** User filter */
export type UserFilterDtoInput = {
  /** User is enabled */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** User Id List */
  ids?: InputMaybe<Array<Scalars['UUID']>>;
  /** Organization */
  organizations?: InputMaybe<Array<Scalars['String']>>;
  /** Search query */
  query?: InputMaybe<Scalars['String']>;
  /** Filter user by role */
  role?: InputMaybe<OrganizationRole>;
};

/** User pagination */
export enum UserListSorting {
  /** Email */
  Email = 'EMAIL',
  /** First name */
  FirstName = 'FIRST_NAME',
  /** Last name */
  LastName = 'LAST_NAME'
}

export type CountryListItemFragment = { __typename?: 'CountryDto', code: string, name: string };

export type LanguageListItemFragment = { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null };

export type OrganizationListItemFragment = { __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null, children?: Array<{ __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null }> | null, parent?: { __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null } | null };

export type OrganizationFragment = { __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null };

export type PageInfoFragment = { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean };

export type ProposalApprovalListItemFragment = { __typename?: 'ProposalApprovalDto', approvalId: any, approvedById: any, comment?: string | null, createdAt: any, level: OrganizationLevel, status: ApprovalStatus, updatedAt: any, approvedBy?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null };

export type ProposalListItemFragment = { __typename?: 'ProposalDto', code: string, createdAt: any, englishBookId: number, languageId: string, organizationId: string, proposalId: any, status: ApprovalStatus, title: string, updatedAt: any, approvals?: Array<{ __typename?: 'ProposalApprovalDto', approvalId: any, approvedById: any, comment?: string | null, createdAt: any, level: OrganizationLevel, status: ApprovalStatus, updatedAt: any, approvedBy?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null }> | null, proposer?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null };

export type PublicationListItemFragment = { __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null }, original?: { __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null } } | null, translations: Array<{ __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null } }> };

export type PublicationFragment = { __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null } };

export type UserRoleDetailFragment = { __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole };

export type UserRoleFragment = { __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> };

export type UserListItemFragment = { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> };

export type ApproveProposalMutationVariables = Exact<{
  input: ApproveProposalInput;
}>;

export type ApproveProposalMutation = { __typename?: 'TranslationDashboardMutations', approveProposal: { __typename?: 'ApproveProposalPayload', proposalDto?: { __typename?: 'ProposalDto', code: string, createdAt: any, englishBookId: number, languageId: string, organizationId: string, proposalId: any, status: ApprovalStatus, title: string, updatedAt: any, approvals?: Array<{ __typename?: 'ProposalApprovalDto', approvalId: any, approvedById: any, comment?: string | null, createdAt: any, level: OrganizationLevel, status: ApprovalStatus, updatedAt: any, approvedBy?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null }> | null, proposer?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null } | null } };

export type CreateProposalMutationVariables = Exact<{
  input: CreateProposalInput;
}>;

export type CreateProposalMutation = { __typename?: 'TranslationDashboardMutations', createProposal: { __typename?: 'CreateProposalPayload', proposalDto?: { __typename?: 'ProposalDto', code: string, createdAt: any, englishBookId: number, languageId: string, organizationId: string, proposalId: any, status: ApprovalStatus, title: string, updatedAt: any, approvals?: Array<{ __typename?: 'ProposalApprovalDto', approvalId: any, approvedById: any, comment?: string | null, createdAt: any, level: OrganizationLevel, status: ApprovalStatus, updatedAt: any, approvedBy?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null }> | null, proposer?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null } | null } };

export type SetLanguageCodeMutationVariables = Exact<{
  input: SetLanguageCodeInput;
}>;

export type SetLanguageCodeMutation = { __typename?: 'TranslationDashboardMutations', setLanguageCode: { __typename?: 'SetLanguageCodePayload', languageDto?: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null } | null } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;

export type CreateUserMutation = { __typename?: 'TranslationDashboardMutations', createUser: { __typename?: 'CreateUserPayload', userDto?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null } };

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
}>;

export type DeleteUserMutation = { __typename?: 'TranslationDashboardMutations', deleteUser: { __typename?: 'DeleteUserPayload', boolean?: boolean | null } };

export type ChangeUserEmailMutationVariables = Exact<{
  input: ChangeUserEmailInput;
}>;

export type ChangeUserEmailMutation = { __typename?: 'TranslationDashboardMutations', changeUserEmail: { __typename?: 'ChangeUserEmailPayload', userDto?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null } };

export type ChangeUserNameMutationVariables = Exact<{
  input: ChangeUserNameInput;
}>;

export type ChangeUserNameMutation = { __typename?: 'TranslationDashboardMutations', changeUserName: { __typename?: 'ChangeUserNamePayload', userDto?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null } };

export type ChangeUserOrganizationMutationVariables = Exact<{
  input: ChangeUserOrganizationInput;
}>;

export type ChangeUserOrganizationMutation = { __typename?: 'TranslationDashboardMutations', changeUserOrganization: { __typename?: 'ChangeUserOrganizationPayload', userDto?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null } };

export type UpdateUserRolesMutationVariables = Exact<{
  input: UpdateUserRolesInput;
}>;

export type UpdateUserRolesMutation = { __typename?: 'TranslationDashboardMutations', updateUserRoles: { __typename?: 'UpdateUserRolesPayload', userDto?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null } };

export type ClearUserRolesMutationVariables = Exact<{
  input: ClearUserRolesInput;
}>;

export type ClearUserRolesMutation = { __typename?: 'TranslationDashboardMutations', clearUserRoles: { __typename?: 'ClearUserRolesPayload', userDto?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null } };

export type SetUserStatusMutationVariables = Exact<{
  input: SetUserStatusInput;
}>;

export type SetUserStatusMutation = { __typename?: 'TranslationDashboardMutations', setUserStatus: { __typename?: 'SetUserStatusPayload', boolean?: boolean | null } };

export type GetCountryListQueryVariables = Exact<{
  filter?: InputMaybe<CountryFilterDtoInput>;
  sort?: InputMaybe<Array<SortFieldOfCountryListSortingInput> | SortFieldOfCountryListSortingInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export type GetCountryListQuery = { __typename?: 'TranslationDashboardQueries', countries?: { __typename?: 'CountryDtoCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'CountryDto', code: string, name: string }> | null, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type GetCountryOneQueryVariables = Exact<{
  code: Scalars['String'];
}>;

export type GetCountryOneQuery = { __typename?: 'TranslationDashboardQueries', country?: { __typename?: 'CountryDto', code: string, name: string } | null };

export type GetLanguageListQueryVariables = Exact<{
  filter?: InputMaybe<LanguageFilterDtoInput>;
  sort?: InputMaybe<Array<SortFieldOfLanguageSortingInput> | SortFieldOfLanguageSortingInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export type GetLanguageListQuery = { __typename?: 'TranslationDashboardQueries', languages?: { __typename?: 'LanguageDtoCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null }> | null, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type GetLanguageOneQueryVariables = Exact<{
  code: Scalars['String'];
}>;

export type GetLanguageOneQuery = { __typename?: 'TranslationDashboardQueries', language?: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null } | null };

export type GetOrganizationListQueryVariables = Exact<{
  filter?: InputMaybe<OrganizationFilterDtoInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export type GetOrganizationListQuery = { __typename?: 'TranslationDashboardQueries', organizations?: { __typename?: 'OrganizationDtoCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null, children?: Array<{ __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null }> | null, parent?: { __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null } | null }> | null, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type GetOrganizationOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetOrganizationOneQuery = { __typename?: 'TranslationDashboardQueries', organization?: { __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null, children?: Array<{ __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null }> | null, parent?: { __typename?: 'OrganizationDto', childCount: number, languages: Array<string>, level: OrganizationLevel, name: string, organizationId: string, parentId?: string | null } | null } | null };

export type GetProposalListQueryVariables = Exact<{
  filter?: InputMaybe<ProposalFilterDtoInput>;
  sort?: InputMaybe<Array<SortFieldOfProposalsSortingInput> | SortFieldOfProposalsSortingInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export type GetProposalListQuery = { __typename?: 'TranslationDashboardQueries', proposals?: { __typename?: 'ProposalDtoCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'ProposalDto', code: string, createdAt: any, englishBookId: number, languageId: string, organizationId: string, proposalId: any, status: ApprovalStatus, title: string, updatedAt: any, approvals?: Array<{ __typename?: 'ProposalApprovalDto', approvalId: any, approvedById: any, comment?: string | null, createdAt: any, level: OrganizationLevel, status: ApprovalStatus, updatedAt: any, approvedBy?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null }> | null, proposer?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null }> | null, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type GetProposalOneQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;

export type GetProposalOneQuery = { __typename?: 'TranslationDashboardQueries', proposal?: { __typename?: 'ProposalDto', code: string, createdAt: any, englishBookId: number, languageId: string, organizationId: string, proposalId: any, status: ApprovalStatus, title: string, updatedAt: any, approvals?: Array<{ __typename?: 'ProposalApprovalDto', approvalId: any, approvedById: any, comment?: string | null, createdAt: any, level: OrganizationLevel, status: ApprovalStatus, updatedAt: any, approvedBy?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null }> | null, proposer?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null } | null };

export type GetPublicationListQueryVariables = Exact<{
  filter?: InputMaybe<PublicationFilterDtoInput>;
  sort?: InputMaybe<Array<SortFieldOfPublicationsSortingInput> | SortFieldOfPublicationsSortingInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export type GetPublicationListQuery = { __typename?: 'TranslationDashboardQueries', publications?: { __typename?: 'PublicationDtoCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null }, original?: { __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null } } | null, translations: Array<{ __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null } }> }> | null, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type GetPublicationOneQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetPublicationOneQuery = { __typename?: 'TranslationDashboardQueries', publication?: { __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null }, original?: { __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null } } | null, translations: Array<{ __typename?: 'PublicationDto', chapterCount?: number | null, code: string, createdAt: any, id: number, pageCount?: number | null, title: string, updatedAt: any, language: { __typename?: 'LanguageDto', code: string, name: string, egwCode?: string | null } }> } | null };

export type GetUserListQueryVariables = Exact<{
  filter?: InputMaybe<UserFilterDtoInput>;
  sort?: InputMaybe<Array<SortFieldOfUserListSortingInput> | SortFieldOfUserListSortingInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export type GetUserListQuery = { __typename?: 'TranslationDashboardQueries', users?: { __typename?: 'UserDtoCollectionSegment', totalCount: number, items?: Array<{ __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> }> | null, pageInfo: { __typename?: 'CollectionSegmentInfo', hasNextPage: boolean, hasPreviousPage: boolean } } | null };

export type GetUserOneQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;

export type GetUserOneQuery = { __typename?: 'TranslationDashboardQueries', user?: { __typename?: 'UserDto', createdAt: any, email: string, firstName: string, isEnabled: boolean, lastName: string, organizationId?: string | null, updatedAt: any, userId: any, roles: Array<{ __typename?: 'KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto', key: OrganizationLevel, value: Array<{ __typename?: 'RoleDetailsDto', canBeSet: boolean, isEnabled: boolean, role: OrganizationRole }> }> } | null };

export const CountryListItemFragmentDoc = gql`
    fragment CountryListItem on CountryDto {
  code
  name
}
    `;
export const OrganizationFragmentDoc = gql`
    fragment Organization on OrganizationDto {
  childCount
  languages
  level
  name
  organizationId
  parentId
}
    `;
export const OrganizationListItemFragmentDoc = gql`
    fragment OrganizationListItem on OrganizationDto {
  childCount
  children {
    ...Organization
  }
  languages
  level
  name
  organizationId
  parent {
    ...Organization
  }
  parentId
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on CollectionSegmentInfo {
  hasNextPage
  hasPreviousPage
}
    `;
export const UserRoleDetailFragmentDoc = gql`
    fragment UserRoleDetail on RoleDetailsDto {
  canBeSet
  isEnabled
  role
}
    `;
export const UserRoleFragmentDoc = gql`
    fragment UserRole on KeyValuePairOfOrganizationLevelAndListOfRoleDetailsDto {
  key
  value {
    ...UserRoleDetail
  }
}
    `;
export const UserListItemFragmentDoc = gql`
    fragment UserListItem on UserDto {
  createdAt
  email
  firstName
  isEnabled
  lastName
  organizationId
  roles {
    ...UserRole
  }
  updatedAt
  userId
}
    `;
export const ProposalApprovalListItemFragmentDoc = gql`
    fragment ProposalApprovalListItem on ProposalApprovalDto {
  approvalId
  approvedBy {
    ...UserListItem
  }
  approvedById
  comment
  createdAt
  level
  status
  createdAt
  updatedAt
}
    `;
export const ProposalListItemFragmentDoc = gql`
    fragment ProposalListItem on ProposalDto {
  approvals {
    ...ProposalApprovalListItem
  }
  code
  createdAt
  englishBookId
  languageId
  organizationId
  proposalId
  proposer {
    ...UserListItem
  }
  status
  title
  updatedAt
}
    `;
export const LanguageListItemFragmentDoc = gql`
    fragment LanguageListItem on LanguageDto {
  code
  name
  egwCode
}
    `;
export const PublicationFragmentDoc = gql`
    fragment Publication on PublicationDto {
  chapterCount
  code
  createdAt
  id
  language {
    ...LanguageListItem
  }
  pageCount
  title
  updatedAt
}
    `;
export const PublicationListItemFragmentDoc = gql`
    fragment PublicationListItem on PublicationDto {
  chapterCount
  code
  createdAt
  id
  language {
    ...LanguageListItem
  }
  original {
    ...Publication
  }
  pageCount
  title
  translations {
    ...Publication
  }
  updatedAt
}
    `;
export const ApproveProposalDocument = gql`
    mutation ApproveProposal($input: ApproveProposalInput!) {
  approveProposal(input: $input) {
    proposalDto {
      ...ProposalListItem
    }
  }
}
    ${ProposalListItemFragmentDoc}
${ProposalApprovalListItemFragmentDoc}
${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;
export type ApproveProposalMutationFn = Apollo.MutationFunction<ApproveProposalMutation, ApproveProposalMutationVariables>;

/**
 * __useApproveProposalMutation__
 *
 * To run a mutation, you first call `useApproveProposalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useApproveProposalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [approveProposalMutation, { data, loading, error }] = useApproveProposalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useApproveProposalMutation(baseOptions?: Apollo.MutationHookOptions<ApproveProposalMutation, ApproveProposalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<ApproveProposalMutation, ApproveProposalMutationVariables>(ApproveProposalDocument, options);
      }
export type ApproveProposalMutationHookResult = ReturnType<typeof useApproveProposalMutation>;
export type ApproveProposalMutationResult = Apollo.MutationResult<ApproveProposalMutation>;
export type ApproveProposalMutationOptions = Apollo.BaseMutationOptions<ApproveProposalMutation, ApproveProposalMutationVariables>;
export const CreateProposalDocument = gql`
    mutation CreateProposal($input: CreateProposalInput!) {
  createProposal(input: $input) {
    proposalDto {
      ...ProposalListItem
    }
  }
}
    ${ProposalListItemFragmentDoc}
${ProposalApprovalListItemFragmentDoc}
${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;
export type CreateProposalMutationFn = Apollo.MutationFunction<CreateProposalMutation, CreateProposalMutationVariables>;

/**
 * __useCreateProposalMutation__
 *
 * To run a mutation, you first call `useCreateProposalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProposalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProposalMutation, { data, loading, error }] = useCreateProposalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProposalMutation(baseOptions?: Apollo.MutationHookOptions<CreateProposalMutation, CreateProposalMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateProposalMutation, CreateProposalMutationVariables>(CreateProposalDocument, options);
      }
export type CreateProposalMutationHookResult = ReturnType<typeof useCreateProposalMutation>;
export type CreateProposalMutationResult = Apollo.MutationResult<CreateProposalMutation>;
export type CreateProposalMutationOptions = Apollo.BaseMutationOptions<CreateProposalMutation, CreateProposalMutationVariables>;
export const SetLanguageCodeDocument = gql`
    mutation SetLanguageCode($input: SetLanguageCodeInput!) {
  setLanguageCode(input: $input) {
    languageDto {
      ...LanguageListItem
    }
  }
}
    ${LanguageListItemFragmentDoc}`;
export type SetLanguageCodeMutationFn = Apollo.MutationFunction<SetLanguageCodeMutation, SetLanguageCodeMutationVariables>;

/**
 * __useSetLanguageCodeMutation__
 *
 * To run a mutation, you first call `useSetLanguageCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetLanguageCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setLanguageCodeMutation, { data, loading, error }] = useSetLanguageCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetLanguageCodeMutation(baseOptions?: Apollo.MutationHookOptions<SetLanguageCodeMutation, SetLanguageCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<SetLanguageCodeMutation, SetLanguageCodeMutationVariables>(SetLanguageCodeDocument, options);
      }
export type SetLanguageCodeMutationHookResult = ReturnType<typeof useSetLanguageCodeMutation>;
export type SetLanguageCodeMutationResult = Apollo.MutationResult<SetLanguageCodeMutation>;
export type SetLanguageCodeMutationOptions = Apollo.BaseMutationOptions<SetLanguageCodeMutation, SetLanguageCodeMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    userDto {
      ...UserListItem
    }
  }
}
    ${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    boolean
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const ChangeUserEmailDocument = gql`
    mutation ChangeUserEmail($input: ChangeUserEmailInput!) {
  changeUserEmail(input: $input) {
    userDto {
      ...UserListItem
    }
  }
}
    ${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;
export type ChangeUserEmailMutationFn = Apollo.MutationFunction<ChangeUserEmailMutation, ChangeUserEmailMutationVariables>;

/**
 * __useChangeUserEmailMutation__
 *
 * To run a mutation, you first call `useChangeUserEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserEmailMutation, { data, loading, error }] = useChangeUserEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeUserEmailMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserEmailMutation, ChangeUserEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<ChangeUserEmailMutation, ChangeUserEmailMutationVariables>(ChangeUserEmailDocument, options);
      }
export type ChangeUserEmailMutationHookResult = ReturnType<typeof useChangeUserEmailMutation>;
export type ChangeUserEmailMutationResult = Apollo.MutationResult<ChangeUserEmailMutation>;
export type ChangeUserEmailMutationOptions = Apollo.BaseMutationOptions<ChangeUserEmailMutation, ChangeUserEmailMutationVariables>;
export const ChangeUserNameDocument = gql`
    mutation ChangeUserName($input: ChangeUserNameInput!) {
  changeUserName(input: $input) {
    userDto {
      ...UserListItem
    }
  }
}
    ${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;
export type ChangeUserNameMutationFn = Apollo.MutationFunction<ChangeUserNameMutation, ChangeUserNameMutationVariables>;

/**
 * __useChangeUserNameMutation__
 *
 * To run a mutation, you first call `useChangeUserNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserNameMutation, { data, loading, error }] = useChangeUserNameMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeUserNameMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserNameMutation, ChangeUserNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<ChangeUserNameMutation, ChangeUserNameMutationVariables>(ChangeUserNameDocument, options);
      }
export type ChangeUserNameMutationHookResult = ReturnType<typeof useChangeUserNameMutation>;
export type ChangeUserNameMutationResult = Apollo.MutationResult<ChangeUserNameMutation>;
export type ChangeUserNameMutationOptions = Apollo.BaseMutationOptions<ChangeUserNameMutation, ChangeUserNameMutationVariables>;
export const ChangeUserOrganizationDocument = gql`
    mutation ChangeUserOrganization($input: ChangeUserOrganizationInput!) {
  changeUserOrganization(input: $input) {
    userDto {
      ...UserListItem
    }
  }
}
    ${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;
export type ChangeUserOrganizationMutationFn = Apollo.MutationFunction<ChangeUserOrganizationMutation, ChangeUserOrganizationMutationVariables>;

/**
 * __useChangeUserOrganizationMutation__
 *
 * To run a mutation, you first call `useChangeUserOrganizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserOrganizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserOrganizationMutation, { data, loading, error }] = useChangeUserOrganizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeUserOrganizationMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserOrganizationMutation, ChangeUserOrganizationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<ChangeUserOrganizationMutation, ChangeUserOrganizationMutationVariables>(ChangeUserOrganizationDocument, options);
      }
export type ChangeUserOrganizationMutationHookResult = ReturnType<typeof useChangeUserOrganizationMutation>;
export type ChangeUserOrganizationMutationResult = Apollo.MutationResult<ChangeUserOrganizationMutation>;
export type ChangeUserOrganizationMutationOptions = Apollo.BaseMutationOptions<ChangeUserOrganizationMutation, ChangeUserOrganizationMutationVariables>;
export const UpdateUserRolesDocument = gql`
    mutation UpdateUserRoles($input: UpdateUserRolesInput!) {
  updateUserRoles(input: $input) {
    userDto {
      ...UserListItem
    }
  }
}
    ${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;
export type UpdateUserRolesMutationFn = Apollo.MutationFunction<UpdateUserRolesMutation, UpdateUserRolesMutationVariables>;

/**
 * __useUpdateUserRolesMutation__
 *
 * To run a mutation, you first call `useUpdateUserRolesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserRolesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserRolesMutation, { data, loading, error }] = useUpdateUserRolesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserRolesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserRolesMutation, UpdateUserRolesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdateUserRolesMutation, UpdateUserRolesMutationVariables>(UpdateUserRolesDocument, options);
      }
export type UpdateUserRolesMutationHookResult = ReturnType<typeof useUpdateUserRolesMutation>;
export type UpdateUserRolesMutationResult = Apollo.MutationResult<UpdateUserRolesMutation>;
export type UpdateUserRolesMutationOptions = Apollo.BaseMutationOptions<UpdateUserRolesMutation, UpdateUserRolesMutationVariables>;
export const ClearUserRolesDocument = gql`
    mutation ClearUserRoles($input: ClearUserRolesInput!) {
  clearUserRoles(input: $input) {
    userDto {
      ...UserListItem
    }
  }
}
    ${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;
export type ClearUserRolesMutationFn = Apollo.MutationFunction<ClearUserRolesMutation, ClearUserRolesMutationVariables>;

/**
 * __useClearUserRolesMutation__
 *
 * To run a mutation, you first call `useClearUserRolesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearUserRolesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearUserRolesMutation, { data, loading, error }] = useClearUserRolesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useClearUserRolesMutation(baseOptions?: Apollo.MutationHookOptions<ClearUserRolesMutation, ClearUserRolesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<ClearUserRolesMutation, ClearUserRolesMutationVariables>(ClearUserRolesDocument, options);
      }
export type ClearUserRolesMutationHookResult = ReturnType<typeof useClearUserRolesMutation>;
export type ClearUserRolesMutationResult = Apollo.MutationResult<ClearUserRolesMutation>;
export type ClearUserRolesMutationOptions = Apollo.BaseMutationOptions<ClearUserRolesMutation, ClearUserRolesMutationVariables>;
export const SetUserStatusDocument = gql`
    mutation SetUserStatus($input: SetUserStatusInput!) {
  setUserStatus(input: $input) {
    boolean
  }
}
    `;
export type SetUserStatusMutationFn = Apollo.MutationFunction<SetUserStatusMutation, SetUserStatusMutationVariables>;

/**
 * __useSetUserStatusMutation__
 *
 * To run a mutation, you first call `useSetUserStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetUserStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setUserStatusMutation, { data, loading, error }] = useSetUserStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetUserStatusMutation(baseOptions?: Apollo.MutationHookOptions<SetUserStatusMutation, SetUserStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<SetUserStatusMutation, SetUserStatusMutationVariables>(SetUserStatusDocument, options);
      }
export type SetUserStatusMutationHookResult = ReturnType<typeof useSetUserStatusMutation>;
export type SetUserStatusMutationResult = Apollo.MutationResult<SetUserStatusMutation>;
export type SetUserStatusMutationOptions = Apollo.BaseMutationOptions<SetUserStatusMutation, SetUserStatusMutationVariables>;
export const GetCountryListDocument = gql`
    query GetCountryList($filter: CountryFilterDtoInput, $sort: [SortFieldOfCountryListSortingInput!], $take: Int!, $skip: Int!) {
  countries(filter: $filter, sort: $sort, take: $take, skip: $skip) {
    items {
      ...CountryListItem
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${CountryListItemFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetCountryListQuery__
 *
 * To run a query within a React component, call `useGetCountryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetCountryListQuery(baseOptions: Apollo.QueryHookOptions<GetCountryListQuery, GetCountryListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetCountryListQuery, GetCountryListQueryVariables>(GetCountryListDocument, options);
      }
export function useGetCountryListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryListQuery, GetCountryListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetCountryListQuery, GetCountryListQueryVariables>(GetCountryListDocument, options);
        }
export type GetCountryListQueryHookResult = ReturnType<typeof useGetCountryListQuery>;
export type GetCountryListLazyQueryHookResult = ReturnType<typeof useGetCountryListLazyQuery>;
export type GetCountryListQueryResult = Apollo.QueryResult<GetCountryListQuery, GetCountryListQueryVariables>;
export const GetCountryOneDocument = gql`
    query GetCountryOne($code: String!) {
  country(code: $code) {
    ...CountryListItem
  }
}
    ${CountryListItemFragmentDoc}`;

/**
 * __useGetCountryOneQuery__
 *
 * To run a query within a React component, call `useGetCountryOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryOneQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryOneQuery(baseOptions: Apollo.QueryHookOptions<GetCountryOneQuery, GetCountryOneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetCountryOneQuery, GetCountryOneQueryVariables>(GetCountryOneDocument, options);
      }
export function useGetCountryOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryOneQuery, GetCountryOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetCountryOneQuery, GetCountryOneQueryVariables>(GetCountryOneDocument, options);
        }
export type GetCountryOneQueryHookResult = ReturnType<typeof useGetCountryOneQuery>;
export type GetCountryOneLazyQueryHookResult = ReturnType<typeof useGetCountryOneLazyQuery>;
export type GetCountryOneQueryResult = Apollo.QueryResult<GetCountryOneQuery, GetCountryOneQueryVariables>;
export const GetLanguageListDocument = gql`
    query GetLanguageList($filter: LanguageFilterDtoInput, $sort: [SortFieldOfLanguageSortingInput!], $take: Int!, $skip: Int!) {
  languages(filter: $filter, sort: $sort, take: $take, skip: $skip) {
    items {
      ...LanguageListItem
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${LanguageListItemFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetLanguageListQuery__
 *
 * To run a query within a React component, call `useGetLanguageListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLanguageListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLanguageListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetLanguageListQuery(baseOptions: Apollo.QueryHookOptions<GetLanguageListQuery, GetLanguageListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetLanguageListQuery, GetLanguageListQueryVariables>(GetLanguageListDocument, options);
      }
export function useGetLanguageListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLanguageListQuery, GetLanguageListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetLanguageListQuery, GetLanguageListQueryVariables>(GetLanguageListDocument, options);
        }
export type GetLanguageListQueryHookResult = ReturnType<typeof useGetLanguageListQuery>;
export type GetLanguageListLazyQueryHookResult = ReturnType<typeof useGetLanguageListLazyQuery>;
export type GetLanguageListQueryResult = Apollo.QueryResult<GetLanguageListQuery, GetLanguageListQueryVariables>;
export const GetLanguageOneDocument = gql`
    query GetLanguageOne($code: String!) {
  language(code: $code) {
    ...LanguageListItem
  }
}
    ${LanguageListItemFragmentDoc}`;

/**
 * __useGetLanguageOneQuery__
 *
 * To run a query within a React component, call `useGetLanguageOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLanguageOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLanguageOneQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetLanguageOneQuery(baseOptions: Apollo.QueryHookOptions<GetLanguageOneQuery, GetLanguageOneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetLanguageOneQuery, GetLanguageOneQueryVariables>(GetLanguageOneDocument, options);
      }
export function useGetLanguageOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLanguageOneQuery, GetLanguageOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetLanguageOneQuery, GetLanguageOneQueryVariables>(GetLanguageOneDocument, options);
        }
export type GetLanguageOneQueryHookResult = ReturnType<typeof useGetLanguageOneQuery>;
export type GetLanguageOneLazyQueryHookResult = ReturnType<typeof useGetLanguageOneLazyQuery>;
export type GetLanguageOneQueryResult = Apollo.QueryResult<GetLanguageOneQuery, GetLanguageOneQueryVariables>;
export const GetOrganizationListDocument = gql`
    query GetOrganizationList($filter: OrganizationFilterDtoInput, $take: Int!, $skip: Int!) {
  organizations(filter: $filter, take: $take, skip: $skip) {
    items {
      ...OrganizationListItem
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${OrganizationListItemFragmentDoc}
${OrganizationFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetOrganizationListQuery__
 *
 * To run a query within a React component, call `useGetOrganizationListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetOrganizationListQuery(baseOptions: Apollo.QueryHookOptions<GetOrganizationListQuery, GetOrganizationListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetOrganizationListQuery, GetOrganizationListQueryVariables>(GetOrganizationListDocument, options);
      }
export function useGetOrganizationListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationListQuery, GetOrganizationListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetOrganizationListQuery, GetOrganizationListQueryVariables>(GetOrganizationListDocument, options);
        }
export type GetOrganizationListQueryHookResult = ReturnType<typeof useGetOrganizationListQuery>;
export type GetOrganizationListLazyQueryHookResult = ReturnType<typeof useGetOrganizationListLazyQuery>;
export type GetOrganizationListQueryResult = Apollo.QueryResult<GetOrganizationListQuery, GetOrganizationListQueryVariables>;
export const GetOrganizationOneDocument = gql`
    query GetOrganizationOne($id: String!) {
  organization(id: $id) {
    ...OrganizationListItem
  }
}
    ${OrganizationListItemFragmentDoc}
${OrganizationFragmentDoc}`;

/**
 * __useGetOrganizationOneQuery__
 *
 * To run a query within a React component, call `useGetOrganizationOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationOneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrganizationOneQuery(baseOptions: Apollo.QueryHookOptions<GetOrganizationOneQuery, GetOrganizationOneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetOrganizationOneQuery, GetOrganizationOneQueryVariables>(GetOrganizationOneDocument, options);
      }
export function useGetOrganizationOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationOneQuery, GetOrganizationOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetOrganizationOneQuery, GetOrganizationOneQueryVariables>(GetOrganizationOneDocument, options);
        }
export type GetOrganizationOneQueryHookResult = ReturnType<typeof useGetOrganizationOneQuery>;
export type GetOrganizationOneLazyQueryHookResult = ReturnType<typeof useGetOrganizationOneLazyQuery>;
export type GetOrganizationOneQueryResult = Apollo.QueryResult<GetOrganizationOneQuery, GetOrganizationOneQueryVariables>;
export const GetProposalListDocument = gql`
    query GetProposalList($filter: ProposalFilterDtoInput, $sort: [SortFieldOfProposalsSortingInput!], $take: Int!, $skip: Int!) {
  proposals(filter: $filter, sort: $sort, take: $take, skip: $skip) {
    items {
      ...ProposalListItem
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${ProposalListItemFragmentDoc}
${ProposalApprovalListItemFragmentDoc}
${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetProposalListQuery__
 *
 * To run a query within a React component, call `useGetProposalListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProposalListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProposalListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetProposalListQuery(baseOptions: Apollo.QueryHookOptions<GetProposalListQuery, GetProposalListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetProposalListQuery, GetProposalListQueryVariables>(GetProposalListDocument, options);
      }
export function useGetProposalListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProposalListQuery, GetProposalListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetProposalListQuery, GetProposalListQueryVariables>(GetProposalListDocument, options);
        }
export type GetProposalListQueryHookResult = ReturnType<typeof useGetProposalListQuery>;
export type GetProposalListLazyQueryHookResult = ReturnType<typeof useGetProposalListLazyQuery>;
export type GetProposalListQueryResult = Apollo.QueryResult<GetProposalListQuery, GetProposalListQueryVariables>;
export const GetProposalOneDocument = gql`
    query GetProposalOne($id: UUID!) {
  proposal(id: $id) {
    ...ProposalListItem
  }
}
    ${ProposalListItemFragmentDoc}
${ProposalApprovalListItemFragmentDoc}
${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;

/**
 * __useGetProposalOneQuery__
 *
 * To run a query within a React component, call `useGetProposalOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProposalOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProposalOneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProposalOneQuery(baseOptions: Apollo.QueryHookOptions<GetProposalOneQuery, GetProposalOneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetProposalOneQuery, GetProposalOneQueryVariables>(GetProposalOneDocument, options);
      }
export function useGetProposalOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProposalOneQuery, GetProposalOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetProposalOneQuery, GetProposalOneQueryVariables>(GetProposalOneDocument, options);
        }
export type GetProposalOneQueryHookResult = ReturnType<typeof useGetProposalOneQuery>;
export type GetProposalOneLazyQueryHookResult = ReturnType<typeof useGetProposalOneLazyQuery>;
export type GetProposalOneQueryResult = Apollo.QueryResult<GetProposalOneQuery, GetProposalOneQueryVariables>;
export const GetPublicationListDocument = gql`
    query GetPublicationList($filter: PublicationFilterDtoInput, $sort: [SortFieldOfPublicationsSortingInput!], $take: Int!, $skip: Int!) {
  publications(filter: $filter, sort: $sort, take: $take, skip: $skip) {
    items {
      ...PublicationListItem
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${PublicationListItemFragmentDoc}
${LanguageListItemFragmentDoc}
${PublicationFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetPublicationListQuery__
 *
 * To run a query within a React component, call `useGetPublicationListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicationListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicationListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetPublicationListQuery(baseOptions: Apollo.QueryHookOptions<GetPublicationListQuery, GetPublicationListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetPublicationListQuery, GetPublicationListQueryVariables>(GetPublicationListDocument, options);
      }
export function useGetPublicationListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicationListQuery, GetPublicationListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetPublicationListQuery, GetPublicationListQueryVariables>(GetPublicationListDocument, options);
        }
export type GetPublicationListQueryHookResult = ReturnType<typeof useGetPublicationListQuery>;
export type GetPublicationListLazyQueryHookResult = ReturnType<typeof useGetPublicationListLazyQuery>;
export type GetPublicationListQueryResult = Apollo.QueryResult<GetPublicationListQuery, GetPublicationListQueryVariables>;
export const GetPublicationOneDocument = gql`
    query GetPublicationOne($id: Int!) {
  publication(id: $id) {
    ...PublicationListItem
  }
}
    ${PublicationListItemFragmentDoc}
${LanguageListItemFragmentDoc}
${PublicationFragmentDoc}`;

/**
 * __useGetPublicationOneQuery__
 *
 * To run a query within a React component, call `useGetPublicationOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicationOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicationOneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPublicationOneQuery(baseOptions: Apollo.QueryHookOptions<GetPublicationOneQuery, GetPublicationOneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetPublicationOneQuery, GetPublicationOneQueryVariables>(GetPublicationOneDocument, options);
      }
export function useGetPublicationOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicationOneQuery, GetPublicationOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetPublicationOneQuery, GetPublicationOneQueryVariables>(GetPublicationOneDocument, options);
        }
export type GetPublicationOneQueryHookResult = ReturnType<typeof useGetPublicationOneQuery>;
export type GetPublicationOneLazyQueryHookResult = ReturnType<typeof useGetPublicationOneLazyQuery>;
export type GetPublicationOneQueryResult = Apollo.QueryResult<GetPublicationOneQuery, GetPublicationOneQueryVariables>;
export const GetUserListDocument = gql`
    query GetUserList($filter: UserFilterDtoInput, $sort: [SortFieldOfUserListSortingInput!], $take: Int!, $skip: Int!) {
  users(filter: $filter, sort: $sort, take: $take, skip: $skip) {
    items {
      ...UserListItem
    }
    pageInfo {
      ...PageInfo
    }
    totalCount
  }
}
    ${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useGetUserListQuery__
 *
 * To run a query within a React component, call `useGetUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetUserListQuery(baseOptions: Apollo.QueryHookOptions<GetUserListQuery, GetUserListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetUserListQuery, GetUserListQueryVariables>(GetUserListDocument, options);
      }
export function useGetUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserListQuery, GetUserListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetUserListQuery, GetUserListQueryVariables>(GetUserListDocument, options);
        }
export type GetUserListQueryHookResult = ReturnType<typeof useGetUserListQuery>;
export type GetUserListLazyQueryHookResult = ReturnType<typeof useGetUserListLazyQuery>;
export type GetUserListQueryResult = Apollo.QueryResult<GetUserListQuery, GetUserListQueryVariables>;
export const GetUserOneDocument = gql`
    query GetUserOne($id: UUID!) {
  user(id: $id) {
    ...UserListItem
  }
}
    ${UserListItemFragmentDoc}
${UserRoleFragmentDoc}
${UserRoleDetailFragmentDoc}`;

/**
 * __useGetUserOneQuery__
 *
 * To run a query within a React component, call `useGetUserOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserOneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserOneQuery(baseOptions: Apollo.QueryHookOptions<GetUserOneQuery, GetUserOneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GetUserOneQuery, GetUserOneQueryVariables>(GetUserOneDocument, options);
      }
export function useGetUserOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserOneQuery, GetUserOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GetUserOneQuery, GetUserOneQueryVariables>(GetUserOneDocument, options);
        }
export type GetUserOneQueryHookResult = ReturnType<typeof useGetUserOneQuery>;
export type GetUserOneLazyQueryHookResult = ReturnType<typeof useGetUserOneLazyQuery>;
export type GetUserOneQueryResult = Apollo.QueryResult<GetUserOneQuery, GetUserOneQueryVariables>;

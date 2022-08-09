import { AxiosError, AxiosResponse } from 'axios';

// interface IRestSuccessResponse<T> {
//   success: true;
//   status: number;
//   response?: T;
// }
//
// export interface IRestErrorResponse {
//   success: false;
//   status: number;
//   errors: { [key: string]: string[] };
// }
//
export type TRestApiResponse<T> = AxiosResponse<T> | AxiosError;

export enum ERestProp {
  Empty = '',
  Name = '/name',
  Email = '/email',
  Org = '/org',
  Roles = '/roles',
  Avatar = '/avatar',
  ByUser = '/by_user',
  Status = '/status',
  Unlock = '/unlock',
  Active = '/active',
  Approvals = '/approvals',
  Approve = '/approve',
}

export type TDataKey = string | number;

export interface IFetchOptions<F> {
  changeHistory?: boolean;
  filters?: F;
}

export interface IFilters {
  limit?: number | string;
  offset?: number | string;
  query?: string;
  orderBy?: string[];
}

export type ITreeData<T> = T & {
  children?: T[];
  value?: any;
  title?: string;
};

export interface IPaginatedResult<T> {
  totalCount?: number;
  limit?: number;
  offset?: number;
  items: T[];
}

export interface ICommentary {
  key?: TDataKey;
  id: string;
  userId: string;
  content: string;
  versionId: string;
  paragraphId: string;
  createdAt: Date;
}

export interface ICommentaryListFilters extends IFilters {
  id?: string;
  type?: 'version' | 'paragraph' | string;
}

export interface IVersion {
  key?: TDataKey;
  id: string;
  paragraphId: string;
  content: string;
  status: string;
  isActive: boolean;
  isLocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  commentaries: ICommentary[];
}

export interface IVersionListFilters extends IFilters {
  versionId?: string;
}

export interface IParagraph {
  key?: TDataKey;
  id: string;
  bookId: number;
  paraId: string;
  chapterId: number;
  tocId: string;
  translationId: string;
  originalContent: string;
  version: IVersion;
  versionsCount: number;
  commentariesCount: number;
  logsCount: number;
  order: number;
}

export interface IParagraphListFilters extends IFilters {
  translationId?: string;
  bookId?: number;
  originalBookID?: number;
  paraId?: string[];
  paragraphId?: string[];
  modifiedAfter?: Date;
}

export interface IParagraphInfo {
  versions: IVersion[];
  logs: any[];
  id: string;
  bookId: number;
  paraId: string;
  chapterId: number;
  tocId: string;
  translationId: string;
  originalContent: string;
  version: IVersion;
  versionsCount: number;
  commentariesCount: number;
  logsCount: number;
  order: number;
}

export interface ICountry {
  key?: string | number;
  code: string;
  name: string;
}

export interface ICountryListFilters extends IFilters {
  code?: string;
  orderBy?: ['code', '-code', 'name', '-name'] | string[];
}

export interface ILanguage {
  key?: string | number;
  code: string;
  name: string;
  egwCode: string;
}

export interface ILanguageListFilters extends IFilters {
  code?: string[];
  egwCode?: string;
  orderBy?: ['code', '-code', 'name', '-name', 'egwCode', '-egwCode'] | string[];
}

export enum EOrgLevel {
  Global = 'global',
  Division = 'division',
  Union = 'union',
  Conference = 'conference',
}

export interface IOrganization {
  key?: string | number | null;
  organizationId: string | null;
  parentId: string | null;
  name: string | null;
  level: EOrgLevel;
  childCount: number;
  languages: string[] | null;
  territory?: ITerritory | null;
}

export interface IOrganizationListFilters extends IFilters {
  ids?: string[];
  parents?: string[];
  level?: EOrgLevel;
}

export enum ETranslationStatus {
  Undecided = 'undecided',
  Approved = 'approved',
  Rejected = 'rejected',
}

export interface ITranslation {
  key?: TDataKey;
  id: string;
  status: ETranslationStatus;
  code: string;
  languageCode: string;
  title: string;
  bookId: number;
  originalBookId: number;
  isbn: string;
  createdAt: Date;
  updatedAt: Date;
  paragraphsCount: number;
  approvedParagraphsCount: number;
}

export interface ITranslationListFilters extends IFilters {
  translationId?: string[];
  languageCode?: string[];
  code?: string[];
  originalBookId?: number[];
  translatedBookId?: number[];
  status?: ETranslationStatus[];
}

export interface IPublication {
  key?: TDataKey;
  id: number;
  languageCode: string;
  originalPublicationId: number;
  code: string;
  title: string;
  chapterCount: number;
  pageCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPublicationListFilters {
  orderBy?: Array<'id' | '-id' | 'languageCode' | '-languageCode' | 'code' | '-code' | 'title' | '-title'>;
  limit?: number;
  offset?: number;
  ids?: Array<number>;
  parents?: Array<number>;
  language?: string;
  code?: string;
  query?: string;
}

export enum EUserRoles {
  Unprivileged = 'unprivileged',
  Administrator = 'administrator',
  GcChair = 'gcChair',
  GcTreasurer = 'gcTreasurer',
  GcSecretary = 'gcSecretary',
  GcPublishingDirector = 'gcPublishingDirector',
  DivisionChair = 'divisionChair',
  DivisionTreasurer = 'divisionTreasurer',
  DivisionSecretary = 'divisionSecretary',
  DivisionLiaison = 'divisionLiaison',
  DivisionPublishingDirector = 'divisionPublishingDirector',
  DivisionSopCoordinator = 'divisionSopCoordinator',
  UnionChair = 'unionChair',
  UnionTreasurer = 'unionTreasurer',
  UnionSecretary = 'unionSecretary',
  UnionPublishingDirector = 'unionPublishingDirector',
  UnionSopCoordinator = 'unionSopCoordinator',
  ConferenceSopCoordinator = 'conferenceSopCoordinator',
}

export enum EGlobalLevelRoles {
  Unprivileged = 'unprivileged',
  Administrator = 'administrator',
  GcChair = 'gcChair',
  GcTreasurer = 'gcTreasurer',
  GcSecretary = 'gcSecretary',
  GcPublishingDirector = 'gcPublishingDirector',
}

export enum EDivisionLevelRoles {
  DivisionChair = 'divisionChair',
  DivisionTreasurer = 'divisionTreasurer',
  DivisionSecretary = 'divisionSecretary',
  DivisionLiaison = 'divisionLiaison',
  DivisionPublishingDirector = 'divisionPublishingDirector',
  DivisionSopCoordinator = 'divisionSopCoordinator',
}

export enum EUnionLevelRoles {
  UnionChair = 'unionChair',
  UnionTreasurer = 'unionTreasurer',
  UnionSecretary = 'unionSecretary',
  UnionPublishingDirector = 'unionPublishingDirector',
  UnionSopCoordinator = 'unionSopCoordinator',
}

export enum EConferenceLevelRoles {
  ConferenceSopCoordinator = 'conferenceSopCoordinator',
}

export const LevelRoles = {
  global: Object.values(EGlobalLevelRoles),
  division: Object.values(EDivisionLevelRoles),
  union: Object.values(EUnionLevelRoles),
  conference: Object.values(EConferenceLevelRoles),
};

export interface IUser {
  userId: string;
  email: string;
  userName?: string;
  firstName: string;
  lastName: string;
  organizationId: string | null;
  isEnabled: true;
  createdAt: Date | string;
  updatedAt: Date | string;
  roles: EUserRoles[];
}

export interface IUserListFilters extends IFilters {
  ids?: string[];
  organizations?: (string | null | undefined)[];
  role?: EUserRoles;
  enabled?: boolean;
  orderBy?: ['email', 'firstName', 'lastName', '-email', '-firstName', '-lastName'] | string[];
}

export interface IUserRoleStatus {
  role: EUserRoles;
  canBeSet: boolean;
  isEnabled: boolean;
}

export type IUserRoleLevel = {
  [key in EOrgLevel]: IUserRoleStatus[];
};

export interface IUserRoles {
  roles: IUserRoleLevel;
}

export enum EApprovalStatus {
  Undecided = 'undecided',
  Rejected = 'rejected',
  Approved = 'approved',
}

export interface IProposal {
  key?: TDataKey;
  proposalId: string;
  proposerId: string;
  organizationId: string;
  englishBookId: number;
  languageId: string;
  code: string;
  title: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  status: EApprovalStatus;
  comment?: string;
}

export interface IProposalListFilters extends IFilters {
  proposals?: string[];
}

export interface IApproval {
  key?: number;
  isPendingApproval?: boolean;
  isPendingReject?: boolean;
  approvalId: string;
  approvedById: string;
  level: EOrgLevel;
  status: EApprovalStatus;
  comment?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IApprove {
  level: EOrgLevel;
  status: EApprovalStatus;
  comment?: string;
}

export interface ISelectedProposal extends IProposal {
  approvals: IApproval[] | null;
}

export interface IProposalFilters extends IFilters {
  proposals?: string[];
}

export interface ITerritoryLanguage {
  languageCode?: string;
  countryId?: string;
  speakers: number;
}

export interface ITerritory {
  name?: string;
  churchCount: number;
  memberCount: number;
  population: number;
  territoryLanguages?: ITerritoryLanguage[];
}

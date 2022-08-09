import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AuthenticationService } from './services/AuthenticationService';
import { CommentariesService } from './services/CommentariesService';
import { CountriesService } from './services/CountriesService';
import { LanguagesService } from './services/LanguagesService';
import { OrganizationsService } from './services/OrganizationsService';
import { ParagraphsService } from './services/ParagraphsService';
import { ProposalsService } from './services/ProposalsService';
import { PublicationsService } from './services/PublicationsService';
import { TranslationsService } from './services/TranslationsService';
import { UserActionsService } from './services/UserActionsService';
import { UsersService } from './services/UsersService';
import { UtilitiesService } from './services/UtilitiesService';
import { VersionsService } from './services/VersionsService';
import CONSTANTS from '../../config/CONSTANTS';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class AxiosApiAppClient {
  public readonly authentication: AuthenticationService;

  public readonly commentaries: CommentariesService;

  public readonly countries: CountriesService;

  public readonly languages: LanguagesService;

  public readonly organizations: OrganizationsService;

  public readonly paragraphs: ParagraphsService;

  public readonly proposals: ProposalsService;

  public readonly publications: PublicationsService;

  public readonly translations: TranslationsService;

  public readonly userActions: UserActionsService;

  public readonly users: UsersService;

  public readonly utilities: UtilitiesService;

  public readonly versions: VersionsService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '',
      VERSION: config?.VERSION ?? '1.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.authentication = new AuthenticationService(this.request);
    this.commentaries = new CommentariesService(this.request);
    this.countries = new CountriesService(this.request);
    this.languages = new LanguagesService(this.request);
    this.organizations = new OrganizationsService(this.request);
    this.paragraphs = new ParagraphsService(this.request);
    this.proposals = new ProposalsService(this.request);
    this.publications = new PublicationsService(this.request);
    this.translations = new TranslationsService(this.request);
    this.userActions = new UserActionsService(this.request);
    this.users = new UsersService(this.request);
    this.utilities = new UtilitiesService(this.request);
    this.versions = new VersionsService(this.request);
  }
}

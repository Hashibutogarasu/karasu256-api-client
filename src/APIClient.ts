/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AuthService } from './services/AuthService';
import { GoogleService } from './services/GoogleService';
import { NodeService } from './services/NodeService';
import { ProfileService } from './services/ProfileService';
import { UserService } from './services/UserService';
import { WikiService } from './services/WikiService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class APIClient {
    public readonly auth: AuthService;
    public readonly google: GoogleService;
    public readonly node: NodeService;
    public readonly profile: ProfileService;
    public readonly user: UserService;
    public readonly wiki: WikiService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.karasu256.com',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.auth = new AuthService(this.request);
        this.google = new GoogleService(this.request);
        this.node = new NodeService(this.request);
        this.profile = new ProfileService(this.request);
        this.user = new UserService(this.request);
        this.wiki = new WikiService(this.request);
    }
}


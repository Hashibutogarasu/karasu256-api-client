/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ArtifactsService } from './services/ArtifactsService';
import { ArtifactSetsService } from './services/ArtifactSetsService';
import { AuthService } from './services/AuthService';
import { CharactersService } from './services/CharactersService';
import { CountriesService } from './services/CountriesService';
import { WeaponsService } from './services/WeaponsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class APIClient {
    public readonly artifacts: ArtifactsService;
    public readonly artifactSets: ArtifactSetsService;
    public readonly auth: AuthService;
    public readonly characters: CharactersService;
    public readonly countries: CountriesService;
    public readonly weapons: WeaponsService;
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
        this.artifacts = new ArtifactsService(this.request);
        this.artifactSets = new ArtifactSetsService(this.request);
        this.auth = new AuthService(this.request);
        this.characters = new CharactersService(this.request);
        this.countries = new CountriesService(this.request);
        this.weapons = new WeaponsService(this.request);
    }
}


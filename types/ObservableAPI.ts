import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ArtifactSets } from '../models/ArtifactSets';
import { ArtifactSetsControllerGetQueryParameter } from '../models/ArtifactSetsControllerGetQueryParameter';
import { Artifacts } from '../models/Artifacts';
import { ArtifactsControllerCreateRequest } from '../models/ArtifactsControllerCreateRequest';
import { ArtifactsControllerGetQueryParameter } from '../models/ArtifactsControllerGetQueryParameter';
import { ArtifactsControllerUpdateRequest } from '../models/ArtifactsControllerUpdateRequest';
import { Character } from '../models/Character';
import { CharactersControllerCreateRequest } from '../models/CharactersControllerCreateRequest';
import { CharactersControllerGetQueryParameter } from '../models/CharactersControllerGetQueryParameter';
import { CharactersControllerImportFromHoyoLabQueryParameter } from '../models/CharactersControllerImportFromHoyoLabQueryParameter';
import { CharactersControllerImportRequest } from '../models/CharactersControllerImportRequest';
import { CharactersControllerImportRequestExt } from '../models/CharactersControllerImportRequestExt';
import { CharactersControllerImportRequestExtPostExt } from '../models/CharactersControllerImportRequestExtPostExt';
import { CharactersControllerImportRequestFilterValues } from '../models/CharactersControllerImportRequestFilterValues';
import { CharactersControllerImportRequestFilterValuesCharacterProperty } from '../models/CharactersControllerImportRequestFilterValuesCharacterProperty';
import { CharactersControllerImportRequestFilterValuesCharacterPropertyKey } from '../models/CharactersControllerImportRequestFilterValuesCharacterPropertyKey';
import { CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner } from '../models/CharactersControllerImportRequestFilterValuesCharacterPropertyValueTypesInner';
import { CharactersControllerImportRequestModulesInner } from '../models/CharactersControllerImportRequestModulesInner';
import { CharactersControllerImportRequestModulesInnerComponentsInner } from '../models/CharactersControllerImportRequestModulesInnerComponentsInner';
import { CharactersControllerUpdateRequest } from '../models/CharactersControllerUpdateRequest';
import { CountriesControllerCreateRequest } from '../models/CountriesControllerCreateRequest';
import { CountriesControllerGetQueryParameter } from '../models/CountriesControllerGetQueryParameter';
import { CountriesControllerUpdateRequest } from '../models/CountriesControllerUpdateRequest';
import { Country } from '../models/Country';
import { GalleriesControllerCreateRequest } from '../models/GalleriesControllerCreateRequest';
import { GalleriesControllerUpdateRequest } from '../models/GalleriesControllerUpdateRequest';
import { Gallery } from '../models/Gallery';
import { VersionsEntity } from '../models/VersionsEntity';
import { Weapon } from '../models/Weapon';
import { WeaponsControllerCreateRequest } from '../models/WeaponsControllerCreateRequest';
import { WeaponsControllerGetQueryParameter } from '../models/WeaponsControllerGetQueryParameter';
import { WeaponsControllerUpdateRequest } from '../models/WeaponsControllerUpdateRequest';

import { ArtifactSetsApiRequestFactory, ArtifactSetsApiResponseProcessor} from "../apis/ArtifactSetsApi";
export class ObservableArtifactSetsApi {
    private requestFactory: ArtifactSetsApiRequestFactory;
    private responseProcessor: ArtifactSetsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ArtifactSetsApiRequestFactory,
        responseProcessor?: ArtifactSetsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ArtifactSetsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ArtifactSetsApiResponseProcessor();
    }

    /**
     * @param artifactsControllerCreateRequest
     */
    public artifactSetsControllerCreateWithHttpInfo(artifactsControllerCreateRequest: ArtifactsControllerCreateRequest, _options?: Configuration): Observable<HttpInfo<ArtifactSets>> {
        const requestContextPromise = this.requestFactory.artifactSetsControllerCreate(artifactsControllerCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactSetsControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param artifactsControllerCreateRequest
     */
    public artifactSetsControllerCreate(artifactsControllerCreateRequest: ArtifactsControllerCreateRequest, _options?: Configuration): Observable<ArtifactSets> {
        return this.artifactSetsControllerCreateWithHttpInfo(artifactsControllerCreateRequest, _options).pipe(map((apiResponse: HttpInfo<ArtifactSets>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public artifactSetsControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.artifactSetsControllerDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactSetsControllerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public artifactSetsControllerDelete(id: string, _options?: Configuration): Observable<void> {
        return this.artifactSetsControllerDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public artifactSetsControllerGetWithHttpInfo(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Array<ArtifactSets>>> {
        const requestContextPromise = this.requestFactory.artifactSetsControllerGet(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactSetsControllerGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public artifactSetsControllerGet(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Observable<Array<ArtifactSets>> {
        return this.artifactSetsControllerGetWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Array<ArtifactSets>>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public artifactSetsControllerGetOneWithHttpInfo(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<ArtifactSets>> {
        const requestContextPromise = this.requestFactory.artifactSetsControllerGetOne(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactSetsControllerGetOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public artifactSetsControllerGetOne(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Observable<ArtifactSets> {
        return this.artifactSetsControllerGetOneWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<ArtifactSets>) => apiResponse.data));
    }

    /**
     * @param artifactsControllerUpdateRequest
     */
    public artifactSetsControllerUpdateWithHttpInfo(artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.artifactSetsControllerUpdate(artifactsControllerUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactSetsControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param artifactsControllerUpdateRequest
     */
    public artifactSetsControllerUpdate(artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest, _options?: Configuration): Observable<void> {
        return this.artifactSetsControllerUpdateWithHttpInfo(artifactsControllerUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ArtifactsApiRequestFactory, ArtifactsApiResponseProcessor} from "../apis/ArtifactsApi";
export class ObservableArtifactsApi {
    private requestFactory: ArtifactsApiRequestFactory;
    private responseProcessor: ArtifactsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ArtifactsApiRequestFactory,
        responseProcessor?: ArtifactsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ArtifactsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ArtifactsApiResponseProcessor();
    }

    /**
     * @param artifactsControllerCreateRequest
     */
    public artifactsControllerCreateWithHttpInfo(artifactsControllerCreateRequest: ArtifactsControllerCreateRequest, _options?: Configuration): Observable<HttpInfo<Artifacts>> {
        const requestContextPromise = this.requestFactory.artifactsControllerCreate(artifactsControllerCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactsControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param artifactsControllerCreateRequest
     */
    public artifactsControllerCreate(artifactsControllerCreateRequest: ArtifactsControllerCreateRequest, _options?: Configuration): Observable<Artifacts> {
        return this.artifactsControllerCreateWithHttpInfo(artifactsControllerCreateRequest, _options).pipe(map((apiResponse: HttpInfo<Artifacts>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public artifactsControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.artifactsControllerDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactsControllerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public artifactsControllerDelete(id: string, _options?: Configuration): Observable<void> {
        return this.artifactsControllerDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public artifactsControllerGetWithHttpInfo(query: ArtifactsControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Array<Artifacts>>> {
        const requestContextPromise = this.requestFactory.artifactsControllerGet(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactsControllerGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public artifactsControllerGet(query: ArtifactsControllerGetQueryParameter, _options?: Configuration): Observable<Array<Artifacts>> {
        return this.artifactsControllerGetWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Array<Artifacts>>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public artifactsControllerGetOneWithHttpInfo(query: ArtifactsControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Artifacts>> {
        const requestContextPromise = this.requestFactory.artifactsControllerGetOne(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactsControllerGetOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public artifactsControllerGetOne(query: ArtifactsControllerGetQueryParameter, _options?: Configuration): Observable<Artifacts> {
        return this.artifactsControllerGetOneWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Artifacts>) => apiResponse.data));
    }

    /**
     * @param artifactsControllerUpdateRequest
     */
    public artifactsControllerUpdateWithHttpInfo(artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.artifactsControllerUpdate(artifactsControllerUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactsControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param artifactsControllerUpdateRequest
     */
    public artifactsControllerUpdate(artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest, _options?: Configuration): Observable<void> {
        return this.artifactsControllerUpdateWithHttpInfo(artifactsControllerUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     */
    public authControllerMeWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.authControllerMe(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerMeWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerMe(_options?: Configuration): Observable<void> {
        return this.authControllerMeWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { CharactersApiRequestFactory, CharactersApiResponseProcessor} from "../apis/CharactersApi";
export class ObservableCharactersApi {
    private requestFactory: CharactersApiRequestFactory;
    private responseProcessor: CharactersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CharactersApiRequestFactory,
        responseProcessor?: CharactersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CharactersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CharactersApiResponseProcessor();
    }

    /**
     * @param charactersControllerCreateRequest
     */
    public charactersControllerCreateWithHttpInfo(charactersControllerCreateRequest: CharactersControllerCreateRequest, _options?: Configuration): Observable<HttpInfo<Character>> {
        const requestContextPromise = this.requestFactory.charactersControllerCreate(charactersControllerCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.charactersControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param charactersControllerCreateRequest
     */
    public charactersControllerCreate(charactersControllerCreateRequest: CharactersControllerCreateRequest, _options?: Configuration): Observable<Character> {
        return this.charactersControllerCreateWithHttpInfo(charactersControllerCreateRequest, _options).pipe(map((apiResponse: HttpInfo<Character>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public charactersControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.charactersControllerDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.charactersControllerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public charactersControllerDelete(id: string, _options?: Configuration): Observable<void> {
        return this.charactersControllerDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public charactersControllerGetWithHttpInfo(query: CharactersControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Array<Character>>> {
        const requestContextPromise = this.requestFactory.charactersControllerGet(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.charactersControllerGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public charactersControllerGet(query: CharactersControllerGetQueryParameter, _options?: Configuration): Observable<Array<Character>> {
        return this.charactersControllerGetWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Array<Character>>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public charactersControllerGetOneWithHttpInfo(query: CharactersControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Character>> {
        const requestContextPromise = this.requestFactory.charactersControllerGetOne(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.charactersControllerGetOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public charactersControllerGetOne(query: CharactersControllerGetQueryParameter, _options?: Configuration): Observable<Character> {
        return this.charactersControllerGetOneWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Character>) => apiResponse.data));
    }

    /**
     * @param charactersControllerImportRequest
     */
    public charactersControllerImportWithHttpInfo(charactersControllerImportRequest: CharactersControllerImportRequest, _options?: Configuration): Observable<HttpInfo<Character>> {
        const requestContextPromise = this.requestFactory.charactersControllerImport(charactersControllerImportRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.charactersControllerImportWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param charactersControllerImportRequest
     */
    public charactersControllerImport(charactersControllerImportRequest: CharactersControllerImportRequest, _options?: Configuration): Observable<Character> {
        return this.charactersControllerImportWithHttpInfo(charactersControllerImportRequest, _options).pipe(map((apiResponse: HttpInfo<Character>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public charactersControllerImportFromHoyoLabWithHttpInfo(query: CharactersControllerImportFromHoyoLabQueryParameter, _options?: Configuration): Observable<HttpInfo<Character>> {
        const requestContextPromise = this.requestFactory.charactersControllerImportFromHoyoLab(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.charactersControllerImportFromHoyoLabWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public charactersControllerImportFromHoyoLab(query: CharactersControllerImportFromHoyoLabQueryParameter, _options?: Configuration): Observable<Character> {
        return this.charactersControllerImportFromHoyoLabWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Character>) => apiResponse.data));
    }

    /**
     * @param charactersControllerUpdateRequest
     */
    public charactersControllerUpdateWithHttpInfo(charactersControllerUpdateRequest: CharactersControllerUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.charactersControllerUpdate(charactersControllerUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.charactersControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param charactersControllerUpdateRequest
     */
    public charactersControllerUpdate(charactersControllerUpdateRequest: CharactersControllerUpdateRequest, _options?: Configuration): Observable<void> {
        return this.charactersControllerUpdateWithHttpInfo(charactersControllerUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";
export class ObservableCountriesApi {
    private requestFactory: CountriesApiRequestFactory;
    private responseProcessor: CountriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CountriesApiRequestFactory,
        responseProcessor?: CountriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CountriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CountriesApiResponseProcessor();
    }

    /**
     * @param countriesControllerCreateRequest
     */
    public countriesControllerCreateWithHttpInfo(countriesControllerCreateRequest: CountriesControllerCreateRequest, _options?: Configuration): Observable<HttpInfo<Country>> {
        const requestContextPromise = this.requestFactory.countriesControllerCreate(countriesControllerCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countriesControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param countriesControllerCreateRequest
     */
    public countriesControllerCreate(countriesControllerCreateRequest: CountriesControllerCreateRequest, _options?: Configuration): Observable<Country> {
        return this.countriesControllerCreateWithHttpInfo(countriesControllerCreateRequest, _options).pipe(map((apiResponse: HttpInfo<Country>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public countriesControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.countriesControllerDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countriesControllerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public countriesControllerDelete(id: string, _options?: Configuration): Observable<void> {
        return this.countriesControllerDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public countriesControllerGetWithHttpInfo(query: CountriesControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Array<Country>>> {
        const requestContextPromise = this.requestFactory.countriesControllerGet(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countriesControllerGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public countriesControllerGet(query: CountriesControllerGetQueryParameter, _options?: Configuration): Observable<Array<Country>> {
        return this.countriesControllerGetWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Array<Country>>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public countriesControllerGetOneWithHttpInfo(query: CountriesControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Country>> {
        const requestContextPromise = this.requestFactory.countriesControllerGetOne(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countriesControllerGetOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public countriesControllerGetOne(query: CountriesControllerGetQueryParameter, _options?: Configuration): Observable<Country> {
        return this.countriesControllerGetOneWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Country>) => apiResponse.data));
    }

    /**
     * @param countriesControllerUpdateRequest
     */
    public countriesControllerUpdateWithHttpInfo(countriesControllerUpdateRequest: CountriesControllerUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.countriesControllerUpdate(countriesControllerUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countriesControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param countriesControllerUpdateRequest
     */
    public countriesControllerUpdate(countriesControllerUpdateRequest: CountriesControllerUpdateRequest, _options?: Configuration): Observable<void> {
        return this.countriesControllerUpdateWithHttpInfo(countriesControllerUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { GalleriesApiRequestFactory, GalleriesApiResponseProcessor} from "../apis/GalleriesApi";
export class ObservableGalleriesApi {
    private requestFactory: GalleriesApiRequestFactory;
    private responseProcessor: GalleriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GalleriesApiRequestFactory,
        responseProcessor?: GalleriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GalleriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GalleriesApiResponseProcessor();
    }

    /**
     * @param galleriesControllerCreateRequest
     */
    public galleriesControllerCreateWithHttpInfo(galleriesControllerCreateRequest: GalleriesControllerCreateRequest, _options?: Configuration): Observable<HttpInfo<Gallery>> {
        const requestContextPromise = this.requestFactory.galleriesControllerCreate(galleriesControllerCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param galleriesControllerCreateRequest
     */
    public galleriesControllerCreate(galleriesControllerCreateRequest: GalleriesControllerCreateRequest, _options?: Configuration): Observable<Gallery> {
        return this.galleriesControllerCreateWithHttpInfo(galleriesControllerCreateRequest, _options).pipe(map((apiResponse: HttpInfo<Gallery>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public galleriesControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.galleriesControllerDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesControllerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public galleriesControllerDelete(id: string, _options?: Configuration): Observable<void> {
        return this.galleriesControllerDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public galleriesControllerGetWithHttpInfo(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Array<Gallery>>> {
        const requestContextPromise = this.requestFactory.galleriesControllerGet(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesControllerGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public galleriesControllerGet(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Observable<Array<Gallery>> {
        return this.galleriesControllerGetWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Array<Gallery>>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public galleriesControllerGetOneWithHttpInfo(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Gallery>> {
        const requestContextPromise = this.requestFactory.galleriesControllerGetOne(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesControllerGetOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public galleriesControllerGetOne(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Observable<Gallery> {
        return this.galleriesControllerGetOneWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Gallery>) => apiResponse.data));
    }

    /**
     * @param galleriesControllerUpdateRequest
     */
    public galleriesControllerUpdateWithHttpInfo(galleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.galleriesControllerUpdate(galleriesControllerUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param galleriesControllerUpdateRequest
     */
    public galleriesControllerUpdate(galleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, _options?: Configuration): Observable<void> {
        return this.galleriesControllerUpdateWithHttpInfo(galleriesControllerUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param [comment]
     * @param [outletId]
     * @param [file]
     */
    public galleriesControllerUploadFileWithHttpInfo(comment?: string, outletId?: number, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.galleriesControllerUploadFile(comment, outletId, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesControllerUploadFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [comment]
     * @param [outletId]
     * @param [file]
     */
    public galleriesControllerUploadFile(comment?: string, outletId?: number, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.galleriesControllerUploadFileWithHttpInfo(comment, outletId, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { WeaponsApiRequestFactory, WeaponsApiResponseProcessor} from "../apis/WeaponsApi";
export class ObservableWeaponsApi {
    private requestFactory: WeaponsApiRequestFactory;
    private responseProcessor: WeaponsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WeaponsApiRequestFactory,
        responseProcessor?: WeaponsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WeaponsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WeaponsApiResponseProcessor();
    }

    /**
     * @param weaponsControllerCreateRequest
     */
    public weaponsControllerCreateWithHttpInfo(weaponsControllerCreateRequest: WeaponsControllerCreateRequest, _options?: Configuration): Observable<HttpInfo<Weapon>> {
        const requestContextPromise = this.requestFactory.weaponsControllerCreate(weaponsControllerCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.weaponsControllerCreateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param weaponsControllerCreateRequest
     */
    public weaponsControllerCreate(weaponsControllerCreateRequest: WeaponsControllerCreateRequest, _options?: Configuration): Observable<Weapon> {
        return this.weaponsControllerCreateWithHttpInfo(weaponsControllerCreateRequest, _options).pipe(map((apiResponse: HttpInfo<Weapon>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public weaponsControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.weaponsControllerDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.weaponsControllerDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public weaponsControllerDelete(id: string, _options?: Configuration): Observable<void> {
        return this.weaponsControllerDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public weaponsControllerGetWithHttpInfo(query: WeaponsControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Array<Weapon>>> {
        const requestContextPromise = this.requestFactory.weaponsControllerGet(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.weaponsControllerGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public weaponsControllerGet(query: WeaponsControllerGetQueryParameter, _options?: Configuration): Observable<Array<Weapon>> {
        return this.weaponsControllerGetWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Array<Weapon>>) => apiResponse.data));
    }

    /**
     * @param query
     */
    public weaponsControllerGetOneWithHttpInfo(query: WeaponsControllerGetQueryParameter, _options?: Configuration): Observable<HttpInfo<Weapon>> {
        const requestContextPromise = this.requestFactory.weaponsControllerGetOne(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.weaponsControllerGetOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param query
     */
    public weaponsControllerGetOne(query: WeaponsControllerGetQueryParameter, _options?: Configuration): Observable<Weapon> {
        return this.weaponsControllerGetOneWithHttpInfo(query, _options).pipe(map((apiResponse: HttpInfo<Weapon>) => apiResponse.data));
    }

    /**
     * @param weaponsControllerUpdateRequest
     */
    public weaponsControllerUpdateWithHttpInfo(weaponsControllerUpdateRequest: WeaponsControllerUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.weaponsControllerUpdate(weaponsControllerUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.weaponsControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param weaponsControllerUpdateRequest
     */
    public weaponsControllerUpdate(weaponsControllerUpdateRequest: WeaponsControllerUpdateRequest, _options?: Configuration): Observable<void> {
        return this.weaponsControllerUpdateWithHttpInfo(weaponsControllerUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

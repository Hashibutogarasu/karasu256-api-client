import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ArtifactSets } from '../models/ArtifactSets';
import { ArtifactSetsControllerGetRequest } from '../models/ArtifactSetsControllerGetRequest';
import { Artifacts } from '../models/Artifacts';
import { ArtifactsControllerGetRequest } from '../models/ArtifactsControllerGetRequest';
import { CharactersControllerGetRequest } from '../models/CharactersControllerGetRequest';
import { CountriesControllerGetRequest } from '../models/CountriesControllerGetRequest';
import { Country } from '../models/Country';
import { GICharacter } from '../models/GICharacter';
import { GalleriesControllerCreateRequest } from '../models/GalleriesControllerCreateRequest';
import { GalleriesControllerGetRequest } from '../models/GalleriesControllerGetRequest';
import { GalleriesControllerUpdateRequest } from '../models/GalleriesControllerUpdateRequest';
import { Gallery } from '../models/Gallery';
import { VersionsControllerGetRequest } from '../models/VersionsControllerGetRequest';
import { VersionsEntity } from '../models/VersionsEntity';
import { Weapon } from '../models/Weapon';
import { WeaponsControllerGetRequest } from '../models/WeaponsControllerGetRequest';

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
     * @param ArtifactSetsControllerGetRequest
     */
    public artifactSetsControllerGetWithHttpInfo(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Array<ArtifactSets>>> {
        const requestContextPromise = this.requestFactory.artifactSetsControllerGet(ArtifactSetsControllerGetRequest, _options);

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
     * @param ArtifactSetsControllerGetRequest
     */
    public artifactSetsControllerGet(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, _options?: Configuration): Observable<Array<ArtifactSets>> {
        return this.artifactSetsControllerGetWithHttpInfo(ArtifactSetsControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Array<ArtifactSets>>) => apiResponse.data));
    }

    /**
     */
    public artifactSetsControllerGetAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<ArtifactSets>>> {
        const requestContextPromise = this.requestFactory.artifactSetsControllerGetAll(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactSetsControllerGetAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public artifactSetsControllerGetAll(_options?: Configuration): Observable<Array<ArtifactSets>> {
        return this.artifactSetsControllerGetAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<ArtifactSets>>) => apiResponse.data));
    }

    /**
     * @param ArtifactSetsControllerGetRequest
     */
    public artifactSetsControllerGetOneWithHttpInfo(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, _options?: Configuration): Observable<HttpInfo<ArtifactSets>> {
        const requestContextPromise = this.requestFactory.artifactSetsControllerGetOne(ArtifactSetsControllerGetRequest, _options);

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
     * @param ArtifactSetsControllerGetRequest
     */
    public artifactSetsControllerGetOne(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, _options?: Configuration): Observable<ArtifactSets> {
        return this.artifactSetsControllerGetOneWithHttpInfo(ArtifactSetsControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<ArtifactSets>) => apiResponse.data));
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
     * @param ArtifactsControllerGetRequest
     */
    public artifactsControllerGetWithHttpInfo(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Array<Artifacts>>> {
        const requestContextPromise = this.requestFactory.artifactsControllerGet(ArtifactsControllerGetRequest, _options);

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
     * @param ArtifactsControllerGetRequest
     */
    public artifactsControllerGet(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, _options?: Configuration): Observable<Array<Artifacts>> {
        return this.artifactsControllerGetWithHttpInfo(ArtifactsControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Array<Artifacts>>) => apiResponse.data));
    }

    /**
     */
    public artifactsControllerGetAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Artifacts>>> {
        const requestContextPromise = this.requestFactory.artifactsControllerGetAll(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.artifactsControllerGetAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public artifactsControllerGetAll(_options?: Configuration): Observable<Array<Artifacts>> {
        return this.artifactsControllerGetAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Artifacts>>) => apiResponse.data));
    }

    /**
     * @param ArtifactsControllerGetRequest
     */
    public artifactsControllerGetOneWithHttpInfo(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Artifacts>> {
        const requestContextPromise = this.requestFactory.artifactsControllerGetOne(ArtifactsControllerGetRequest, _options);

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
     * @param ArtifactsControllerGetRequest
     */
    public artifactsControllerGetOne(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, _options?: Configuration): Observable<Artifacts> {
        return this.artifactsControllerGetOneWithHttpInfo(ArtifactsControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Artifacts>) => apiResponse.data));
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
     * @param CharactersControllerGetRequest
     */
    public charactersControllerGetWithHttpInfo(CharactersControllerGetRequest: CharactersControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Array<GICharacter>>> {
        const requestContextPromise = this.requestFactory.charactersControllerGet(CharactersControllerGetRequest, _options);

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
     * @param CharactersControllerGetRequest
     */
    public charactersControllerGet(CharactersControllerGetRequest: CharactersControllerGetRequest, _options?: Configuration): Observable<Array<GICharacter>> {
        return this.charactersControllerGetWithHttpInfo(CharactersControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Array<GICharacter>>) => apiResponse.data));
    }

    /**
     */
    public charactersControllerGetAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<GICharacter>>> {
        const requestContextPromise = this.requestFactory.charactersControllerGetAll(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.charactersControllerGetAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public charactersControllerGetAll(_options?: Configuration): Observable<Array<GICharacter>> {
        return this.charactersControllerGetAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<GICharacter>>) => apiResponse.data));
    }

    /**
     * @param CharactersControllerGetRequest
     */
    public charactersControllerGetOneWithHttpInfo(CharactersControllerGetRequest: CharactersControllerGetRequest, _options?: Configuration): Observable<HttpInfo<GICharacter>> {
        const requestContextPromise = this.requestFactory.charactersControllerGetOne(CharactersControllerGetRequest, _options);

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
     * @param CharactersControllerGetRequest
     */
    public charactersControllerGetOne(CharactersControllerGetRequest: CharactersControllerGetRequest, _options?: Configuration): Observable<GICharacter> {
        return this.charactersControllerGetOneWithHttpInfo(CharactersControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<GICharacter>) => apiResponse.data));
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
     * @param GalleriesControllerCreateRequest
     */
    public galleriesControllerCreateWithHttpInfo(GalleriesControllerCreateRequest: GalleriesControllerCreateRequest, _options?: Configuration): Observable<HttpInfo<Gallery>> {
        const requestContextPromise = this.requestFactory.galleriesControllerCreate(GalleriesControllerCreateRequest, _options);

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
     * @param GalleriesControllerCreateRequest
     */
    public galleriesControllerCreate(GalleriesControllerCreateRequest: GalleriesControllerCreateRequest, _options?: Configuration): Observable<Gallery> {
        return this.galleriesControllerCreateWithHttpInfo(GalleriesControllerCreateRequest, _options).pipe(map((apiResponse: HttpInfo<Gallery>) => apiResponse.data));
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
     * @param GalleriesControllerGetRequest
     */
    public galleriesControllerGetWithHttpInfo(GalleriesControllerGetRequest: GalleriesControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Array<Gallery>>> {
        const requestContextPromise = this.requestFactory.galleriesControllerGet(GalleriesControllerGetRequest, _options);

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
     * @param GalleriesControllerGetRequest
     */
    public galleriesControllerGet(GalleriesControllerGetRequest: GalleriesControllerGetRequest, _options?: Configuration): Observable<Array<Gallery>> {
        return this.galleriesControllerGetWithHttpInfo(GalleriesControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Array<Gallery>>) => apiResponse.data));
    }

    /**
     */
    public galleriesControllerGetAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Gallery>>> {
        const requestContextPromise = this.requestFactory.galleriesControllerGetAll(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.galleriesControllerGetAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public galleriesControllerGetAll(_options?: Configuration): Observable<Array<Gallery>> {
        return this.galleriesControllerGetAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Gallery>>) => apiResponse.data));
    }

    /**
     * @param GalleriesControllerGetRequest
     */
    public galleriesControllerGetOneWithHttpInfo(GalleriesControllerGetRequest: GalleriesControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Gallery>> {
        const requestContextPromise = this.requestFactory.galleriesControllerGetOne(GalleriesControllerGetRequest, _options);

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
     * @param GalleriesControllerGetRequest
     */
    public galleriesControllerGetOne(GalleriesControllerGetRequest: GalleriesControllerGetRequest, _options?: Configuration): Observable<Gallery> {
        return this.galleriesControllerGetOneWithHttpInfo(GalleriesControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Gallery>) => apiResponse.data));
    }

    /**
     * @param GalleriesControllerUpdateRequest
     */
    public galleriesControllerUpdateWithHttpInfo(GalleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.galleriesControllerUpdate(GalleriesControllerUpdateRequest, _options);

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
     * @param GalleriesControllerUpdateRequest
     */
    public galleriesControllerUpdate(GalleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, _options?: Configuration): Observable<void> {
        return this.galleriesControllerUpdateWithHttpInfo(GalleriesControllerUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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

import { RegionsApiRequestFactory, RegionsApiResponseProcessor} from "../apis/RegionsApi";
export class ObservableRegionsApi {
    private requestFactory: RegionsApiRequestFactory;
    private responseProcessor: RegionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionsApiRequestFactory,
        responseProcessor?: RegionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RegionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RegionsApiResponseProcessor();
    }

    /**
     * @param CountriesControllerGetRequest
     */
    public countriesControllerGetWithHttpInfo(CountriesControllerGetRequest: CountriesControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Array<Country>>> {
        const requestContextPromise = this.requestFactory.countriesControllerGet(CountriesControllerGetRequest, _options);

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
     * @param CountriesControllerGetRequest
     */
    public countriesControllerGet(CountriesControllerGetRequest: CountriesControllerGetRequest, _options?: Configuration): Observable<Array<Country>> {
        return this.countriesControllerGetWithHttpInfo(CountriesControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Array<Country>>) => apiResponse.data));
    }

    /**
     */
    public countriesControllerGetAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Country>>> {
        const requestContextPromise = this.requestFactory.countriesControllerGetAll(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.countriesControllerGetAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public countriesControllerGetAll(_options?: Configuration): Observable<Array<Country>> {
        return this.countriesControllerGetAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Country>>) => apiResponse.data));
    }

    /**
     * @param CountriesControllerGetRequest
     */
    public countriesControllerGetOneWithHttpInfo(CountriesControllerGetRequest: CountriesControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Country>> {
        const requestContextPromise = this.requestFactory.countriesControllerGetOne(CountriesControllerGetRequest, _options);

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
     * @param CountriesControllerGetRequest
     */
    public countriesControllerGetOne(CountriesControllerGetRequest: CountriesControllerGetRequest, _options?: Configuration): Observable<Country> {
        return this.countriesControllerGetOneWithHttpInfo(CountriesControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Country>) => apiResponse.data));
    }

}

import { VersionsApiRequestFactory, VersionsApiResponseProcessor} from "../apis/VersionsApi";
export class ObservableVersionsApi {
    private requestFactory: VersionsApiRequestFactory;
    private responseProcessor: VersionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: VersionsApiRequestFactory,
        responseProcessor?: VersionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new VersionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new VersionsApiResponseProcessor();
    }

    /**
     * @param VersionsControllerGetRequest
     */
    public versionsControllerGetWithHttpInfo(VersionsControllerGetRequest: VersionsControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Array<VersionsEntity>>> {
        const requestContextPromise = this.requestFactory.versionsControllerGet(VersionsControllerGetRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.versionsControllerGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param VersionsControllerGetRequest
     */
    public versionsControllerGet(VersionsControllerGetRequest: VersionsControllerGetRequest, _options?: Configuration): Observable<Array<VersionsEntity>> {
        return this.versionsControllerGetWithHttpInfo(VersionsControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Array<VersionsEntity>>) => apiResponse.data));
    }

    /**
     */
    public versionsControllerGetAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<VersionsEntity>>> {
        const requestContextPromise = this.requestFactory.versionsControllerGetAll(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.versionsControllerGetAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public versionsControllerGetAll(_options?: Configuration): Observable<Array<VersionsEntity>> {
        return this.versionsControllerGetAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<VersionsEntity>>) => apiResponse.data));
    }

    /**
     * @param VersionsControllerGetRequest
     */
    public versionsControllerGetOneWithHttpInfo(VersionsControllerGetRequest: VersionsControllerGetRequest, _options?: Configuration): Observable<HttpInfo<VersionsEntity>> {
        const requestContextPromise = this.requestFactory.versionsControllerGetOne(VersionsControllerGetRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.versionsControllerGetOneWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param VersionsControllerGetRequest
     */
    public versionsControllerGetOne(VersionsControllerGetRequest: VersionsControllerGetRequest, _options?: Configuration): Observable<VersionsEntity> {
        return this.versionsControllerGetOneWithHttpInfo(VersionsControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<VersionsEntity>) => apiResponse.data));
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
     * @param WeaponsControllerGetRequest
     */
    public weaponsControllerGetWithHttpInfo(WeaponsControllerGetRequest: WeaponsControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Array<Weapon>>> {
        const requestContextPromise = this.requestFactory.weaponsControllerGet(WeaponsControllerGetRequest, _options);

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
     * @param WeaponsControllerGetRequest
     */
    public weaponsControllerGet(WeaponsControllerGetRequest: WeaponsControllerGetRequest, _options?: Configuration): Observable<Array<Weapon>> {
        return this.weaponsControllerGetWithHttpInfo(WeaponsControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Array<Weapon>>) => apiResponse.data));
    }

    /**
     */
    public weaponsControllerGetAllWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Weapon>>> {
        const requestContextPromise = this.requestFactory.weaponsControllerGetAll(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.weaponsControllerGetAllWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public weaponsControllerGetAll(_options?: Configuration): Observable<Array<Weapon>> {
        return this.weaponsControllerGetAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Weapon>>) => apiResponse.data));
    }

    /**
     * @param WeaponsControllerGetRequest
     */
    public weaponsControllerGetOneWithHttpInfo(WeaponsControllerGetRequest: WeaponsControllerGetRequest, _options?: Configuration): Observable<HttpInfo<Weapon>> {
        const requestContextPromise = this.requestFactory.weaponsControllerGetOne(WeaponsControllerGetRequest, _options);

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
     * @param WeaponsControllerGetRequest
     */
    public weaponsControllerGetOne(WeaponsControllerGetRequest: WeaponsControllerGetRequest, _options?: Configuration): Observable<Weapon> {
        return this.weaponsControllerGetOneWithHttpInfo(WeaponsControllerGetRequest, _options).pipe(map((apiResponse: HttpInfo<Weapon>) => apiResponse.data));
    }

}

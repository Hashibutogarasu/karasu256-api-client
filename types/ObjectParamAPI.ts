import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableArtifactSetsApi } from "./ObservableAPI";
import { ArtifactSetsApiRequestFactory, ArtifactSetsApiResponseProcessor} from "../apis/ArtifactSetsApi";

export interface ArtifactSetsApiArtifactSetsControllerCreateRequest {
    /**
     * 
     * @type ArtifactsControllerCreateRequest
     * @memberof ArtifactSetsApiartifactSetsControllerCreate
     */
    artifactsControllerCreateRequest: ArtifactsControllerCreateRequest
}

export interface ArtifactSetsApiArtifactSetsControllerDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArtifactSetsApiartifactSetsControllerDelete
     */
    id: string
}

export interface ArtifactSetsApiArtifactSetsControllerGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type ArtifactSetsControllerGetQueryParameter
     * @memberof ArtifactSetsApiartifactSetsControllerGet
     */
    query: ArtifactSetsControllerGetQueryParameter
}

export interface ArtifactSetsApiArtifactSetsControllerGetOneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type ArtifactSetsControllerGetQueryParameter
     * @memberof ArtifactSetsApiartifactSetsControllerGetOne
     */
    query: ArtifactSetsControllerGetQueryParameter
}

export interface ArtifactSetsApiArtifactSetsControllerUpdateRequest {
    /**
     * 
     * @type ArtifactsControllerUpdateRequest
     * @memberof ArtifactSetsApiartifactSetsControllerUpdate
     */
    artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest
}

export class ObjectArtifactSetsApi {
    private api: ObservableArtifactSetsApi

    public constructor(configuration: Configuration, requestFactory?: ArtifactSetsApiRequestFactory, responseProcessor?: ArtifactSetsApiResponseProcessor) {
        this.api = new ObservableArtifactSetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerCreateWithHttpInfo(param: ArtifactSetsApiArtifactSetsControllerCreateRequest, options?: Configuration): Promise<HttpInfo<ArtifactSets>> {
        return this.api.artifactSetsControllerCreateWithHttpInfo(param.artifactsControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerCreate(param: ArtifactSetsApiArtifactSetsControllerCreateRequest, options?: Configuration): Promise<ArtifactSets> {
        return this.api.artifactSetsControllerCreate(param.artifactsControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerDeleteWithHttpInfo(param: ArtifactSetsApiArtifactSetsControllerDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.artifactSetsControllerDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerDelete(param: ArtifactSetsApiArtifactSetsControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.artifactSetsControllerDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGetWithHttpInfo(param: ArtifactSetsApiArtifactSetsControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<ArtifactSets>>> {
        return this.api.artifactSetsControllerGetWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGet(param: ArtifactSetsApiArtifactSetsControllerGetRequest, options?: Configuration): Promise<Array<ArtifactSets>> {
        return this.api.artifactSetsControllerGet(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGetOneWithHttpInfo(param: ArtifactSetsApiArtifactSetsControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<ArtifactSets>> {
        return this.api.artifactSetsControllerGetOneWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGetOne(param: ArtifactSetsApiArtifactSetsControllerGetOneRequest, options?: Configuration): Promise<ArtifactSets> {
        return this.api.artifactSetsControllerGetOne(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerUpdateWithHttpInfo(param: ArtifactSetsApiArtifactSetsControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.artifactSetsControllerUpdateWithHttpInfo(param.artifactsControllerUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerUpdate(param: ArtifactSetsApiArtifactSetsControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.artifactSetsControllerUpdate(param.artifactsControllerUpdateRequest,  options).toPromise();
    }

}

import { ObservableArtifactsApi } from "./ObservableAPI";
import { ArtifactsApiRequestFactory, ArtifactsApiResponseProcessor} from "../apis/ArtifactsApi";

export interface ArtifactsApiArtifactsControllerCreateRequest {
    /**
     * 
     * @type ArtifactsControllerCreateRequest
     * @memberof ArtifactsApiartifactsControllerCreate
     */
    artifactsControllerCreateRequest: ArtifactsControllerCreateRequest
}

export interface ArtifactsApiArtifactsControllerDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArtifactsApiartifactsControllerDelete
     */
    id: string
}

export interface ArtifactsApiArtifactsControllerGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type ArtifactsControllerGetQueryParameter
     * @memberof ArtifactsApiartifactsControllerGet
     */
    query: ArtifactsControllerGetQueryParameter
}

export interface ArtifactsApiArtifactsControllerGetOneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type ArtifactsControllerGetQueryParameter
     * @memberof ArtifactsApiartifactsControllerGetOne
     */
    query: ArtifactsControllerGetQueryParameter
}

export interface ArtifactsApiArtifactsControllerUpdateRequest {
    /**
     * 
     * @type ArtifactsControllerUpdateRequest
     * @memberof ArtifactsApiartifactsControllerUpdate
     */
    artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest
}

export class ObjectArtifactsApi {
    private api: ObservableArtifactsApi

    public constructor(configuration: Configuration, requestFactory?: ArtifactsApiRequestFactory, responseProcessor?: ArtifactsApiResponseProcessor) {
        this.api = new ObservableArtifactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public artifactsControllerCreateWithHttpInfo(param: ArtifactsApiArtifactsControllerCreateRequest, options?: Configuration): Promise<HttpInfo<Artifacts>> {
        return this.api.artifactsControllerCreateWithHttpInfo(param.artifactsControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerCreate(param: ArtifactsApiArtifactsControllerCreateRequest, options?: Configuration): Promise<Artifacts> {
        return this.api.artifactsControllerCreate(param.artifactsControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerDeleteWithHttpInfo(param: ArtifactsApiArtifactsControllerDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.artifactsControllerDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerDelete(param: ArtifactsApiArtifactsControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.artifactsControllerDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGetWithHttpInfo(param: ArtifactsApiArtifactsControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<Artifacts>>> {
        return this.api.artifactsControllerGetWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGet(param: ArtifactsApiArtifactsControllerGetRequest, options?: Configuration): Promise<Array<Artifacts>> {
        return this.api.artifactsControllerGet(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGetOneWithHttpInfo(param: ArtifactsApiArtifactsControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<Artifacts>> {
        return this.api.artifactsControllerGetOneWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGetOne(param: ArtifactsApiArtifactsControllerGetOneRequest, options?: Configuration): Promise<Artifacts> {
        return this.api.artifactsControllerGetOne(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerUpdateWithHttpInfo(param: ArtifactsApiArtifactsControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.artifactsControllerUpdateWithHttpInfo(param.artifactsControllerUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerUpdate(param: ArtifactsApiArtifactsControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.artifactsControllerUpdate(param.artifactsControllerUpdateRequest,  options).toPromise();
    }

}

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthControllerMeRequest {
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authControllerMeWithHttpInfo(param: AuthApiAuthControllerMeRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authControllerMeWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerMe(param: AuthApiAuthControllerMeRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authControllerMe( options).toPromise();
    }

}

import { ObservableCharactersApi } from "./ObservableAPI";
import { CharactersApiRequestFactory, CharactersApiResponseProcessor} from "../apis/CharactersApi";

export interface CharactersApiCharactersControllerCreateRequest {
    /**
     * 
     * @type CharactersControllerCreateRequest
     * @memberof CharactersApicharactersControllerCreate
     */
    charactersControllerCreateRequest: CharactersControllerCreateRequest
}

export interface CharactersApiCharactersControllerDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CharactersApicharactersControllerDelete
     */
    id: string
}

export interface CharactersApiCharactersControllerGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type CharactersControllerGetQueryParameter
     * @memberof CharactersApicharactersControllerGet
     */
    query: CharactersControllerGetQueryParameter
}

export interface CharactersApiCharactersControllerGetOneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type CharactersControllerGetQueryParameter
     * @memberof CharactersApicharactersControllerGetOne
     */
    query: CharactersControllerGetQueryParameter
}

export interface CharactersApiCharactersControllerImportRequest {
    /**
     * 
     * @type CharactersControllerImportRequest
     * @memberof CharactersApicharactersControllerImport
     */
    charactersControllerImportRequest: CharactersControllerImportRequest
}

export interface CharactersApiCharactersControllerImportFromHoyoLabRequest {
    /**
     * 
     * Defaults to: undefined
     * @type CharactersControllerImportFromHoyoLabQueryParameter
     * @memberof CharactersApicharactersControllerImportFromHoyoLab
     */
    query: CharactersControllerImportFromHoyoLabQueryParameter
}

export interface CharactersApiCharactersControllerUpdateRequest {
    /**
     * 
     * @type CharactersControllerUpdateRequest
     * @memberof CharactersApicharactersControllerUpdate
     */
    charactersControllerUpdateRequest: CharactersControllerUpdateRequest
}

export class ObjectCharactersApi {
    private api: ObservableCharactersApi

    public constructor(configuration: Configuration, requestFactory?: CharactersApiRequestFactory, responseProcessor?: CharactersApiResponseProcessor) {
        this.api = new ObservableCharactersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public charactersControllerCreateWithHttpInfo(param: CharactersApiCharactersControllerCreateRequest, options?: Configuration): Promise<HttpInfo<Character>> {
        return this.api.charactersControllerCreateWithHttpInfo(param.charactersControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerCreate(param: CharactersApiCharactersControllerCreateRequest, options?: Configuration): Promise<Character> {
        return this.api.charactersControllerCreate(param.charactersControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerDeleteWithHttpInfo(param: CharactersApiCharactersControllerDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.charactersControllerDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerDelete(param: CharactersApiCharactersControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.charactersControllerDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerGetWithHttpInfo(param: CharactersApiCharactersControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<Character>>> {
        return this.api.charactersControllerGetWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerGet(param: CharactersApiCharactersControllerGetRequest, options?: Configuration): Promise<Array<Character>> {
        return this.api.charactersControllerGet(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerGetOneWithHttpInfo(param: CharactersApiCharactersControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<Character>> {
        return this.api.charactersControllerGetOneWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerGetOne(param: CharactersApiCharactersControllerGetOneRequest, options?: Configuration): Promise<Character> {
        return this.api.charactersControllerGetOne(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerImportWithHttpInfo(param: CharactersApiCharactersControllerImportRequest, options?: Configuration): Promise<HttpInfo<Character>> {
        return this.api.charactersControllerImportWithHttpInfo(param.charactersControllerImportRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerImport(param: CharactersApiCharactersControllerImportRequest, options?: Configuration): Promise<Character> {
        return this.api.charactersControllerImport(param.charactersControllerImportRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerImportFromHoyoLabWithHttpInfo(param: CharactersApiCharactersControllerImportFromHoyoLabRequest, options?: Configuration): Promise<HttpInfo<Character>> {
        return this.api.charactersControllerImportFromHoyoLabWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerImportFromHoyoLab(param: CharactersApiCharactersControllerImportFromHoyoLabRequest, options?: Configuration): Promise<Character> {
        return this.api.charactersControllerImportFromHoyoLab(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerUpdateWithHttpInfo(param: CharactersApiCharactersControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.charactersControllerUpdateWithHttpInfo(param.charactersControllerUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerUpdate(param: CharactersApiCharactersControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.charactersControllerUpdate(param.charactersControllerUpdateRequest,  options).toPromise();
    }

}

import { ObservableCountriesApi } from "./ObservableAPI";
import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";

export interface CountriesApiCountriesControllerCreateRequest {
    /**
     * 
     * @type CountriesControllerCreateRequest
     * @memberof CountriesApicountriesControllerCreate
     */
    countriesControllerCreateRequest: CountriesControllerCreateRequest
}

export interface CountriesApiCountriesControllerDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CountriesApicountriesControllerDelete
     */
    id: string
}

export interface CountriesApiCountriesControllerGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type CountriesControllerGetQueryParameter
     * @memberof CountriesApicountriesControllerGet
     */
    query: CountriesControllerGetQueryParameter
}

export interface CountriesApiCountriesControllerGetOneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type CountriesControllerGetQueryParameter
     * @memberof CountriesApicountriesControllerGetOne
     */
    query: CountriesControllerGetQueryParameter
}

export interface CountriesApiCountriesControllerUpdateRequest {
    /**
     * 
     * @type CountriesControllerUpdateRequest
     * @memberof CountriesApicountriesControllerUpdate
     */
    countriesControllerUpdateRequest: CountriesControllerUpdateRequest
}

export class ObjectCountriesApi {
    private api: ObservableCountriesApi

    public constructor(configuration: Configuration, requestFactory?: CountriesApiRequestFactory, responseProcessor?: CountriesApiResponseProcessor) {
        this.api = new ObservableCountriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public countriesControllerCreateWithHttpInfo(param: CountriesApiCountriesControllerCreateRequest, options?: Configuration): Promise<HttpInfo<Country>> {
        return this.api.countriesControllerCreateWithHttpInfo(param.countriesControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerCreate(param: CountriesApiCountriesControllerCreateRequest, options?: Configuration): Promise<Country> {
        return this.api.countriesControllerCreate(param.countriesControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerDeleteWithHttpInfo(param: CountriesApiCountriesControllerDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.countriesControllerDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerDelete(param: CountriesApiCountriesControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.countriesControllerDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerGetWithHttpInfo(param: CountriesApiCountriesControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<Country>>> {
        return this.api.countriesControllerGetWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerGet(param: CountriesApiCountriesControllerGetRequest, options?: Configuration): Promise<Array<Country>> {
        return this.api.countriesControllerGet(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerGetOneWithHttpInfo(param: CountriesApiCountriesControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<Country>> {
        return this.api.countriesControllerGetOneWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerGetOne(param: CountriesApiCountriesControllerGetOneRequest, options?: Configuration): Promise<Country> {
        return this.api.countriesControllerGetOne(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerUpdateWithHttpInfo(param: CountriesApiCountriesControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.countriesControllerUpdateWithHttpInfo(param.countriesControllerUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerUpdate(param: CountriesApiCountriesControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.countriesControllerUpdate(param.countriesControllerUpdateRequest,  options).toPromise();
    }

}

import { ObservableGalleriesApi } from "./ObservableAPI";
import { GalleriesApiRequestFactory, GalleriesApiResponseProcessor} from "../apis/GalleriesApi";

export interface GalleriesApiGalleriesControllerCreateRequest {
    /**
     * 
     * @type GalleriesControllerCreateRequest
     * @memberof GalleriesApigalleriesControllerCreate
     */
    galleriesControllerCreateRequest: GalleriesControllerCreateRequest
}

export interface GalleriesApiGalleriesControllerDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GalleriesApigalleriesControllerDelete
     */
    id: string
}

export interface GalleriesApiGalleriesControllerGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type ArtifactSetsControllerGetQueryParameter
     * @memberof GalleriesApigalleriesControllerGet
     */
    query: ArtifactSetsControllerGetQueryParameter
}

export interface GalleriesApiGalleriesControllerGetOneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type ArtifactSetsControllerGetQueryParameter
     * @memberof GalleriesApigalleriesControllerGetOne
     */
    query: ArtifactSetsControllerGetQueryParameter
}

export interface GalleriesApiGalleriesControllerUpdateRequest {
    /**
     * 
     * @type GalleriesControllerUpdateRequest
     * @memberof GalleriesApigalleriesControllerUpdate
     */
    galleriesControllerUpdateRequest: GalleriesControllerUpdateRequest
}

export interface GalleriesApiGalleriesControllerUploadFileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof GalleriesApigalleriesControllerUploadFile
     */
    comment?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof GalleriesApigalleriesControllerUploadFile
     */
    outletId?: number
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof GalleriesApigalleriesControllerUploadFile
     */
    file?: HttpFile
}

export class ObjectGalleriesApi {
    private api: ObservableGalleriesApi

    public constructor(configuration: Configuration, requestFactory?: GalleriesApiRequestFactory, responseProcessor?: GalleriesApiResponseProcessor) {
        this.api = new ObservableGalleriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public galleriesControllerCreateWithHttpInfo(param: GalleriesApiGalleriesControllerCreateRequest, options?: Configuration): Promise<HttpInfo<Gallery>> {
        return this.api.galleriesControllerCreateWithHttpInfo(param.galleriesControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerCreate(param: GalleriesApiGalleriesControllerCreateRequest, options?: Configuration): Promise<Gallery> {
        return this.api.galleriesControllerCreate(param.galleriesControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerDeleteWithHttpInfo(param: GalleriesApiGalleriesControllerDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.galleriesControllerDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerDelete(param: GalleriesApiGalleriesControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.galleriesControllerDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerGetWithHttpInfo(param: GalleriesApiGalleriesControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<Gallery>>> {
        return this.api.galleriesControllerGetWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerGet(param: GalleriesApiGalleriesControllerGetRequest, options?: Configuration): Promise<Array<Gallery>> {
        return this.api.galleriesControllerGet(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerGetOneWithHttpInfo(param: GalleriesApiGalleriesControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<Gallery>> {
        return this.api.galleriesControllerGetOneWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerGetOne(param: GalleriesApiGalleriesControllerGetOneRequest, options?: Configuration): Promise<Gallery> {
        return this.api.galleriesControllerGetOne(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerUpdateWithHttpInfo(param: GalleriesApiGalleriesControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.galleriesControllerUpdateWithHttpInfo(param.galleriesControllerUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerUpdate(param: GalleriesApiGalleriesControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.galleriesControllerUpdate(param.galleriesControllerUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerUploadFileWithHttpInfo(param: GalleriesApiGalleriesControllerUploadFileRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.galleriesControllerUploadFileWithHttpInfo(param.comment, param.outletId, param.file,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerUploadFile(param: GalleriesApiGalleriesControllerUploadFileRequest = {}, options?: Configuration): Promise<void> {
        return this.api.galleriesControllerUploadFile(param.comment, param.outletId, param.file,  options).toPromise();
    }

}

import { ObservableWeaponsApi } from "./ObservableAPI";
import { WeaponsApiRequestFactory, WeaponsApiResponseProcessor} from "../apis/WeaponsApi";

export interface WeaponsApiWeaponsControllerCreateRequest {
    /**
     * 
     * @type WeaponsControllerCreateRequest
     * @memberof WeaponsApiweaponsControllerCreate
     */
    weaponsControllerCreateRequest: WeaponsControllerCreateRequest
}

export interface WeaponsApiWeaponsControllerDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof WeaponsApiweaponsControllerDelete
     */
    id: string
}

export interface WeaponsApiWeaponsControllerGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type WeaponsControllerGetQueryParameter
     * @memberof WeaponsApiweaponsControllerGet
     */
    query: WeaponsControllerGetQueryParameter
}

export interface WeaponsApiWeaponsControllerGetOneRequest {
    /**
     * 
     * Defaults to: undefined
     * @type WeaponsControllerGetQueryParameter
     * @memberof WeaponsApiweaponsControllerGetOne
     */
    query: WeaponsControllerGetQueryParameter
}

export interface WeaponsApiWeaponsControllerUpdateRequest {
    /**
     * 
     * @type WeaponsControllerUpdateRequest
     * @memberof WeaponsApiweaponsControllerUpdate
     */
    weaponsControllerUpdateRequest: WeaponsControllerUpdateRequest
}

export class ObjectWeaponsApi {
    private api: ObservableWeaponsApi

    public constructor(configuration: Configuration, requestFactory?: WeaponsApiRequestFactory, responseProcessor?: WeaponsApiResponseProcessor) {
        this.api = new ObservableWeaponsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public weaponsControllerCreateWithHttpInfo(param: WeaponsApiWeaponsControllerCreateRequest, options?: Configuration): Promise<HttpInfo<Weapon>> {
        return this.api.weaponsControllerCreateWithHttpInfo(param.weaponsControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerCreate(param: WeaponsApiWeaponsControllerCreateRequest, options?: Configuration): Promise<Weapon> {
        return this.api.weaponsControllerCreate(param.weaponsControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerDeleteWithHttpInfo(param: WeaponsApiWeaponsControllerDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.weaponsControllerDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerDelete(param: WeaponsApiWeaponsControllerDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.weaponsControllerDelete(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGetWithHttpInfo(param: WeaponsApiWeaponsControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<Weapon>>> {
        return this.api.weaponsControllerGetWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGet(param: WeaponsApiWeaponsControllerGetRequest, options?: Configuration): Promise<Array<Weapon>> {
        return this.api.weaponsControllerGet(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGetOneWithHttpInfo(param: WeaponsApiWeaponsControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<Weapon>> {
        return this.api.weaponsControllerGetOneWithHttpInfo(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGetOne(param: WeaponsApiWeaponsControllerGetOneRequest, options?: Configuration): Promise<Weapon> {
        return this.api.weaponsControllerGetOne(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerUpdateWithHttpInfo(param: WeaponsApiWeaponsControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.weaponsControllerUpdateWithHttpInfo(param.weaponsControllerUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerUpdate(param: WeaponsApiWeaponsControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.weaponsControllerUpdate(param.weaponsControllerUpdateRequest,  options).toPromise();
    }

}

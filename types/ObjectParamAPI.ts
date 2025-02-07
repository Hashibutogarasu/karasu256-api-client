import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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

import { ObservableArtifactSetsApi } from "./ObservableAPI";
import { ArtifactSetsApiRequestFactory, ArtifactSetsApiResponseProcessor} from "../apis/ArtifactSetsApi";

export interface ArtifactSetsApiArtifactSetsControllerGetRequest {
    /**
     * 
     * @type ArtifactSetsControllerGetRequest
     * @memberof ArtifactSetsApiartifactSetsControllerGet
     */
    ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest
}

export interface ArtifactSetsApiArtifactSetsControllerGetAllRequest {
}

export interface ArtifactSetsApiArtifactSetsControllerGetOneRequest {
    /**
     * 
     * @type ArtifactSetsControllerGetRequest
     * @memberof ArtifactSetsApiartifactSetsControllerGetOne
     */
    ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest
}

export class ObjectArtifactSetsApi {
    private api: ObservableArtifactSetsApi

    public constructor(configuration: Configuration, requestFactory?: ArtifactSetsApiRequestFactory, responseProcessor?: ArtifactSetsApiResponseProcessor) {
        this.api = new ObservableArtifactSetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGetWithHttpInfo(param: ArtifactSetsApiArtifactSetsControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<ArtifactSets>>> {
        return this.api.artifactSetsControllerGetWithHttpInfo(param.ArtifactSetsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGet(param: ArtifactSetsApiArtifactSetsControllerGetRequest, options?: Configuration): Promise<Array<ArtifactSets>> {
        return this.api.artifactSetsControllerGet(param.ArtifactSetsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGetAllWithHttpInfo(param: ArtifactSetsApiArtifactSetsControllerGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ArtifactSets>>> {
        return this.api.artifactSetsControllerGetAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGetAll(param: ArtifactSetsApiArtifactSetsControllerGetAllRequest = {}, options?: Configuration): Promise<Array<ArtifactSets>> {
        return this.api.artifactSetsControllerGetAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGetOneWithHttpInfo(param: ArtifactSetsApiArtifactSetsControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<ArtifactSets>> {
        return this.api.artifactSetsControllerGetOneWithHttpInfo(param.ArtifactSetsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactSetsControllerGetOne(param: ArtifactSetsApiArtifactSetsControllerGetOneRequest, options?: Configuration): Promise<ArtifactSets> {
        return this.api.artifactSetsControllerGetOne(param.ArtifactSetsControllerGetRequest,  options).toPromise();
    }

}

import { ObservableArtifactsApi } from "./ObservableAPI";
import { ArtifactsApiRequestFactory, ArtifactsApiResponseProcessor} from "../apis/ArtifactsApi";

export interface ArtifactsApiArtifactsControllerGetRequest {
    /**
     * 
     * @type ArtifactsControllerGetRequest
     * @memberof ArtifactsApiartifactsControllerGet
     */
    ArtifactsControllerGetRequest: ArtifactsControllerGetRequest
}

export interface ArtifactsApiArtifactsControllerGetAllRequest {
}

export interface ArtifactsApiArtifactsControllerGetOneRequest {
    /**
     * 
     * @type ArtifactsControllerGetRequest
     * @memberof ArtifactsApiartifactsControllerGetOne
     */
    ArtifactsControllerGetRequest: ArtifactsControllerGetRequest
}

export class ObjectArtifactsApi {
    private api: ObservableArtifactsApi

    public constructor(configuration: Configuration, requestFactory?: ArtifactsApiRequestFactory, responseProcessor?: ArtifactsApiResponseProcessor) {
        this.api = new ObservableArtifactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGetWithHttpInfo(param: ArtifactsApiArtifactsControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<Artifacts>>> {
        return this.api.artifactsControllerGetWithHttpInfo(param.ArtifactsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGet(param: ArtifactsApiArtifactsControllerGetRequest, options?: Configuration): Promise<Array<Artifacts>> {
        return this.api.artifactsControllerGet(param.ArtifactsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGetAllWithHttpInfo(param: ArtifactsApiArtifactsControllerGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Artifacts>>> {
        return this.api.artifactsControllerGetAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGetAll(param: ArtifactsApiArtifactsControllerGetAllRequest = {}, options?: Configuration): Promise<Array<Artifacts>> {
        return this.api.artifactsControllerGetAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGetOneWithHttpInfo(param: ArtifactsApiArtifactsControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<Artifacts>> {
        return this.api.artifactsControllerGetOneWithHttpInfo(param.ArtifactsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public artifactsControllerGetOne(param: ArtifactsApiArtifactsControllerGetOneRequest, options?: Configuration): Promise<Artifacts> {
        return this.api.artifactsControllerGetOne(param.ArtifactsControllerGetRequest,  options).toPromise();
    }

}

import { ObservableCharactersApi } from "./ObservableAPI";
import { CharactersApiRequestFactory, CharactersApiResponseProcessor} from "../apis/CharactersApi";

export interface CharactersApiCharactersControllerGetRequest {
    /**
     * 
     * @type CharactersControllerGetRequest
     * @memberof CharactersApicharactersControllerGet
     */
    CharactersControllerGetRequest: CharactersControllerGetRequest
}

export interface CharactersApiCharactersControllerGetAllRequest {
}

export interface CharactersApiCharactersControllerGetOneRequest {
    /**
     * 
     * @type CharactersControllerGetRequest
     * @memberof CharactersApicharactersControllerGetOne
     */
    CharactersControllerGetRequest: CharactersControllerGetRequest
}

export class ObjectCharactersApi {
    private api: ObservableCharactersApi

    public constructor(configuration: Configuration, requestFactory?: CharactersApiRequestFactory, responseProcessor?: CharactersApiResponseProcessor) {
        this.api = new ObservableCharactersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public charactersControllerGetWithHttpInfo(param: CharactersApiCharactersControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<GICharacter>>> {
        return this.api.charactersControllerGetWithHttpInfo(param.CharactersControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerGet(param: CharactersApiCharactersControllerGetRequest, options?: Configuration): Promise<Array<GICharacter>> {
        return this.api.charactersControllerGet(param.CharactersControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerGetAllWithHttpInfo(param: CharactersApiCharactersControllerGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<GICharacter>>> {
        return this.api.charactersControllerGetAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerGetAll(param: CharactersApiCharactersControllerGetAllRequest = {}, options?: Configuration): Promise<Array<GICharacter>> {
        return this.api.charactersControllerGetAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerGetOneWithHttpInfo(param: CharactersApiCharactersControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<GICharacter>> {
        return this.api.charactersControllerGetOneWithHttpInfo(param.CharactersControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public charactersControllerGetOne(param: CharactersApiCharactersControllerGetOneRequest, options?: Configuration): Promise<GICharacter> {
        return this.api.charactersControllerGetOne(param.CharactersControllerGetRequest,  options).toPromise();
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
    GalleriesControllerCreateRequest: GalleriesControllerCreateRequest
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
     * @type GalleriesControllerGetRequest
     * @memberof GalleriesApigalleriesControllerGet
     */
    GalleriesControllerGetRequest: GalleriesControllerGetRequest
}

export interface GalleriesApiGalleriesControllerGetAllRequest {
}

export interface GalleriesApiGalleriesControllerGetOneRequest {
    /**
     * 
     * @type GalleriesControllerGetRequest
     * @memberof GalleriesApigalleriesControllerGetOne
     */
    GalleriesControllerGetRequest: GalleriesControllerGetRequest
}

export interface GalleriesApiGalleriesControllerUpdateRequest {
    /**
     * 
     * @type GalleriesControllerUpdateRequest
     * @memberof GalleriesApigalleriesControllerUpdate
     */
    GalleriesControllerUpdateRequest: GalleriesControllerUpdateRequest
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
        return this.api.galleriesControllerCreateWithHttpInfo(param.GalleriesControllerCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerCreate(param: GalleriesApiGalleriesControllerCreateRequest, options?: Configuration): Promise<Gallery> {
        return this.api.galleriesControllerCreate(param.GalleriesControllerCreateRequest,  options).toPromise();
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
        return this.api.galleriesControllerGetWithHttpInfo(param.GalleriesControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerGet(param: GalleriesApiGalleriesControllerGetRequest, options?: Configuration): Promise<Array<Gallery>> {
        return this.api.galleriesControllerGet(param.GalleriesControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerGetAllWithHttpInfo(param: GalleriesApiGalleriesControllerGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Gallery>>> {
        return this.api.galleriesControllerGetAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerGetAll(param: GalleriesApiGalleriesControllerGetAllRequest = {}, options?: Configuration): Promise<Array<Gallery>> {
        return this.api.galleriesControllerGetAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerGetOneWithHttpInfo(param: GalleriesApiGalleriesControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<Gallery>> {
        return this.api.galleriesControllerGetOneWithHttpInfo(param.GalleriesControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerGetOne(param: GalleriesApiGalleriesControllerGetOneRequest, options?: Configuration): Promise<Gallery> {
        return this.api.galleriesControllerGetOne(param.GalleriesControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerUpdateWithHttpInfo(param: GalleriesApiGalleriesControllerUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.galleriesControllerUpdateWithHttpInfo(param.GalleriesControllerUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public galleriesControllerUpdate(param: GalleriesApiGalleriesControllerUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.galleriesControllerUpdate(param.GalleriesControllerUpdateRequest,  options).toPromise();
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

import { ObservableRegionsApi } from "./ObservableAPI";
import { RegionsApiRequestFactory, RegionsApiResponseProcessor} from "../apis/RegionsApi";

export interface RegionsApiCountriesControllerGetRequest {
    /**
     * 
     * @type CountriesControllerGetRequest
     * @memberof RegionsApicountriesControllerGet
     */
    CountriesControllerGetRequest: CountriesControllerGetRequest
}

export interface RegionsApiCountriesControllerGetAllRequest {
}

export interface RegionsApiCountriesControllerGetOneRequest {
    /**
     * 
     * @type CountriesControllerGetRequest
     * @memberof RegionsApicountriesControllerGetOne
     */
    CountriesControllerGetRequest: CountriesControllerGetRequest
}

export class ObjectRegionsApi {
    private api: ObservableRegionsApi

    public constructor(configuration: Configuration, requestFactory?: RegionsApiRequestFactory, responseProcessor?: RegionsApiResponseProcessor) {
        this.api = new ObservableRegionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public countriesControllerGetWithHttpInfo(param: RegionsApiCountriesControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<Country>>> {
        return this.api.countriesControllerGetWithHttpInfo(param.CountriesControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerGet(param: RegionsApiCountriesControllerGetRequest, options?: Configuration): Promise<Array<Country>> {
        return this.api.countriesControllerGet(param.CountriesControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerGetAllWithHttpInfo(param: RegionsApiCountriesControllerGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Country>>> {
        return this.api.countriesControllerGetAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerGetAll(param: RegionsApiCountriesControllerGetAllRequest = {}, options?: Configuration): Promise<Array<Country>> {
        return this.api.countriesControllerGetAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerGetOneWithHttpInfo(param: RegionsApiCountriesControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<Country>> {
        return this.api.countriesControllerGetOneWithHttpInfo(param.CountriesControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public countriesControllerGetOne(param: RegionsApiCountriesControllerGetOneRequest, options?: Configuration): Promise<Country> {
        return this.api.countriesControllerGetOne(param.CountriesControllerGetRequest,  options).toPromise();
    }

}

import { ObservableVersionsApi } from "./ObservableAPI";
import { VersionsApiRequestFactory, VersionsApiResponseProcessor} from "../apis/VersionsApi";

export interface VersionsApiVersionsControllerGetRequest {
    /**
     * 
     * @type VersionsControllerGetRequest
     * @memberof VersionsApiversionsControllerGet
     */
    VersionsControllerGetRequest: VersionsControllerGetRequest
}

export interface VersionsApiVersionsControllerGetAllRequest {
}

export interface VersionsApiVersionsControllerGetOneRequest {
    /**
     * 
     * @type VersionsControllerGetRequest
     * @memberof VersionsApiversionsControllerGetOne
     */
    VersionsControllerGetRequest: VersionsControllerGetRequest
}

export class ObjectVersionsApi {
    private api: ObservableVersionsApi

    public constructor(configuration: Configuration, requestFactory?: VersionsApiRequestFactory, responseProcessor?: VersionsApiResponseProcessor) {
        this.api = new ObservableVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public versionsControllerGetWithHttpInfo(param: VersionsApiVersionsControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<VersionsEntity>>> {
        return this.api.versionsControllerGetWithHttpInfo(param.VersionsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionsControllerGet(param: VersionsApiVersionsControllerGetRequest, options?: Configuration): Promise<Array<VersionsEntity>> {
        return this.api.versionsControllerGet(param.VersionsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionsControllerGetAllWithHttpInfo(param: VersionsApiVersionsControllerGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<VersionsEntity>>> {
        return this.api.versionsControllerGetAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionsControllerGetAll(param: VersionsApiVersionsControllerGetAllRequest = {}, options?: Configuration): Promise<Array<VersionsEntity>> {
        return this.api.versionsControllerGetAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionsControllerGetOneWithHttpInfo(param: VersionsApiVersionsControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<VersionsEntity>> {
        return this.api.versionsControllerGetOneWithHttpInfo(param.VersionsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public versionsControllerGetOne(param: VersionsApiVersionsControllerGetOneRequest, options?: Configuration): Promise<VersionsEntity> {
        return this.api.versionsControllerGetOne(param.VersionsControllerGetRequest,  options).toPromise();
    }

}

import { ObservableWeaponsApi } from "./ObservableAPI";
import { WeaponsApiRequestFactory, WeaponsApiResponseProcessor} from "../apis/WeaponsApi";

export interface WeaponsApiWeaponsControllerGetRequest {
    /**
     * 
     * @type WeaponsControllerGetRequest
     * @memberof WeaponsApiweaponsControllerGet
     */
    WeaponsControllerGetRequest: WeaponsControllerGetRequest
}

export interface WeaponsApiWeaponsControllerGetAllRequest {
}

export interface WeaponsApiWeaponsControllerGetOneRequest {
    /**
     * 
     * @type WeaponsControllerGetRequest
     * @memberof WeaponsApiweaponsControllerGetOne
     */
    WeaponsControllerGetRequest: WeaponsControllerGetRequest
}

export class ObjectWeaponsApi {
    private api: ObservableWeaponsApi

    public constructor(configuration: Configuration, requestFactory?: WeaponsApiRequestFactory, responseProcessor?: WeaponsApiResponseProcessor) {
        this.api = new ObservableWeaponsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGetWithHttpInfo(param: WeaponsApiWeaponsControllerGetRequest, options?: Configuration): Promise<HttpInfo<Array<Weapon>>> {
        return this.api.weaponsControllerGetWithHttpInfo(param.WeaponsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGet(param: WeaponsApiWeaponsControllerGetRequest, options?: Configuration): Promise<Array<Weapon>> {
        return this.api.weaponsControllerGet(param.WeaponsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGetAllWithHttpInfo(param: WeaponsApiWeaponsControllerGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Weapon>>> {
        return this.api.weaponsControllerGetAllWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGetAll(param: WeaponsApiWeaponsControllerGetAllRequest = {}, options?: Configuration): Promise<Array<Weapon>> {
        return this.api.weaponsControllerGetAll( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGetOneWithHttpInfo(param: WeaponsApiWeaponsControllerGetOneRequest, options?: Configuration): Promise<HttpInfo<Weapon>> {
        return this.api.weaponsControllerGetOneWithHttpInfo(param.WeaponsControllerGetRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public weaponsControllerGetOne(param: WeaponsApiWeaponsControllerGetOneRequest, options?: Configuration): Promise<Weapon> {
        return this.api.weaponsControllerGetOne(param.WeaponsControllerGetRequest,  options).toPromise();
    }

}

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
import { ObservableArtifactSetsApi } from './ObservableAPI';

import { ArtifactSetsApiRequestFactory, ArtifactSetsApiResponseProcessor} from "../apis/ArtifactSetsApi";
export class PromiseArtifactSetsApi {
    private api: ObservableArtifactSetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ArtifactSetsApiRequestFactory,
        responseProcessor?: ArtifactSetsApiResponseProcessor
    ) {
        this.api = new ObservableArtifactSetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param ArtifactSetsControllerGetRequest
     */
    public artifactSetsControllerGetWithHttpInfo(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Array<ArtifactSets>>> {
        const result = this.api.artifactSetsControllerGetWithHttpInfo(ArtifactSetsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param ArtifactSetsControllerGetRequest
     */
    public artifactSetsControllerGet(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, _options?: Configuration): Promise<Array<ArtifactSets>> {
        const result = this.api.artifactSetsControllerGet(ArtifactSetsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public artifactSetsControllerGetAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<ArtifactSets>>> {
        const result = this.api.artifactSetsControllerGetAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public artifactSetsControllerGetAll(_options?: Configuration): Promise<Array<ArtifactSets>> {
        const result = this.api.artifactSetsControllerGetAll(_options);
        return result.toPromise();
    }

    /**
     * @param ArtifactSetsControllerGetRequest
     */
    public artifactSetsControllerGetOneWithHttpInfo(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, _options?: Configuration): Promise<HttpInfo<ArtifactSets>> {
        const result = this.api.artifactSetsControllerGetOneWithHttpInfo(ArtifactSetsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param ArtifactSetsControllerGetRequest
     */
    public artifactSetsControllerGetOne(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, _options?: Configuration): Promise<ArtifactSets> {
        const result = this.api.artifactSetsControllerGetOne(ArtifactSetsControllerGetRequest, _options);
        return result.toPromise();
    }


}



import { ObservableArtifactsApi } from './ObservableAPI';

import { ArtifactsApiRequestFactory, ArtifactsApiResponseProcessor} from "../apis/ArtifactsApi";
export class PromiseArtifactsApi {
    private api: ObservableArtifactsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ArtifactsApiRequestFactory,
        responseProcessor?: ArtifactsApiResponseProcessor
    ) {
        this.api = new ObservableArtifactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param ArtifactsControllerGetRequest
     */
    public artifactsControllerGetWithHttpInfo(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Array<Artifacts>>> {
        const result = this.api.artifactsControllerGetWithHttpInfo(ArtifactsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param ArtifactsControllerGetRequest
     */
    public artifactsControllerGet(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, _options?: Configuration): Promise<Array<Artifacts>> {
        const result = this.api.artifactsControllerGet(ArtifactsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public artifactsControllerGetAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Artifacts>>> {
        const result = this.api.artifactsControllerGetAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public artifactsControllerGetAll(_options?: Configuration): Promise<Array<Artifacts>> {
        const result = this.api.artifactsControllerGetAll(_options);
        return result.toPromise();
    }

    /**
     * @param ArtifactsControllerGetRequest
     */
    public artifactsControllerGetOneWithHttpInfo(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Artifacts>> {
        const result = this.api.artifactsControllerGetOneWithHttpInfo(ArtifactsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param ArtifactsControllerGetRequest
     */
    public artifactsControllerGetOne(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, _options?: Configuration): Promise<Artifacts> {
        const result = this.api.artifactsControllerGetOne(ArtifactsControllerGetRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCharactersApi } from './ObservableAPI';

import { CharactersApiRequestFactory, CharactersApiResponseProcessor} from "../apis/CharactersApi";
export class PromiseCharactersApi {
    private api: ObservableCharactersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CharactersApiRequestFactory,
        responseProcessor?: CharactersApiResponseProcessor
    ) {
        this.api = new ObservableCharactersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param CharactersControllerGetRequest
     */
    public charactersControllerGetWithHttpInfo(CharactersControllerGetRequest: CharactersControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Array<GICharacter>>> {
        const result = this.api.charactersControllerGetWithHttpInfo(CharactersControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param CharactersControllerGetRequest
     */
    public charactersControllerGet(CharactersControllerGetRequest: CharactersControllerGetRequest, _options?: Configuration): Promise<Array<GICharacter>> {
        const result = this.api.charactersControllerGet(CharactersControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public charactersControllerGetAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<GICharacter>>> {
        const result = this.api.charactersControllerGetAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public charactersControllerGetAll(_options?: Configuration): Promise<Array<GICharacter>> {
        const result = this.api.charactersControllerGetAll(_options);
        return result.toPromise();
    }

    /**
     * @param CharactersControllerGetRequest
     */
    public charactersControllerGetOneWithHttpInfo(CharactersControllerGetRequest: CharactersControllerGetRequest, _options?: Configuration): Promise<HttpInfo<GICharacter>> {
        const result = this.api.charactersControllerGetOneWithHttpInfo(CharactersControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param CharactersControllerGetRequest
     */
    public charactersControllerGetOne(CharactersControllerGetRequest: CharactersControllerGetRequest, _options?: Configuration): Promise<GICharacter> {
        const result = this.api.charactersControllerGetOne(CharactersControllerGetRequest, _options);
        return result.toPromise();
    }


}



import { ObservableGalleriesApi } from './ObservableAPI';

import { GalleriesApiRequestFactory, GalleriesApiResponseProcessor} from "../apis/GalleriesApi";
export class PromiseGalleriesApi {
    private api: ObservableGalleriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GalleriesApiRequestFactory,
        responseProcessor?: GalleriesApiResponseProcessor
    ) {
        this.api = new ObservableGalleriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param GalleriesControllerCreateRequest
     */
    public galleriesControllerCreateWithHttpInfo(GalleriesControllerCreateRequest: GalleriesControllerCreateRequest, _options?: Configuration): Promise<HttpInfo<Gallery>> {
        const result = this.api.galleriesControllerCreateWithHttpInfo(GalleriesControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param GalleriesControllerCreateRequest
     */
    public galleriesControllerCreate(GalleriesControllerCreateRequest: GalleriesControllerCreateRequest, _options?: Configuration): Promise<Gallery> {
        const result = this.api.galleriesControllerCreate(GalleriesControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public galleriesControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.galleriesControllerDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public galleriesControllerDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.galleriesControllerDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param GalleriesControllerGetRequest
     */
    public galleriesControllerGetWithHttpInfo(GalleriesControllerGetRequest: GalleriesControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Array<Gallery>>> {
        const result = this.api.galleriesControllerGetWithHttpInfo(GalleriesControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param GalleriesControllerGetRequest
     */
    public galleriesControllerGet(GalleriesControllerGetRequest: GalleriesControllerGetRequest, _options?: Configuration): Promise<Array<Gallery>> {
        const result = this.api.galleriesControllerGet(GalleriesControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public galleriesControllerGetAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Gallery>>> {
        const result = this.api.galleriesControllerGetAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public galleriesControllerGetAll(_options?: Configuration): Promise<Array<Gallery>> {
        const result = this.api.galleriesControllerGetAll(_options);
        return result.toPromise();
    }

    /**
     * @param GalleriesControllerGetRequest
     */
    public galleriesControllerGetOneWithHttpInfo(GalleriesControllerGetRequest: GalleriesControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Gallery>> {
        const result = this.api.galleriesControllerGetOneWithHttpInfo(GalleriesControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param GalleriesControllerGetRequest
     */
    public galleriesControllerGetOne(GalleriesControllerGetRequest: GalleriesControllerGetRequest, _options?: Configuration): Promise<Gallery> {
        const result = this.api.galleriesControllerGetOne(GalleriesControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param GalleriesControllerUpdateRequest
     */
    public galleriesControllerUpdateWithHttpInfo(GalleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.galleriesControllerUpdateWithHttpInfo(GalleriesControllerUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param GalleriesControllerUpdateRequest
     */
    public galleriesControllerUpdate(GalleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.galleriesControllerUpdate(GalleriesControllerUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [comment]
     * @param [outletId]
     * @param [file]
     */
    public galleriesControllerUploadFileWithHttpInfo(comment?: string, outletId?: number, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.galleriesControllerUploadFileWithHttpInfo(comment, outletId, file, _options);
        return result.toPromise();
    }

    /**
     * @param [comment]
     * @param [outletId]
     * @param [file]
     */
    public galleriesControllerUploadFile(comment?: string, outletId?: number, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.galleriesControllerUploadFile(comment, outletId, file, _options);
        return result.toPromise();
    }


}



import { ObservableRegionsApi } from './ObservableAPI';

import { RegionsApiRequestFactory, RegionsApiResponseProcessor} from "../apis/RegionsApi";
export class PromiseRegionsApi {
    private api: ObservableRegionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionsApiRequestFactory,
        responseProcessor?: RegionsApiResponseProcessor
    ) {
        this.api = new ObservableRegionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param CountriesControllerGetRequest
     */
    public countriesControllerGetWithHttpInfo(CountriesControllerGetRequest: CountriesControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Array<Country>>> {
        const result = this.api.countriesControllerGetWithHttpInfo(CountriesControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param CountriesControllerGetRequest
     */
    public countriesControllerGet(CountriesControllerGetRequest: CountriesControllerGetRequest, _options?: Configuration): Promise<Array<Country>> {
        const result = this.api.countriesControllerGet(CountriesControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public countriesControllerGetAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Country>>> {
        const result = this.api.countriesControllerGetAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public countriesControllerGetAll(_options?: Configuration): Promise<Array<Country>> {
        const result = this.api.countriesControllerGetAll(_options);
        return result.toPromise();
    }

    /**
     * @param CountriesControllerGetRequest
     */
    public countriesControllerGetOneWithHttpInfo(CountriesControllerGetRequest: CountriesControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Country>> {
        const result = this.api.countriesControllerGetOneWithHttpInfo(CountriesControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param CountriesControllerGetRequest
     */
    public countriesControllerGetOne(CountriesControllerGetRequest: CountriesControllerGetRequest, _options?: Configuration): Promise<Country> {
        const result = this.api.countriesControllerGetOne(CountriesControllerGetRequest, _options);
        return result.toPromise();
    }


}



import { ObservableVersionsApi } from './ObservableAPI';

import { VersionsApiRequestFactory, VersionsApiResponseProcessor} from "../apis/VersionsApi";
export class PromiseVersionsApi {
    private api: ObservableVersionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VersionsApiRequestFactory,
        responseProcessor?: VersionsApiResponseProcessor
    ) {
        this.api = new ObservableVersionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param VersionsControllerGetRequest
     */
    public versionsControllerGetWithHttpInfo(VersionsControllerGetRequest: VersionsControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Array<VersionsEntity>>> {
        const result = this.api.versionsControllerGetWithHttpInfo(VersionsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param VersionsControllerGetRequest
     */
    public versionsControllerGet(VersionsControllerGetRequest: VersionsControllerGetRequest, _options?: Configuration): Promise<Array<VersionsEntity>> {
        const result = this.api.versionsControllerGet(VersionsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public versionsControllerGetAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<VersionsEntity>>> {
        const result = this.api.versionsControllerGetAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public versionsControllerGetAll(_options?: Configuration): Promise<Array<VersionsEntity>> {
        const result = this.api.versionsControllerGetAll(_options);
        return result.toPromise();
    }

    /**
     * @param VersionsControllerGetRequest
     */
    public versionsControllerGetOneWithHttpInfo(VersionsControllerGetRequest: VersionsControllerGetRequest, _options?: Configuration): Promise<HttpInfo<VersionsEntity>> {
        const result = this.api.versionsControllerGetOneWithHttpInfo(VersionsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param VersionsControllerGetRequest
     */
    public versionsControllerGetOne(VersionsControllerGetRequest: VersionsControllerGetRequest, _options?: Configuration): Promise<VersionsEntity> {
        const result = this.api.versionsControllerGetOne(VersionsControllerGetRequest, _options);
        return result.toPromise();
    }


}



import { ObservableWeaponsApi } from './ObservableAPI';

import { WeaponsApiRequestFactory, WeaponsApiResponseProcessor} from "../apis/WeaponsApi";
export class PromiseWeaponsApi {
    private api: ObservableWeaponsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WeaponsApiRequestFactory,
        responseProcessor?: WeaponsApiResponseProcessor
    ) {
        this.api = new ObservableWeaponsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param WeaponsControllerGetRequest
     */
    public weaponsControllerGetWithHttpInfo(WeaponsControllerGetRequest: WeaponsControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Array<Weapon>>> {
        const result = this.api.weaponsControllerGetWithHttpInfo(WeaponsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param WeaponsControllerGetRequest
     */
    public weaponsControllerGet(WeaponsControllerGetRequest: WeaponsControllerGetRequest, _options?: Configuration): Promise<Array<Weapon>> {
        const result = this.api.weaponsControllerGet(WeaponsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     */
    public weaponsControllerGetAllWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Weapon>>> {
        const result = this.api.weaponsControllerGetAllWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public weaponsControllerGetAll(_options?: Configuration): Promise<Array<Weapon>> {
        const result = this.api.weaponsControllerGetAll(_options);
        return result.toPromise();
    }

    /**
     * @param WeaponsControllerGetRequest
     */
    public weaponsControllerGetOneWithHttpInfo(WeaponsControllerGetRequest: WeaponsControllerGetRequest, _options?: Configuration): Promise<HttpInfo<Weapon>> {
        const result = this.api.weaponsControllerGetOneWithHttpInfo(WeaponsControllerGetRequest, _options);
        return result.toPromise();
    }

    /**
     * @param WeaponsControllerGetRequest
     */
    public weaponsControllerGetOne(WeaponsControllerGetRequest: WeaponsControllerGetRequest, _options?: Configuration): Promise<Weapon> {
        const result = this.api.weaponsControllerGetOne(WeaponsControllerGetRequest, _options);
        return result.toPromise();
    }


}




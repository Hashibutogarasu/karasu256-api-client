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
     * @param artifactsControllerCreateRequest
     */
    public artifactSetsControllerCreateWithHttpInfo(artifactsControllerCreateRequest: ArtifactsControllerCreateRequest, _options?: Configuration): Promise<HttpInfo<ArtifactSets>> {
        const result = this.api.artifactSetsControllerCreateWithHttpInfo(artifactsControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param artifactsControllerCreateRequest
     */
    public artifactSetsControllerCreate(artifactsControllerCreateRequest: ArtifactsControllerCreateRequest, _options?: Configuration): Promise<ArtifactSets> {
        const result = this.api.artifactSetsControllerCreate(artifactsControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public artifactSetsControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.artifactSetsControllerDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public artifactSetsControllerDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.artifactSetsControllerDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public artifactSetsControllerGetWithHttpInfo(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Array<ArtifactSets>>> {
        const result = this.api.artifactSetsControllerGetWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public artifactSetsControllerGet(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Promise<Array<ArtifactSets>> {
        const result = this.api.artifactSetsControllerGet(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public artifactSetsControllerGetOneWithHttpInfo(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<ArtifactSets>> {
        const result = this.api.artifactSetsControllerGetOneWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public artifactSetsControllerGetOne(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Promise<ArtifactSets> {
        const result = this.api.artifactSetsControllerGetOne(query, _options);
        return result.toPromise();
    }

    /**
     * @param artifactsControllerUpdateRequest
     */
    public artifactSetsControllerUpdateWithHttpInfo(artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.artifactSetsControllerUpdateWithHttpInfo(artifactsControllerUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param artifactsControllerUpdateRequest
     */
    public artifactSetsControllerUpdate(artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.artifactSetsControllerUpdate(artifactsControllerUpdateRequest, _options);
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
     * @param artifactsControllerCreateRequest
     */
    public artifactsControllerCreateWithHttpInfo(artifactsControllerCreateRequest: ArtifactsControllerCreateRequest, _options?: Configuration): Promise<HttpInfo<Artifacts>> {
        const result = this.api.artifactsControllerCreateWithHttpInfo(artifactsControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param artifactsControllerCreateRequest
     */
    public artifactsControllerCreate(artifactsControllerCreateRequest: ArtifactsControllerCreateRequest, _options?: Configuration): Promise<Artifacts> {
        const result = this.api.artifactsControllerCreate(artifactsControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public artifactsControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.artifactsControllerDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public artifactsControllerDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.artifactsControllerDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public artifactsControllerGetWithHttpInfo(query: ArtifactsControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Array<Artifacts>>> {
        const result = this.api.artifactsControllerGetWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public artifactsControllerGet(query: ArtifactsControllerGetQueryParameter, _options?: Configuration): Promise<Array<Artifacts>> {
        const result = this.api.artifactsControllerGet(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public artifactsControllerGetOneWithHttpInfo(query: ArtifactsControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Artifacts>> {
        const result = this.api.artifactsControllerGetOneWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public artifactsControllerGetOne(query: ArtifactsControllerGetQueryParameter, _options?: Configuration): Promise<Artifacts> {
        const result = this.api.artifactsControllerGetOne(query, _options);
        return result.toPromise();
    }

    /**
     * @param artifactsControllerUpdateRequest
     */
    public artifactsControllerUpdateWithHttpInfo(artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.artifactsControllerUpdateWithHttpInfo(artifactsControllerUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param artifactsControllerUpdateRequest
     */
    public artifactsControllerUpdate(artifactsControllerUpdateRequest: ArtifactsControllerUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.artifactsControllerUpdate(artifactsControllerUpdateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public authControllerMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerMeWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerMe(_options?: Configuration): Promise<void> {
        const result = this.api.authControllerMe(_options);
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
     * @param charactersControllerCreateRequest
     */
    public charactersControllerCreateWithHttpInfo(charactersControllerCreateRequest: CharactersControllerCreateRequest, _options?: Configuration): Promise<HttpInfo<Character>> {
        const result = this.api.charactersControllerCreateWithHttpInfo(charactersControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param charactersControllerCreateRequest
     */
    public charactersControllerCreate(charactersControllerCreateRequest: CharactersControllerCreateRequest, _options?: Configuration): Promise<Character> {
        const result = this.api.charactersControllerCreate(charactersControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public charactersControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.charactersControllerDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public charactersControllerDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.charactersControllerDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public charactersControllerGetWithHttpInfo(query: CharactersControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Array<Character>>> {
        const result = this.api.charactersControllerGetWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public charactersControllerGet(query: CharactersControllerGetQueryParameter, _options?: Configuration): Promise<Array<Character>> {
        const result = this.api.charactersControllerGet(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public charactersControllerGetOneWithHttpInfo(query: CharactersControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Character>> {
        const result = this.api.charactersControllerGetOneWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public charactersControllerGetOne(query: CharactersControllerGetQueryParameter, _options?: Configuration): Promise<Character> {
        const result = this.api.charactersControllerGetOne(query, _options);
        return result.toPromise();
    }

    /**
     * @param charactersControllerImportRequest
     */
    public charactersControllerImportWithHttpInfo(charactersControllerImportRequest: CharactersControllerImportRequest, _options?: Configuration): Promise<HttpInfo<Character>> {
        const result = this.api.charactersControllerImportWithHttpInfo(charactersControllerImportRequest, _options);
        return result.toPromise();
    }

    /**
     * @param charactersControllerImportRequest
     */
    public charactersControllerImport(charactersControllerImportRequest: CharactersControllerImportRequest, _options?: Configuration): Promise<Character> {
        const result = this.api.charactersControllerImport(charactersControllerImportRequest, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public charactersControllerImportFromHoyoLabWithHttpInfo(query: CharactersControllerImportFromHoyoLabQueryParameter, _options?: Configuration): Promise<HttpInfo<Character>> {
        const result = this.api.charactersControllerImportFromHoyoLabWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public charactersControllerImportFromHoyoLab(query: CharactersControllerImportFromHoyoLabQueryParameter, _options?: Configuration): Promise<Character> {
        const result = this.api.charactersControllerImportFromHoyoLab(query, _options);
        return result.toPromise();
    }

    /**
     * @param charactersControllerUpdateRequest
     */
    public charactersControllerUpdateWithHttpInfo(charactersControllerUpdateRequest: CharactersControllerUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.charactersControllerUpdateWithHttpInfo(charactersControllerUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param charactersControllerUpdateRequest
     */
    public charactersControllerUpdate(charactersControllerUpdateRequest: CharactersControllerUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.charactersControllerUpdate(charactersControllerUpdateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableCountriesApi } from './ObservableAPI';

import { CountriesApiRequestFactory, CountriesApiResponseProcessor} from "../apis/CountriesApi";
export class PromiseCountriesApi {
    private api: ObservableCountriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CountriesApiRequestFactory,
        responseProcessor?: CountriesApiResponseProcessor
    ) {
        this.api = new ObservableCountriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param countriesControllerCreateRequest
     */
    public countriesControllerCreateWithHttpInfo(countriesControllerCreateRequest: CountriesControllerCreateRequest, _options?: Configuration): Promise<HttpInfo<Country>> {
        const result = this.api.countriesControllerCreateWithHttpInfo(countriesControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param countriesControllerCreateRequest
     */
    public countriesControllerCreate(countriesControllerCreateRequest: CountriesControllerCreateRequest, _options?: Configuration): Promise<Country> {
        const result = this.api.countriesControllerCreate(countriesControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public countriesControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.countriesControllerDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public countriesControllerDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.countriesControllerDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public countriesControllerGetWithHttpInfo(query: CountriesControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Array<Country>>> {
        const result = this.api.countriesControllerGetWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public countriesControllerGet(query: CountriesControllerGetQueryParameter, _options?: Configuration): Promise<Array<Country>> {
        const result = this.api.countriesControllerGet(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public countriesControllerGetOneWithHttpInfo(query: CountriesControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Country>> {
        const result = this.api.countriesControllerGetOneWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public countriesControllerGetOne(query: CountriesControllerGetQueryParameter, _options?: Configuration): Promise<Country> {
        const result = this.api.countriesControllerGetOne(query, _options);
        return result.toPromise();
    }

    /**
     * @param countriesControllerUpdateRequest
     */
    public countriesControllerUpdateWithHttpInfo(countriesControllerUpdateRequest: CountriesControllerUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.countriesControllerUpdateWithHttpInfo(countriesControllerUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param countriesControllerUpdateRequest
     */
    public countriesControllerUpdate(countriesControllerUpdateRequest: CountriesControllerUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.countriesControllerUpdate(countriesControllerUpdateRequest, _options);
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
     * @param galleriesControllerCreateRequest
     */
    public galleriesControllerCreateWithHttpInfo(galleriesControllerCreateRequest: GalleriesControllerCreateRequest, _options?: Configuration): Promise<HttpInfo<Gallery>> {
        const result = this.api.galleriesControllerCreateWithHttpInfo(galleriesControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param galleriesControllerCreateRequest
     */
    public galleriesControllerCreate(galleriesControllerCreateRequest: GalleriesControllerCreateRequest, _options?: Configuration): Promise<Gallery> {
        const result = this.api.galleriesControllerCreate(galleriesControllerCreateRequest, _options);
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
     * @param query
     */
    public galleriesControllerGetWithHttpInfo(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Array<Gallery>>> {
        const result = this.api.galleriesControllerGetWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public galleriesControllerGet(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Promise<Array<Gallery>> {
        const result = this.api.galleriesControllerGet(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public galleriesControllerGetOneWithHttpInfo(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Gallery>> {
        const result = this.api.galleriesControllerGetOneWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public galleriesControllerGetOne(query: ArtifactSetsControllerGetQueryParameter, _options?: Configuration): Promise<Gallery> {
        const result = this.api.galleriesControllerGetOne(query, _options);
        return result.toPromise();
    }

    /**
     * @param galleriesControllerUpdateRequest
     */
    public galleriesControllerUpdateWithHttpInfo(galleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.galleriesControllerUpdateWithHttpInfo(galleriesControllerUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param galleriesControllerUpdateRequest
     */
    public galleriesControllerUpdate(galleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.galleriesControllerUpdate(galleriesControllerUpdateRequest, _options);
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
     * @param weaponsControllerCreateRequest
     */
    public weaponsControllerCreateWithHttpInfo(weaponsControllerCreateRequest: WeaponsControllerCreateRequest, _options?: Configuration): Promise<HttpInfo<Weapon>> {
        const result = this.api.weaponsControllerCreateWithHttpInfo(weaponsControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param weaponsControllerCreateRequest
     */
    public weaponsControllerCreate(weaponsControllerCreateRequest: WeaponsControllerCreateRequest, _options?: Configuration): Promise<Weapon> {
        const result = this.api.weaponsControllerCreate(weaponsControllerCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public weaponsControllerDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.weaponsControllerDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public weaponsControllerDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.weaponsControllerDelete(id, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public weaponsControllerGetWithHttpInfo(query: WeaponsControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Array<Weapon>>> {
        const result = this.api.weaponsControllerGetWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public weaponsControllerGet(query: WeaponsControllerGetQueryParameter, _options?: Configuration): Promise<Array<Weapon>> {
        const result = this.api.weaponsControllerGet(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public weaponsControllerGetOneWithHttpInfo(query: WeaponsControllerGetQueryParameter, _options?: Configuration): Promise<HttpInfo<Weapon>> {
        const result = this.api.weaponsControllerGetOneWithHttpInfo(query, _options);
        return result.toPromise();
    }

    /**
     * @param query
     */
    public weaponsControllerGetOne(query: WeaponsControllerGetQueryParameter, _options?: Configuration): Promise<Weapon> {
        const result = this.api.weaponsControllerGetOne(query, _options);
        return result.toPromise();
    }

    /**
     * @param weaponsControllerUpdateRequest
     */
    public weaponsControllerUpdateWithHttpInfo(weaponsControllerUpdateRequest: WeaponsControllerUpdateRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.weaponsControllerUpdateWithHttpInfo(weaponsControllerUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param weaponsControllerUpdateRequest
     */
    public weaponsControllerUpdate(weaponsControllerUpdateRequest: WeaponsControllerUpdateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.weaponsControllerUpdate(weaponsControllerUpdateRequest, _options);
        return result.toPromise();
    }


}




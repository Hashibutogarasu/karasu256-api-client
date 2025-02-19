/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CharactersControllerGetRequest,
  GICharacter,
} from '../models/index';
import {
    CharactersControllerGetRequestFromJSON,
    CharactersControllerGetRequestToJSON,
    GICharacterFromJSON,
    GICharacterToJSON,
} from '../models/index';

export interface CharactersControllerGetOperationRequest {
    CharactersControllerGetRequest: CharactersControllerGetRequest;
}

export interface CharactersControllerGetOneRequest {
    CharactersControllerGetRequest: CharactersControllerGetRequest;
}

/**
 * CharactersApi - interface
 * 
 * @export
 * @interface CharactersApiInterface
 */
export interface CharactersApiInterface {
    /**
     * 
     * @param {CharactersControllerGetRequest} CharactersControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharactersApiInterface
     */
    charactersControllerGetRaw(requestParameters: CharactersControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GICharacter>>>;

    /**
     */
    charactersControllerGet(CharactersControllerGetRequest: CharactersControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GICharacter>>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharactersApiInterface
     */
    charactersControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GICharacter>>>;

    /**
     */
    charactersControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GICharacter>>;

    /**
     * 
     * @param {CharactersControllerGetRequest} CharactersControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CharactersApiInterface
     */
    charactersControllerGetOneRaw(requestParameters: CharactersControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GICharacter>>;

    /**
     */
    charactersControllerGetOne(CharactersControllerGetRequest: CharactersControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GICharacter>;

}

/**
 * 
 */
export class CharactersApi extends runtime.BaseAPI implements CharactersApiInterface {

    /**
     */
    async charactersControllerGetRaw(requestParameters: CharactersControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GICharacter>>> {
        if (requestParameters['CharactersControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'CharactersControllerGetRequest',
                'Required parameter "CharactersControllerGetRequest" was null or undefined when calling charactersControllerGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/characters/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CharactersControllerGetRequestToJSON(requestParameters['CharactersControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GICharacterFromJSON));
    }

    /**
     */
    async charactersControllerGet(CharactersControllerGetRequest: CharactersControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GICharacter>> {
        const response = await this.charactersControllerGetRaw({ CharactersControllerGetRequest: CharactersControllerGetRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async charactersControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GICharacter>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/genshin/characters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GICharacterFromJSON));
    }

    /**
     */
    async charactersControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GICharacter>> {
        const response = await this.charactersControllerGetAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async charactersControllerGetOneRaw(requestParameters: CharactersControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GICharacter>> {
        if (requestParameters['CharactersControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'CharactersControllerGetRequest',
                'Required parameter "CharactersControllerGetRequest" was null or undefined when calling charactersControllerGetOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/characters/getOne`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CharactersControllerGetRequestToJSON(requestParameters['CharactersControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GICharacterFromJSON(jsonValue));
    }

    /**
     */
    async charactersControllerGetOne(CharactersControllerGetRequest: CharactersControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GICharacter> {
        const response = await this.charactersControllerGetOneRaw({ CharactersControllerGetRequest: CharactersControllerGetRequest }, initOverrides);
        return await response.value();
    }

}

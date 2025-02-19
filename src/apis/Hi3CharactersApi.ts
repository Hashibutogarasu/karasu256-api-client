/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HI3Characters,
  Hi3CharactersControllerGetRequest,
} from '../models/index';
import {
    HI3CharactersFromJSON,
    HI3CharactersToJSON,
    Hi3CharactersControllerGetRequestFromJSON,
    Hi3CharactersControllerGetRequestToJSON,
} from '../models/index';

export interface Hi3CharactersControllerGetOperationRequest {
    Hi3CharactersControllerGetRequest: Hi3CharactersControllerGetRequest;
}

export interface Hi3CharactersControllerGetOneRequest {
    Hi3CharactersControllerGetRequest: Hi3CharactersControllerGetRequest;
}

/**
 * Hi3CharactersApi - interface
 * 
 * @export
 * @interface Hi3CharactersApiInterface
 */
export interface Hi3CharactersApiInterface {
    /**
     * 
     * @param {Hi3CharactersControllerGetRequest} Hi3CharactersControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Hi3CharactersApiInterface
     */
    hi3CharactersControllerGetRaw(requestParameters: Hi3CharactersControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<HI3Characters>>>;

    /**
     */
    hi3CharactersControllerGet(Hi3CharactersControllerGetRequest: Hi3CharactersControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<HI3Characters>>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Hi3CharactersApiInterface
     */
    hi3CharactersControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<HI3Characters>>>;

    /**
     */
    hi3CharactersControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<HI3Characters>>;

    /**
     * 
     * @param {Hi3CharactersControllerGetRequest} Hi3CharactersControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof Hi3CharactersApiInterface
     */
    hi3CharactersControllerGetOneRaw(requestParameters: Hi3CharactersControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HI3Characters>>;

    /**
     */
    hi3CharactersControllerGetOne(Hi3CharactersControllerGetRequest: Hi3CharactersControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HI3Characters>;

}

/**
 * 
 */
export class Hi3CharactersApi extends runtime.BaseAPI implements Hi3CharactersApiInterface {

    /**
     */
    async hi3CharactersControllerGetRaw(requestParameters: Hi3CharactersControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<HI3Characters>>> {
        if (requestParameters['Hi3CharactersControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'Hi3CharactersControllerGetRequest',
                'Required parameter "Hi3CharactersControllerGetRequest" was null or undefined when calling hi3CharactersControllerGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/public/honkai_impact_3rd/hi3_characters/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: Hi3CharactersControllerGetRequestToJSON(requestParameters['Hi3CharactersControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(HI3CharactersFromJSON));
    }

    /**
     */
    async hi3CharactersControllerGet(Hi3CharactersControllerGetRequest: Hi3CharactersControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<HI3Characters>> {
        const response = await this.hi3CharactersControllerGetRaw({ Hi3CharactersControllerGetRequest: Hi3CharactersControllerGetRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async hi3CharactersControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<HI3Characters>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/public/honkai_impact_3rd/hi3_characters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(HI3CharactersFromJSON));
    }

    /**
     */
    async hi3CharactersControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<HI3Characters>> {
        const response = await this.hi3CharactersControllerGetAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async hi3CharactersControllerGetOneRaw(requestParameters: Hi3CharactersControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HI3Characters>> {
        if (requestParameters['Hi3CharactersControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'Hi3CharactersControllerGetRequest',
                'Required parameter "Hi3CharactersControllerGetRequest" was null or undefined when calling hi3CharactersControllerGetOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/public/honkai_impact_3rd/hi3_characters/getOne`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: Hi3CharactersControllerGetRequestToJSON(requestParameters['Hi3CharactersControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HI3CharactersFromJSON(jsonValue));
    }

    /**
     */
    async hi3CharactersControllerGetOne(Hi3CharactersControllerGetRequest: Hi3CharactersControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HI3Characters> {
        const response = await this.hi3CharactersControllerGetOneRaw({ Hi3CharactersControllerGetRequest: Hi3CharactersControllerGetRequest }, initOverrides);
        return await response.value();
    }

}

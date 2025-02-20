/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CountriesControllerGetRequest,
  Country,
} from '../models/index';
import {
    CountriesControllerGetRequestFromJSON,
    CountriesControllerGetRequestToJSON,
    CountryFromJSON,
    CountryToJSON,
} from '../models/index';

export interface CountriesControllerGetOperationRequest {
    CountriesControllerGetRequest: CountriesControllerGetRequest;
}

export interface CountriesControllerGetOneRequest {
    CountriesControllerGetRequest: CountriesControllerGetRequest;
}

/**
 * RegionsApi - interface
 * 
 * @export
 * @interface RegionsApiInterface
 */
export interface RegionsApiInterface {
    /**
     * 
     * @param {CountriesControllerGetRequest} CountriesControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegionsApiInterface
     */
    countriesControllerGetRaw(requestParameters: CountriesControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Country>>>;

    /**
     */
    countriesControllerGet(CountriesControllerGetRequest: CountriesControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Country>>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegionsApiInterface
     */
    countriesControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Country>>>;

    /**
     */
    countriesControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Country>>;

    /**
     * 
     * @param {CountriesControllerGetRequest} CountriesControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegionsApiInterface
     */
    countriesControllerGetOneRaw(requestParameters: CountriesControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>>;

    /**
     */
    countriesControllerGetOne(CountriesControllerGetRequest: CountriesControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country>;

}

/**
 * 
 */
export class RegionsApi extends runtime.BaseAPI implements RegionsApiInterface {

    /**
     */
    async countriesControllerGetRaw(requestParameters: CountriesControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Country>>> {
        if (requestParameters['CountriesControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'CountriesControllerGetRequest',
                'Required parameter "CountriesControllerGetRequest" was null or undefined when calling countriesControllerGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/regions/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CountriesControllerGetRequestToJSON(requestParameters['CountriesControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CountryFromJSON));
    }

    /**
     */
    async countriesControllerGet(CountriesControllerGetRequest: CountriesControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Country>> {
        const response = await this.countriesControllerGetRaw({ CountriesControllerGetRequest: CountriesControllerGetRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async countriesControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Country>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/genshin/regions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CountryFromJSON));
    }

    /**
     */
    async countriesControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Country>> {
        const response = await this.countriesControllerGetAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async countriesControllerGetOneRaw(requestParameters: CountriesControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>> {
        if (requestParameters['CountriesControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'CountriesControllerGetRequest',
                'Required parameter "CountriesControllerGetRequest" was null or undefined when calling countriesControllerGetOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/regions/getOne`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CountriesControllerGetRequestToJSON(requestParameters['CountriesControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountryFromJSON(jsonValue));
    }

    /**
     */
    async countriesControllerGetOne(CountriesControllerGetRequest: CountriesControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country> {
        const response = await this.countriesControllerGetOneRaw({ CountriesControllerGetRequest: CountriesControllerGetRequest }, initOverrides);
        return await response.value();
    }

}

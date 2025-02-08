/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab Auth API Document Production
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Weapon,
  WeaponsControllerGetRequest,
} from '../models/index';
import {
    WeaponFromJSON,
    WeaponToJSON,
    WeaponsControllerGetRequestFromJSON,
    WeaponsControllerGetRequestToJSON,
} from '../models/index';

export interface WeaponsControllerGetOperationRequest {
    WeaponsControllerGetRequest: WeaponsControllerGetRequest;
}

export interface WeaponsControllerGetOneRequest {
    WeaponsControllerGetRequest: WeaponsControllerGetRequest;
}

/**
 * WeaponsApi - interface
 * 
 * @export
 * @interface WeaponsApiInterface
 */
export interface WeaponsApiInterface {
    /**
     * 
     * @param {WeaponsControllerGetRequest} WeaponsControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WeaponsApiInterface
     */
    weaponsControllerGetRaw(requestParameters: WeaponsControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Weapon>>>;

    /**
     */
    weaponsControllerGet(WeaponsControllerGetRequest: WeaponsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Weapon>>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WeaponsApiInterface
     */
    weaponsControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Weapon>>>;

    /**
     */
    weaponsControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Weapon>>;

    /**
     * 
     * @param {WeaponsControllerGetRequest} WeaponsControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WeaponsApiInterface
     */
    weaponsControllerGetOneRaw(requestParameters: WeaponsControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Weapon>>;

    /**
     */
    weaponsControllerGetOne(WeaponsControllerGetRequest: WeaponsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Weapon>;

}

/**
 * 
 */
export class WeaponsApi extends runtime.BaseAPI implements WeaponsApiInterface {

    /**
     */
    async weaponsControllerGetRaw(requestParameters: WeaponsControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Weapon>>> {
        if (requestParameters['WeaponsControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'WeaponsControllerGetRequest',
                'Required parameter "WeaponsControllerGetRequest" was null or undefined when calling weaponsControllerGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/weapons/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WeaponsControllerGetRequestToJSON(requestParameters['WeaponsControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WeaponFromJSON));
    }

    /**
     */
    async weaponsControllerGet(WeaponsControllerGetRequest: WeaponsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Weapon>> {
        const response = await this.weaponsControllerGetRaw({ WeaponsControllerGetRequest: WeaponsControllerGetRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async weaponsControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Weapon>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/genshin/weapons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WeaponFromJSON));
    }

    /**
     */
    async weaponsControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Weapon>> {
        const response = await this.weaponsControllerGetAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async weaponsControllerGetOneRaw(requestParameters: WeaponsControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Weapon>> {
        if (requestParameters['WeaponsControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'WeaponsControllerGetRequest',
                'Required parameter "WeaponsControllerGetRequest" was null or undefined when calling weaponsControllerGetOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/weapons/getOne`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WeaponsControllerGetRequestToJSON(requestParameters['WeaponsControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WeaponFromJSON(jsonValue));
    }

    /**
     */
    async weaponsControllerGetOne(WeaponsControllerGetRequest: WeaponsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Weapon> {
        const response = await this.weaponsControllerGetOneRaw({ WeaponsControllerGetRequest: WeaponsControllerGetRequest }, initOverrides);
        return await response.value();
    }

}

/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.20
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  VersionsControllerGetRequest,
  VersionsEntity,
} from '../models/index';
import {
    VersionsControllerGetRequestFromJSON,
    VersionsControllerGetRequestToJSON,
    VersionsEntityFromJSON,
    VersionsEntityToJSON,
} from '../models/index';

export interface VersionsControllerGetOperationRequest {
    VersionsControllerGetRequest: VersionsControllerGetRequest;
}

export interface VersionsControllerGetOneRequest {
    VersionsControllerGetRequest: VersionsControllerGetRequest;
}

/**
 * VersionsApi - interface
 * 
 * @export
 * @interface VersionsApiInterface
 */
export interface VersionsApiInterface {
    /**
     * 
     * @param {VersionsControllerGetRequest} VersionsControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    versionsControllerGetRaw(requestParameters: VersionsControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VersionsEntity>>>;

    /**
     */
    versionsControllerGet(VersionsControllerGetRequest: VersionsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VersionsEntity>>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    versionsControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VersionsEntity>>>;

    /**
     */
    versionsControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VersionsEntity>>;

    /**
     * 
     * @param {VersionsControllerGetRequest} VersionsControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VersionsApiInterface
     */
    versionsControllerGetOneRaw(requestParameters: VersionsControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionsEntity>>;

    /**
     */
    versionsControllerGetOne(VersionsControllerGetRequest: VersionsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionsEntity>;

}

/**
 * 
 */
export class VersionsApi extends runtime.BaseAPI implements VersionsApiInterface {

    /**
     */
    async versionsControllerGetRaw(requestParameters: VersionsControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VersionsEntity>>> {
        if (requestParameters['VersionsControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'VersionsControllerGetRequest',
                'Required parameter "VersionsControllerGetRequest" was null or undefined when calling versionsControllerGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/versions/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VersionsControllerGetRequestToJSON(requestParameters['VersionsControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VersionsEntityFromJSON));
    }

    /**
     */
    async versionsControllerGet(VersionsControllerGetRequest: VersionsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VersionsEntity>> {
        const response = await this.versionsControllerGetRaw({ VersionsControllerGetRequest: VersionsControllerGetRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async versionsControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<VersionsEntity>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/genshin/versions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(VersionsEntityFromJSON));
    }

    /**
     */
    async versionsControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<VersionsEntity>> {
        const response = await this.versionsControllerGetAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async versionsControllerGetOneRaw(requestParameters: VersionsControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VersionsEntity>> {
        if (requestParameters['VersionsControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'VersionsControllerGetRequest',
                'Required parameter "VersionsControllerGetRequest" was null or undefined when calling versionsControllerGetOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/versions/getOne`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: VersionsControllerGetRequestToJSON(requestParameters['VersionsControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VersionsEntityFromJSON(jsonValue));
    }

    /**
     */
    async versionsControllerGetOne(VersionsControllerGetRequest: VersionsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VersionsEntity> {
        const response = await this.versionsControllerGetOneRaw({ VersionsControllerGetRequest: VersionsControllerGetRequest }, initOverrides);
        return await response.value();
    }

}

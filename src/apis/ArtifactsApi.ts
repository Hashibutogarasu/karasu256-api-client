/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.34
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Artifacts,
  ArtifactsControllerGetRequest,
} from '../models/index';
import {
    ArtifactsFromJSON,
    ArtifactsToJSON,
    ArtifactsControllerGetRequestFromJSON,
    ArtifactsControllerGetRequestToJSON,
} from '../models/index';

export interface ArtifactsControllerGetOperationRequest {
    ArtifactsControllerGetRequest: ArtifactsControllerGetRequest;
}

export interface ArtifactsControllerGetOneRequest {
    ArtifactsControllerGetRequest: ArtifactsControllerGetRequest;
}

/**
 * ArtifactsApi - interface
 * 
 * @export
 * @interface ArtifactsApiInterface
 */
export interface ArtifactsApiInterface {
    /**
     * 
     * @param {ArtifactsControllerGetRequest} ArtifactsControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApiInterface
     */
    artifactsControllerGetRaw(requestParameters: ArtifactsControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Artifacts>>>;

    /**
     */
    artifactsControllerGet(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Artifacts>>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApiInterface
     */
    artifactsControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Artifacts>>>;

    /**
     */
    artifactsControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Artifacts>>;

    /**
     * 
     * @param {ArtifactsControllerGetRequest} ArtifactsControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactsApiInterface
     */
    artifactsControllerGetOneRaw(requestParameters: ArtifactsControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Artifacts>>;

    /**
     */
    artifactsControllerGetOne(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Artifacts>;

}

/**
 * 
 */
export class ArtifactsApi extends runtime.BaseAPI implements ArtifactsApiInterface {

    /**
     */
    async artifactsControllerGetRaw(requestParameters: ArtifactsControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Artifacts>>> {
        if (requestParameters['ArtifactsControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'ArtifactsControllerGetRequest',
                'Required parameter "ArtifactsControllerGetRequest" was null or undefined when calling artifactsControllerGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/artifacts/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ArtifactsControllerGetRequestToJSON(requestParameters['ArtifactsControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ArtifactsFromJSON));
    }

    /**
     */
    async artifactsControllerGet(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Artifacts>> {
        const response = await this.artifactsControllerGetRaw({ ArtifactsControllerGetRequest: ArtifactsControllerGetRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async artifactsControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Artifacts>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/genshin/artifacts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ArtifactsFromJSON));
    }

    /**
     */
    async artifactsControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Artifacts>> {
        const response = await this.artifactsControllerGetAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async artifactsControllerGetOneRaw(requestParameters: ArtifactsControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Artifacts>> {
        if (requestParameters['ArtifactsControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'ArtifactsControllerGetRequest',
                'Required parameter "ArtifactsControllerGetRequest" was null or undefined when calling artifactsControllerGetOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/artifacts/getOne`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ArtifactsControllerGetRequestToJSON(requestParameters['ArtifactsControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ArtifactsFromJSON(jsonValue));
    }

    /**
     */
    async artifactsControllerGetOne(ArtifactsControllerGetRequest: ArtifactsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Artifacts> {
        const response = await this.artifactsControllerGetOneRaw({ ArtifactsControllerGetRequest: ArtifactsControllerGetRequest }, initOverrides);
        return await response.value();
    }

}

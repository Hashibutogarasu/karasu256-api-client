/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ArtifactSets,
  ArtifactSetsControllerGetRequest,
} from '../models/index';
import {
    ArtifactSetsFromJSON,
    ArtifactSetsToJSON,
    ArtifactSetsControllerGetRequestFromJSON,
    ArtifactSetsControllerGetRequestToJSON,
} from '../models/index';

export interface ArtifactSetsControllerGetOperationRequest {
    ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest;
}

export interface ArtifactSetsControllerGetOneRequest {
    ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest;
}

/**
 * ArtifactSetsApi - interface
 * 
 * @export
 * @interface ArtifactSetsApiInterface
 */
export interface ArtifactSetsApiInterface {
    /**
     * 
     * @param {ArtifactSetsControllerGetRequest} ArtifactSetsControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactSetsApiInterface
     */
    artifactSetsControllerGetRaw(requestParameters: ArtifactSetsControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ArtifactSets>>>;

    /**
     */
    artifactSetsControllerGet(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ArtifactSets>>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactSetsApiInterface
     */
    artifactSetsControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ArtifactSets>>>;

    /**
     */
    artifactSetsControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ArtifactSets>>;

    /**
     * 
     * @param {ArtifactSetsControllerGetRequest} ArtifactSetsControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArtifactSetsApiInterface
     */
    artifactSetsControllerGetOneRaw(requestParameters: ArtifactSetsControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ArtifactSets>>;

    /**
     */
    artifactSetsControllerGetOne(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ArtifactSets>;

}

/**
 * 
 */
export class ArtifactSetsApi extends runtime.BaseAPI implements ArtifactSetsApiInterface {

    /**
     */
    async artifactSetsControllerGetRaw(requestParameters: ArtifactSetsControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ArtifactSets>>> {
        if (requestParameters['ArtifactSetsControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'ArtifactSetsControllerGetRequest',
                'Required parameter "ArtifactSetsControllerGetRequest" was null or undefined when calling artifactSetsControllerGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/artifact-sets/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ArtifactSetsControllerGetRequestToJSON(requestParameters['ArtifactSetsControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ArtifactSetsFromJSON));
    }

    /**
     */
    async artifactSetsControllerGet(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ArtifactSets>> {
        const response = await this.artifactSetsControllerGetRaw({ ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async artifactSetsControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ArtifactSets>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/genshin/artifact-sets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ArtifactSetsFromJSON));
    }

    /**
     */
    async artifactSetsControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ArtifactSets>> {
        const response = await this.artifactSetsControllerGetAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async artifactSetsControllerGetOneRaw(requestParameters: ArtifactSetsControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ArtifactSets>> {
        if (requestParameters['ArtifactSetsControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'ArtifactSetsControllerGetRequest',
                'Required parameter "ArtifactSetsControllerGetRequest" was null or undefined when calling artifactSetsControllerGetOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/genshin/artifact-sets/getOne`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ArtifactSetsControllerGetRequestToJSON(requestParameters['ArtifactSetsControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ArtifactSetsFromJSON(jsonValue));
    }

    /**
     */
    async artifactSetsControllerGetOne(ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ArtifactSets> {
        const response = await this.artifactSetsControllerGetOneRaw({ ArtifactSetsControllerGetRequest: ArtifactSetsControllerGetRequest }, initOverrides);
        return await response.value();
    }

}

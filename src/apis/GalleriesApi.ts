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
  GalleriesControllerGetRequest,
  Gallery,
} from '../models/index';
import {
    GalleriesControllerGetRequestFromJSON,
    GalleriesControllerGetRequestToJSON,
    GalleryFromJSON,
    GalleryToJSON,
} from '../models/index';

export interface GalleriesControllerGetOperationRequest {
    GalleriesControllerGetRequest: GalleriesControllerGetRequest;
}

export interface GalleriesControllerGetOneRequest {
    GalleriesControllerGetRequest: GalleriesControllerGetRequest;
}

/**
 * GalleriesApi - interface
 * 
 * @export
 * @interface GalleriesApiInterface
 */
export interface GalleriesApiInterface {
    /**
     * 
     * @param {GalleriesControllerGetRequest} GalleriesControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GalleriesApiInterface
     */
    galleriesControllerGetRaw(requestParameters: GalleriesControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Gallery>>>;

    /**
     */
    galleriesControllerGet(GalleriesControllerGetRequest: GalleriesControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Gallery>>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GalleriesApiInterface
     */
    galleriesControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Gallery>>>;

    /**
     */
    galleriesControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Gallery>>;

    /**
     * 
     * @param {GalleriesControllerGetRequest} GalleriesControllerGetRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GalleriesApiInterface
     */
    galleriesControllerGetOneRaw(requestParameters: GalleriesControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Gallery>>;

    /**
     */
    galleriesControllerGetOne(GalleriesControllerGetRequest: GalleriesControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Gallery>;

}

/**
 * 
 */
export class GalleriesApi extends runtime.BaseAPI implements GalleriesApiInterface {

    /**
     */
    async galleriesControllerGetRaw(requestParameters: GalleriesControllerGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Gallery>>> {
        if (requestParameters['GalleriesControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'GalleriesControllerGetRequest',
                'Required parameter "GalleriesControllerGetRequest" was null or undefined when calling galleriesControllerGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/galleries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GalleriesControllerGetRequestToJSON(requestParameters['GalleriesControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GalleryFromJSON));
    }

    /**
     */
    async galleriesControllerGet(GalleriesControllerGetRequest: GalleriesControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Gallery>> {
        const response = await this.galleriesControllerGetRaw({ GalleriesControllerGetRequest: GalleriesControllerGetRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async galleriesControllerGetAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Gallery>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wiki/galleries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GalleryFromJSON));
    }

    /**
     */
    async galleriesControllerGetAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Gallery>> {
        const response = await this.galleriesControllerGetAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async galleriesControllerGetOneRaw(requestParameters: GalleriesControllerGetOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Gallery>> {
        if (requestParameters['GalleriesControllerGetRequest'] == null) {
            throw new runtime.RequiredError(
                'GalleriesControllerGetRequest',
                'Required parameter "GalleriesControllerGetRequest" was null or undefined when calling galleriesControllerGetOne().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wiki/galleries/getOne`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GalleriesControllerGetRequestToJSON(requestParameters['GalleriesControllerGetRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GalleryFromJSON(jsonValue));
    }

    /**
     */
    async galleriesControllerGetOne(GalleriesControllerGetRequest: GalleriesControllerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Gallery> {
        const response = await this.galleriesControllerGetOneRaw({ GalleriesControllerGetRequest: GalleriesControllerGetRequest }, initOverrides);
        return await response.value();
    }

}

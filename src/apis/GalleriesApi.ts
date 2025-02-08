/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GalleriesControllerCreateRequest,
  GalleriesControllerUpdateRequest,
  Gallery,
} from '../models/index';
import {
    GalleriesControllerCreateRequestFromJSON,
    GalleriesControllerCreateRequestToJSON,
    GalleriesControllerUpdateRequestFromJSON,
    GalleriesControllerUpdateRequestToJSON,
    GalleryFromJSON,
    GalleryToJSON,
} from '../models/index';

export interface GalleriesControllerCreateOperationRequest {
    GalleriesControllerCreateRequest: GalleriesControllerCreateRequest;
}

export interface GalleriesControllerDeleteRequest {
    id: string;
}

export interface GalleriesControllerUpdateOperationRequest {
    GalleriesControllerUpdateRequest: GalleriesControllerUpdateRequest;
}

export interface GalleriesControllerUploadFileRequest {
    comment?: string;
    outletId?: number;
    file?: Blob;
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
     * @param {GalleriesControllerCreateRequest} GalleriesControllerCreateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GalleriesApiInterface
     */
    galleriesControllerCreateRaw(requestParameters: GalleriesControllerCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Gallery>>;

    /**
     */
    galleriesControllerCreate(GalleriesControllerCreateRequest: GalleriesControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Gallery>;

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GalleriesApiInterface
     */
    galleriesControllerDeleteRaw(requestParameters: GalleriesControllerDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    galleriesControllerDelete(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {GalleriesControllerUpdateRequest} GalleriesControllerUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GalleriesApiInterface
     */
    galleriesControllerUpdateRaw(requestParameters: GalleriesControllerUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    galleriesControllerUpdate(GalleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {string} [comment] 
     * @param {number} [outletId] 
     * @param {Blob} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GalleriesApiInterface
     */
    galleriesControllerUploadFileRaw(requestParameters: GalleriesControllerUploadFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    galleriesControllerUploadFile(comment?: string, outletId?: number, file?: Blob, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class GalleriesApi extends runtime.BaseAPI implements GalleriesApiInterface {

    /**
     */
    async galleriesControllerCreateRaw(requestParameters: GalleriesControllerCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Gallery>> {
        if (requestParameters['GalleriesControllerCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'GalleriesControllerCreateRequest',
                'Required parameter "GalleriesControllerCreateRequest" was null or undefined when calling galleriesControllerCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/galleries/admin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GalleriesControllerCreateRequestToJSON(requestParameters['GalleriesControllerCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GalleryFromJSON(jsonValue));
    }

    /**
     */
    async galleriesControllerCreate(GalleriesControllerCreateRequest: GalleriesControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Gallery> {
        const response = await this.galleriesControllerCreateRaw({ GalleriesControllerCreateRequest: GalleriesControllerCreateRequest }, initOverrides);
        return await response.value();
    }

    /**
     */
    async galleriesControllerDeleteRaw(requestParameters: GalleriesControllerDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling galleriesControllerDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/galleries/admin/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async galleriesControllerDelete(id: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.galleriesControllerDeleteRaw({ id: id }, initOverrides);
    }

    /**
     */
    async galleriesControllerUpdateRaw(requestParameters: GalleriesControllerUpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['GalleriesControllerUpdateRequest'] == null) {
            throw new runtime.RequiredError(
                'GalleriesControllerUpdateRequest',
                'Required parameter "GalleriesControllerUpdateRequest" was null or undefined when calling galleriesControllerUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/galleries/admin`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GalleriesControllerUpdateRequestToJSON(requestParameters['GalleriesControllerUpdateRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async galleriesControllerUpdate(GalleriesControllerUpdateRequest: GalleriesControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.galleriesControllerUpdateRaw({ GalleriesControllerUpdateRequest: GalleriesControllerUpdateRequest }, initOverrides);
    }

    /**
     */
    async galleriesControllerUploadFileRaw(requestParameters: GalleriesControllerUploadFileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['comment'] != null) {
            formParams.append('comment', requestParameters['comment'] as any);
        }

        if (requestParameters['outletId'] != null) {
            formParams.append('outletId', requestParameters['outletId'] as any);
        }

        if (requestParameters['file'] != null) {
            formParams.append('file', requestParameters['file'] as any);
        }

        const response = await this.request({
            path: `/galleries/admin/upload`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async galleriesControllerUploadFile(comment?: string, outletId?: number, file?: Blob, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.galleriesControllerUploadFileRaw({ comment: comment, outletId: outletId, file: file }, initOverrides);
    }

}

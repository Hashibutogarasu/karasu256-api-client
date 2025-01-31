/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Gallery } from '../models/Gallery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GalleriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns Gallery
     * @throws ApiError
     */
    public galleriesControllerGet({
        query,
    }: {
        query: {
            page?: number;
            limit?: number;
            id?: string;
            alt?: string;
            key?: string;
            url?: string;
            character?: string;
        },
    }): CancelablePromise<Array<Gallery>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/galleries',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns Gallery
     * @throws ApiError
     */
    public galleriesControllerCreate({
        requestBody,
    }: {
        requestBody: {
            alt: string;
            key?: string;
            url: string;
            character?: string;
        },
    }): CancelablePromise<Gallery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/galleries',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public galleriesControllerUpdate({
        requestBody,
    }: {
        requestBody: {
            id: string;
            alt?: string;
            key?: string;
            url?: string;
            character?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/galleries',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns Gallery
     * @throws ApiError
     */
    public galleriesControllerGetOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<Gallery> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/galleries/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public galleriesControllerDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/galleries/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public galleriesControllerUploadFile({
        formData,
    }: {
        formData: {
            comment?: string;
            outletId?: number;
            file?: Blob;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/galleries/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}

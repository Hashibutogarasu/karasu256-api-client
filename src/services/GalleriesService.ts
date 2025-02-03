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
            id: string;
            createdAt: any;
            updatedAt: any;
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
            url: string;
            alt: string;
            key: string;
            character: string;
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
            url: string;
            alt: string;
            key: string;
            character: string;
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
        query,
    }: {
        query: {
            id: string;
            createdAt: any;
            updatedAt: any;
        },
    }): CancelablePromise<Gallery> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/galleries/getOne',
            query: {
                'query': query,
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
}

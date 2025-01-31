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
     * @returns any
     * @throws ApiError
     */
    public galleriesControllerDelete({
        requestBody,
    }: {
        requestBody: {
            id: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
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
}

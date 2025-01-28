/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CountriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any
     * @throws ApiError
     */
    public countriesControllerGet({
        query,
    }: {
        query: {
            page?: string;
            limit?: string;
            id?: number;
            name?: string;
            description?: string;
            icon_url?: string;
            version?: string;
        },
    }): CancelablePromise<Array<Record<string, any>>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/admin/countries',
            path: {
                'query': query,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public countriesControllerCreate({
        requestBody,
    }: {
        requestBody: {
            name: string;
            description?: string;
            icon_url?: string;
            sumbnail_url?: string;
            version?: string;
        },
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/admin/countries',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public countriesControllerUpdate({
        requestBody,
    }: {
        requestBody: {
            id: number;
            name?: string;
            description?: string;
            icon_url?: string;
            version?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/wiki/genshin/admin/countries',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public countriesControllerGetOne({
        param,
    }: {
        param: {
            id?: string;
        },
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/admin/countries/{id}',
            path: {
                'param': param,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public countriesControllerDelete({
        param,
    }: {
        param: {
            id?: number;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/admin/countries/{id}',
            path: {
                'param': param,
            },
        });
    }
}

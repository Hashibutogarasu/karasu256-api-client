/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Country } from '../models/Country';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CountriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns Country
     * @throws ApiError
     */
    public countriesControllerGet({
        query,
    }: {
        query: {
            id?: string;
            name?: string;
            description?: string;
            icon_url?: string;
            version?: string;
        },
    }): CancelablePromise<Array<Country>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/countries',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns Country
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
    }): CancelablePromise<Country> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/countries',
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
            id: string;
            name?: string;
            description?: string;
            icon_url?: string;
            version?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/wiki/genshin/countries',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns Country
     * @throws ApiError
     */
    public countriesControllerGetOne({
        query,
    }: {
        query: {
            id?: string;
            name?: string;
            description?: string;
            icon_url?: string;
            version?: string;
        },
    }): CancelablePromise<Country> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/countries/getOne',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public countriesControllerDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/countries/{id}',
            path: {
                'id': id,
            },
        });
    }
}

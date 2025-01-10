/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenshinCountryEntity } from '../models/GenshinCountryEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CountriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns GenshinCountryEntity
     * @throws ApiError
     */
    public countriesControllerGetCountries({
        authorization = 'Bearer {{token}}',
    }: {
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<GenshinCountryEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/countries',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns GenshinCountryEntity
     * @throws ApiError
     */
    public countriesControllerGetCountryBySlug({
        slug,
        authorization = 'Bearer {{token}}',
    }: {
        slug: {
            slug: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<GenshinCountryEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/countries/profile/{slug}',
            path: {
                'slug': slug,
            },
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public countriesControllerCreateCountry({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            name: string;
            slug: string;
            description: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/countries/create',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public countriesControllerUpdateCountry({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            id: string;
            name?: string;
            slug?: string;
            description?: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/countries/update',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public countriesControllerDeleteCountry({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            id: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/genshin/countries/delete',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

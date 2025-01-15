/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactSet } from '../models/ArtifactSet';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ArtifactSet
     * @throws ApiError
     */
    public setsControllerGetAll(): CancelablePromise<Array<ArtifactSet>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/artifacts/sets/all',
        });
    }
    /**
     * @returns ArtifactSet
     * @throws ApiError
     */
    public setsControllerGet({
        query,
    }: {
        query: {
            id?: string;
            name?: string;
            slug?: string;
            description?: string;
            icon_url?: string;
            oneSetBonus?: string;
            twoSetBonus?: string;
            fourSetBonus?: string;
        },
    }): CancelablePromise<ArtifactSet> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/artifacts/sets',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public setsControllerUpdate({
        requestBody,
    }: {
        requestBody: {
            id: string;
            entity: {
                id?: string;
                name?: string;
                slug?: string;
                description?: string;
                icon_url?: string;
                oneSetBonus?: string;
                twoSetBonus?: string;
                fourSetBonus?: string;
            };
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/artifacts/sets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public setsControllerDelete({
        requestBody,
    }: {
        requestBody: {
            id: string;
            entity: {
                id: string;
            };
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/artifacts/sets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public setsControllerCreate({
        requestBody,
    }: {
        requestBody: {
            id?: string;
            name?: string;
            slug?: string;
            description?: string;
            icon_url?: string;
            oneSetBonus?: string;
            twoSetBonus?: string;
            fourSetBonus?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/artifacts/sets/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

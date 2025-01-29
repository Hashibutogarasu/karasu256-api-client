/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifacts } from '../models/Artifacts';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns Artifacts
     * @throws ApiError
     */
    public artifactsControllerGet({
        query,
    }: {
        query: {
            page?: number;
            limit?: number;
            id?: string;
            name?: string;
            description?: string;
            icon_url?: string;
            one_set_effect?: string;
            two_set_effect?: string;
            four_set_effect?: string;
            version?: string;
        },
    }): CancelablePromise<Array<Artifacts>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/artifacts',
            path: {
                'query': query,
            },
        });
    }
    /**
     * @returns Artifacts
     * @throws ApiError
     */
    public artifactsControllerCreate({
        requestBody,
    }: {
        requestBody: {
            name: string;
            description?: string;
            icon_url?: string;
            one_set_effect?: string;
            two_set_effect?: string;
            four_set_effect?: string;
            version?: string;
        },
    }): CancelablePromise<Artifacts> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/artifacts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public artifactsControllerUpdate({
        requestBody,
    }: {
        requestBody: {
            id: string;
            name?: string;
            description?: string;
            icon_url?: string;
            one_set_effect?: string;
            two_set_effect?: string;
            four_set_effect?: string;
            version?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/wiki/genshin/artifacts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns Artifacts
     * @throws ApiError
     */
    public artifactsControllerGetOne({
        param,
    }: {
        param: {
            id?: string;
        },
    }): CancelablePromise<Artifacts> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/artifacts/{id}',
            path: {
                'param': param,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public artifactsControllerDelete({
        param,
    }: {
        param: {
            id: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/artifacts/{id}',
            path: {
                'param': param,
            },
        });
    }
}

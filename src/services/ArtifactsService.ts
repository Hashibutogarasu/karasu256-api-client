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
            id: string;
            createdAt: any;
            updatedAt: any;
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
            query: {
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
        query,
    }: {
        query: {
            id: string;
            createdAt: any;
            updatedAt: any;
            name?: string;
            description?: string;
            icon_url?: string;
            one_set_effect?: string;
            two_set_effect?: string;
            four_set_effect?: string;
            version?: string;
        },
    }): CancelablePromise<Artifacts> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/artifacts/getOne',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public artifactsControllerDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/artifacts/{id}',
            path: {
                'id': id,
            },
        });
    }
}

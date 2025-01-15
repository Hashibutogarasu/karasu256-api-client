/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from '../models/Artifact';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns Artifact
     * @throws ApiError
     */
    public artifactsControllerGet({
        query,
    }: {
        query: {
            id?: string;
            name?: string;
            slug?: string;
        },
    }): CancelablePromise<Artifact> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/artifacts',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public artifactsControllerCreate({
        requestBody,
    }: {
        requestBody: {
            id?: string;
            name?: string;
            slug?: string;
            description?: string;
            icon_url?: string;
            artifactSet?: {
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
            url: '/wiki/genshin/artifacts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public artifactsControllerDelete({
        requestBody,
    }: {
        requestBody: {
            id: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/artifacts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns Artifact
     * @throws ApiError
     */
    public artifactsControllerGetAll(): CancelablePromise<Array<Artifact>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/artifacts/all',
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
            entity: {
                id?: string;
                name?: string;
                slug?: string;
                description?: string;
                icon_url?: string;
                artifactSet?: {
                    id?: string;
                    name?: string;
                    slug?: string;
                    description?: string;
                    icon_url?: string;
                    oneSetBonus?: string;
                    twoSetBonus?: string;
                    fourSetBonus?: string;
                };
            };
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/artifacts/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

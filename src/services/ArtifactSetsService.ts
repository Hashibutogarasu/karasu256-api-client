/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactSets } from '../models/ArtifactSets';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactSetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ArtifactSets
     * @throws ApiError
     */
    public artifactSetsControllerGet({
        query,
    }: {
        query: {
            page?: number;
            limit?: number;
            id?: string;
            name?: string;
            description?: string;
            icon_url?: string;
            version?: string;
        },
    }): CancelablePromise<Array<ArtifactSets>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/artifact-sets',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns ArtifactSets
     * @throws ApiError
     */
    public artifactSetsControllerCreate({
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
    }): CancelablePromise<ArtifactSets> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/artifact-sets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public artifactSetsControllerUpdate({
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
            url: '/wiki/genshin/artifact-sets',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns ArtifactSets
     * @throws ApiError
     */
    public artifactSetsControllerGetOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<ArtifactSets> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/artifact-sets/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public artifactSetsControllerDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/artifact-sets/{id}',
            path: {
                'id': id,
            },
        });
    }
}

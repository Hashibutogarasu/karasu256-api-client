/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenshinArtifactSetEntity } from '../models/GenshinArtifactSetEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactSetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns GenshinArtifactSetEntity
     * @throws ApiError
     */
    public artifactSetsControllerFindAll({
        authorization = 'Bearer {{token}}',
    }: {
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<GenshinArtifactSetEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/artifact-sets',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns GenshinArtifactSetEntity
     * @throws ApiError
     */
    public artifactSetsControllerFindBySlug({
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
    }): CancelablePromise<GenshinArtifactSetEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/artifact-sets/{slug}',
            path: {
                'slug': slug,
            },
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns GenshinArtifactSetEntity
     * @throws ApiError
     */
    public artifactSetsControllerFind({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            id?: string;
            name?: string;
            slug?: string;
            description?: string;
            artifactIds?: Array<string>;
            recommendedSubStats?: Array<string>;
            characters?: Array<string>;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<GenshinArtifactSetEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/artifact-sets/find',
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
    public artifactSetsControllerCreate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            name: string;
            slug: string;
            description: string;
            artifactIds: Array<string>;
            recommendedSubStats?: Array<string>;
            characters?: Array<string>;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/artifact-sets/create',
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
    public artifactSetsControllerUpdate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            id: string;
            slug?: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/artifact-sets/update',
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
    public artifactSetsControllerDelete({
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
            url: '/genshin/artifact-sets/delete',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

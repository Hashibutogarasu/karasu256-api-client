/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FindCharacterDto } from '../models/FindCharacterDto';
import type { GenshinCharacterEntity } from '../models/GenshinCharacterEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CharactersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns GenshinCharacterEntity
     * @throws ApiError
     */
    public charactersControllerFind({
        queryParams,
        authorization = 'Bearer {{token}}',
    }: {
        queryParams?: FindCharacterDto,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<GenshinCharacterEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/characters',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'queryParams': queryParams,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public charactersControllerFindBySlug({
        slug,
        authorization = 'Bearer {{token}}',
    }: {
        slug: string,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/characters/profile/{slug}',
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
    public charactersControllerCreate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            entry_page_id?: string;
            name: string;
            slug: string;
            description: string;
            weaponType?: string;
            element?: string;
            rarity?: number;
            image?: string;
            country: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/characters/create',
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
    public charactersControllerUpdate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            id: string;
            entry_page_id?: string;
            name?: string;
            slug?: string;
            description?: string;
            weaponType?: string;
            element?: string;
            rarity?: number;
            image?: string;
            country?: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/characters/update',
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
    public charactersControllerDelete({
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
            url: '/genshin/characters/delete',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

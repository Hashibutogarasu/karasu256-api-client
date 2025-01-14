/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacterInfo } from '../models/CharacterInfo';
import type { CharacterListEntity } from '../models/CharacterListEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CharactersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any
     * @throws ApiError
     */
    public charactersControllerGetInfo({
        queryParams,
        authorization = 'Bearer {{token}}',
    }: {
        queryParams?: {
            entry_page_id: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters/admin/info',
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
    public charactersControllerGetEntryPageList({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            filters?: Array<any>;
            menu_id?: string;
            page_num?: number;
            page_size?: number;
            use_es?: boolean;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/characters/admin/get_entry_page_list',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns CharacterListEntity
     * @throws ApiError
     */
    public charactersControllerGetCharacters({
        authorization = 'Bearer {{token}}',
    }: {
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<CharacterListEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns CharacterInfo
     * @throws ApiError
     */
    public charactersControllerGetByName({
        name,
        authorization = 'Bearer {{token}}',
    }: {
        name: string,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<CharacterInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters/profile/{name}/info',
            path: {
                'name': name,
            },
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns CharacterListEntity
     * @throws ApiError
     */
    public charactersControllerGetCharacterByName({
        name,
        authorization = 'Bearer {{token}}',
    }: {
        name: string,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<CharacterListEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters/profile/{name}',
            path: {
                'name': name,
            },
            headers: {
                'Authorization': authorization,
            },
        });
    }
}

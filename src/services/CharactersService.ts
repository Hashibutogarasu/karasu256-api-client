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
    }: {
        queryParams?: {
            entry_page_id: string;
        },
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters/admin/info',
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
    }: {
        requestBody: {
            filters?: Array<any>;
            menu_id?: string;
            page_num?: number;
            page_size?: number;
            use_es?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/characters/admin/get_entry_page_list',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns CharacterListEntity
     * @throws ApiError
     */
    public charactersControllerGetCharacters(): CancelablePromise<Array<CharacterListEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters',
        });
    }
    /**
     * @returns CharacterInfo
     * @throws ApiError
     */
    public charactersControllerGetByName({
        name,
    }: {
        name: string,
    }): CancelablePromise<CharacterInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters/profile/{name}/info',
            path: {
                'name': name,
            },
        });
    }
    /**
     * @returns CharacterListEntity
     * @throws ApiError
     */
    public charactersControllerGetCharacterByName({
        name,
    }: {
        name: string,
    }): CancelablePromise<CharacterListEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters/profile/{name}',
            path: {
                'name': name,
            },
        });
    }
}

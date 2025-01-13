/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacterInfo } from '../models/CharacterInfo';
import type { CharacterListEntity } from '../models/CharacterListEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WikiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any
     * @throws ApiError
     */
    public wikiControllerGetInfo({
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
            url: '/genshin/wiki/info',
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
    public wikiControllerSave({
        queryParams,
        authorization = 'Bearer {{token}}',
    }: {
        queryParams?: {
            limit: string;
            page: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<Record<string, any>>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/wiki/save',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'queryParams': queryParams,
            },
        });
    }
    /**
     * @returns CharacterListEntity
     * @throws ApiError
     */
    public wikiControllerGetAll({
        authorization = 'Bearer {{token}}',
    }: {
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<CharacterListEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/wiki',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns CharacterInfo
     * @throws ApiError
     */
    public wikiControllerGetByName({
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
            url: '/genshin/wiki/{name}/info',
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
    public wikiControllerGet({
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
            url: '/genshin/wiki/{name}',
            path: {
                'name': name,
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
    public wikiControllerGetEntryPageList({
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
            url: '/genshin/wiki/get_entry_page_list',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

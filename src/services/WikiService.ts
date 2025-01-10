/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenshinCharacterEntity } from '../models/GenshinCharacterEntity';
import type { SaveCharacterDto } from '../models/SaveCharacterDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WikiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any
     * @throws ApiError
     */
    public wikiControllerGetData({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            filters: Array<any>;
            menu_id: string;
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
            url: '/genshin/wiki',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns GenshinCharacterEntity
     * @throws ApiError
     */
    public wikiControllerGetAll({
        authorization = 'Bearer {{token}}',
    }: {
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<GenshinCharacterEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/wiki',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public wikiControllerGetInfo({
        authorization = 'Bearer {{token}}',
    }: {
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
        queryParams?: SaveCharacterDto,
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
     * @returns any
     * @throws ApiError
     */
    public wikiControllerGetByName({
        name,
        authorization = 'Bearer {{token}}',
    }: {
        name: {
            name: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
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
     * @returns GenshinCharacterEntity
     * @throws ApiError
     */
    public wikiControllerGet({
        name,
        authorization = 'Bearer {{token}}',
    }: {
        name: {
            name: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<GenshinCharacterEntity> {
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
}

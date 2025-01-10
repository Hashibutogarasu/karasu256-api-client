/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FindElementDto } from '../models/FindElementDto';
import type { GenshinElementEntity } from '../models/GenshinElementEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ElementsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns GenshinElementEntity
     * @throws ApiError
     */
    public elementsControllerFind({
        queryParams,
        authorization = 'Bearer {{token}}',
    }: {
        queryParams?: FindElementDto,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<GenshinElementEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/elements',
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
    public elementsControllerCreate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            name?: string;
            slug?: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/elements/create',
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
    public elementsControllerUpdate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            id: string;
            name?: string;
            slug?: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/elements/update',
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
    public elementsControllerDelete({
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
            url: '/genshin/elements/delete',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

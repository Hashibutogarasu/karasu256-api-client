/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Weapon } from '../models/Weapon';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WeaponsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns Weapon
     * @throws ApiError
     */
    public weaponsControllerGet({
        query,
    }: {
        query: {
            page?: string;
            limit?: string;
            id?: number;
            name?: string;
            description?: string;
            icon_url?: string;
            type?: string;
            rarity?: number;
            effect?: string;
            version?: string;
            createdAt?: string;
            updatedAt?: string;
        },
    }): CancelablePromise<Array<Weapon>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/admin/weapons',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns Weapon
     * @throws ApiError
     */
    public weaponsControllerCreate({
        requestBody,
    }: {
        requestBody: {
            name: string;
            description?: string;
            icon_url?: string;
            type: string;
            rarity?: number;
            effect?: string;
            version?: string;
        },
    }): CancelablePromise<Weapon> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/admin/weapons',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public weaponsControllerUpdate({
        requestBody,
    }: {
        requestBody: {
            id: number;
            name?: string;
            description?: string;
            icon_url?: string;
            header_img_url?: string;
            element?: string;
            country?: string;
            weapon_type?: string;
            rarity?: number;
            version?: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/wiki/genshin/admin/weapons',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns Weapon
     * @throws ApiError
     */
    public weaponsControllerGetOne({
        param,
    }: {
        param: {
            id?: string;
        },
    }): CancelablePromise<Weapon> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/admin/weapons/{id}',
            path: {
                'param': param,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public weaponsControllerDelete({
        param,
    }: {
        param: {
            id?: number;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/admin/weapons/{id}',
            path: {
                'param': param,
            },
        });
    }
}

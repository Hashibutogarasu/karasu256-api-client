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
            page?: number;
            limit?: number;
            id?: string;
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
            url: '/wiki/genshin/weapons',
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
            rarity: number;
            effect?: string;
            version?: string;
        },
    }): CancelablePromise<Weapon> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/weapons',
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
            id: string;
            name?: string;
            description?: string;
            icon_url?: string;
            header_img_url?: string;
            element?: string;
            country?: string;
            weapon_type?: string;
            rarity?: number;
            version?: string;
            unimplemented?: boolean;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/wiki/genshin/weapons',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns Weapon
     * @throws ApiError
     */
    public weaponsControllerGetOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<Weapon> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/weapons/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public weaponsControllerDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/weapons/{id}',
            path: {
                'id': id,
            },
        });
    }
}

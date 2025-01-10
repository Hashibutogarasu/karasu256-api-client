/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FindWeaponDto } from '../models/FindWeaponDto';
import type { GenshinWeaponEntity } from '../models/GenshinWeaponEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WeaponsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns GenshinWeaponEntity
     * @throws ApiError
     */
    public weaponsControllerFindAll({
        queryParams,
        authorization = 'Bearer {{token}}',
    }: {
        queryParams?: FindWeaponDto,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<GenshinWeaponEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/weapons',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'queryParams': queryParams,
            },
        });
    }
    /**
     * @returns GenshinWeaponEntity
     * @throws ApiError
     */
    public weaponsControllerFindOne({
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
    }): CancelablePromise<GenshinWeaponEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/weapons/{slug}',
            path: {
                'slug': slug,
            },
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns GenshinWeaponEntity
     * @throws ApiError
     */
    public weaponsControllerCreate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            name: string;
            slug: string;
            type?: string;
            rarity: number;
            baseAttack: number;
            subStat: string;
            subStatValue: number;
            subStatType?: string;
            specialAbility: string;
            specialAbilityDescription: string;
            description: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<GenshinWeaponEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/weapons/create',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns GenshinWeaponEntity
     * @throws ApiError
     */
    public weaponsControllerUpdate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            id: string;
            name?: string;
            slug?: string;
            type?: string;
            rarity?: number;
            baseAttack?: number;
            subStat?: string;
            subStatValue?: number;
            specialAbility?: string;
            specialAbilityDescription?: string;
            description?: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<GenshinWeaponEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/weapons/update',
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
    public weaponsControllerDelete({
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
            url: '/genshin/weapons/delete',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

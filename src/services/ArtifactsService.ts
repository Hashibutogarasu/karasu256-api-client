/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenshinArtifactEntity } from '../models/GenshinArtifactEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns GenshinArtifactEntity
     * @throws ApiError
     */
    public artifactsControllerFindAll({
        authorization = 'Bearer {{token}}',
    }: {
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Array<GenshinArtifactEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/artifacts',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns GenshinArtifactEntity
     * @throws ApiError
     */
    public artifactsControllerFindBySlug({
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
    }): CancelablePromise<GenshinArtifactEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/genshin/artifacts/{slug}',
            path: {
                'slug': slug,
            },
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns GenshinArtifactEntity
     * @throws ApiError
     */
    public artifactsControllerCreate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            name: string;
            slug: string;
            description: string;
            part: string;
            mainStat?: 'atk' | 'hp' | 'def' | 'atk_percent' | 'hp_percent' | 'def_percent' | 'elemental_mastery' | 'energy_recharge' | 'crit_rate' | 'crit_damage' | 'healing_bonus' | 'anemo_damage_bonus' | 'geo_damage_bonus' | 'electro_damage_bonus' | 'hydro_damage_bonus' | 'pyro_damage_bonus' | 'cryo_damage_bonus' | 'physical_damage_bonus';
            mainStatValueType?: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<GenshinArtifactEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/artifacts/create',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns GenshinArtifactEntity
     * @throws ApiError
     */
    public artifactsControllerUpdate({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            id: string;
            name?: string;
            slug?: string;
            description?: string;
            part?: string;
            mainStat?: 'atk' | 'hp' | 'def' | 'atk_percent' | 'hp_percent' | 'def_percent' | 'elemental_mastery' | 'energy_recharge' | 'crit_rate' | 'crit_damage' | 'healing_bonus' | 'anemo_damage_bonus' | 'geo_damage_bonus' | 'electro_damage_bonus' | 'hydro_damage_bonus' | 'pyro_damage_bonus' | 'cryo_damage_bonus' | 'physical_damage_bonus';
            mainStatValueType?: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<GenshinArtifactEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/genshin/artifacts/update',
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
    public artifactsControllerDelete({
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
            url: '/genshin/artifacts/delete',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

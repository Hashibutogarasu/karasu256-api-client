/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Character } from '../models/Character';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CharactersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns Character
     * @throws ApiError
     */
    public charactersControllerGet({
        query,
    }: {
        query: {
            page?: number;
            limit?: number;
            id?: string;
            name?: string;
            description?: string;
            icon_url?: string;
            element?: string;
            country?: string;
            weapon?: string;
            header_img_url?: string;
            rarity?: number;
            version?: string;
            createdAt?: string;
            updatedAt?: string;
        },
    }): CancelablePromise<Array<Character>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns Character
     * @throws ApiError
     */
    public charactersControllerCreate({
        requestBody,
    }: {
        requestBody: {
            name: string;
            description?: string;
            icon_url?: string;
            element: string;
            country: string;
            weapon?: string;
            header_img_url?: string;
            artifact_set?: Array<string>;
            weapon_type?: string;
            rarity?: number;
            version?: string;
        },
    }): CancelablePromise<Character> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/characters',
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
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/wiki/genshin/characters',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns Character
     * @throws ApiError
     */
    public charactersControllerGetOne({
        id,
    }: {
        id: string,
    }): CancelablePromise<Character> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wiki/genshin/characters/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public charactersControllerDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/wiki/genshin/characters/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns Character
     * @throws ApiError
     */
    public charactersControllerImportFromHoyoLab({
        query,
    }: {
        query: {
            entry_page_id: string;
        },
    }): CancelablePromise<Character> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/characters/importFromHoyoLab',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns Character
     * @throws ApiError
     */
    public charactersControllerImport({
        requestBody,
    }: {
        requestBody: {
            id: string;
            name: string;
            desc: string;
            icon_url: string;
            header_img_url: string;
            modules?: Array<{
                name: string;
                is_posed?: boolean;
                components?: Array<{
                    component_id: string;
                    layout: string;
                    data?: string;
                    style: string;
                }>;
                id: string;
                is_customize_name?: boolean;
                is_abstract?: boolean;
                is_show_switch?: boolean;
                switch?: boolean;
                desc: string;
                repeated?: boolean;
                is_submodule?: boolean;
                origin_module_id: string;
                without_border?: boolean;
                can_delete?: boolean;
                is_hidden?: boolean;
                rich_text_editing?: boolean;
            }>;
            filter_values: {
                character_property?: {
                    values?: Array<string>;
                    value_types?: Array<{
                        id: string;
                        value: string;
                        mi18n_key: string;
                        icon?: string;
                        icon_url?: string;
                        enum_string: string;
                    }>;
                    key: {
                        key: string;
                        text: string;
                        values?: Array<string>;
                        mi18n_key: string;
                        is_multi_select?: boolean;
                        id: string;
                        is_hidden?: boolean;
                        updated_at: string;
                    } | null;
                };
                character_weapon?: {
                    values?: Array<string>;
                    value_types?: Array<{
                        id: string;
                        value: string;
                        mi18n_key: string;
                        icon?: string;
                        icon_url?: string;
                        enum_string: string;
                    }>;
                    key: {
                        key: string;
                        text: string;
                        values?: Array<string>;
                        mi18n_key: string;
                        is_multi_select?: boolean;
                        id: string;
                        is_hidden?: boolean;
                        updated_at: string;
                    } | null;
                };
                character_rarity?: {
                    values?: Array<string>;
                    value_types?: Array<{
                        id: string;
                        value: string;
                        mi18n_key: string;
                        icon?: string;
                        icon_url?: string;
                        enum_string: string;
                    }>;
                    key: {
                        key: string;
                        text: string;
                        values?: Array<string>;
                        mi18n_key: string;
                        is_multi_select?: boolean;
                        id: string;
                        is_hidden?: boolean;
                        updated_at: string;
                    } | null;
                };
                character_vision?: {
                    values?: Array<string>;
                    value_types?: Array<{
                        id: string;
                        value: string;
                        mi18n_key: string;
                        icon?: string;
                        icon_url?: string;
                        enum_string: string;
                    }>;
                    key: {
                        key: string;
                        text: string;
                        values?: Array<string>;
                        mi18n_key: string;
                        is_multi_select?: boolean;
                        id: string;
                        is_hidden?: boolean;
                        updated_at: string;
                    } | null;
                };
                character_region?: {
                    values?: Array<string>;
                    value_types?: Array<{
                        id: string;
                        value: string;
                        mi18n_key: string;
                        icon?: string;
                        icon_url?: string;
                        enum_string: string;
                    }>;
                    key: {
                        key: string;
                        text: string;
                        values?: Array<string>;
                        mi18n_key: string;
                        is_multi_select?: boolean;
                        id: string;
                        is_hidden?: boolean;
                        updated_at: string;
                    } | null;
                };
            };
            menu_id: string;
            menu_name: string;
            version: string;
            langs?: Array<string>;
            template_layout: any;
            edit_lock_status: string;
            correct_lock_status: string;
            template_id: string;
            ext: {
                fe_ext: string;
                post_ext: {
                    post_id: string;
                    post_user_name: string;
                    post_time: string;
                    post_avater_url?: string;
                    url: string;
                };
                server_ext: string;
                personalized_color: string;
                scrolling_text: string;
                corner_mark: string;
            };
            alias_name: string;
            lang: string;
            beta?: boolean;
            page_type: string;
            menu_style: string;
        },
    }): CancelablePromise<Character> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/wiki/genshin/characters/import',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

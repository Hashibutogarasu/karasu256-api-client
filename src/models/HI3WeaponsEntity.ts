/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.34
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { HI3Characters } from './HI3Characters';
import {
    HI3CharactersFromJSON,
    HI3CharactersFromJSONTyped,
    HI3CharactersToJSON,
    HI3CharactersToJSONTyped,
} from './HI3Characters';

/**
 * 
 * @export
 * @interface HI3WeaponsEntity
 */
export interface HI3WeaponsEntity {
    /**
     * 
     * @type {string}
     * @memberof HI3WeaponsEntity
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof HI3WeaponsEntity
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3WeaponsEntity
     */
    skill?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3WeaponsEntity
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3WeaponsEntity
     */
    icon_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3WeaponsEntity
     */
    thumbnail_url?: string | null;
    /**
     * 
     * @type {number}
     * @memberof HI3WeaponsEntity
     */
    rarity?: number | null;
    /**
     * 
     * @type {number}
     * @memberof HI3WeaponsEntity
     */
    max_level?: number | null;
    /**
     * 
     * @type {string}
     * @memberof HI3WeaponsEntity
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof HI3WeaponsEntity
     */
    base_atk?: number | null;
    /**
     * 
     * @type {number}
     * @memberof HI3WeaponsEntity
     */
    crit?: number | null;
    /**
     * 
     * @type {HI3Characters}
     * @memberof HI3WeaponsEntity
     */
    characters?: HI3Characters | null;
}

/**
 * Check if a given object implements the HI3WeaponsEntity interface.
 */
export function instanceOfHI3WeaponsEntity(value: object): value is HI3WeaponsEntity {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function HI3WeaponsEntityFromJSON(json: any): HI3WeaponsEntity {
    return HI3WeaponsEntityFromJSONTyped(json, false);
}

export function HI3WeaponsEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): HI3WeaponsEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'skill': json['skill'] == null ? undefined : json['skill'],
        'type': json['type'] == null ? undefined : json['type'],
        'icon_url': json['icon_url'] == null ? undefined : json['icon_url'],
        'thumbnail_url': json['thumbnail_url'] == null ? undefined : json['thumbnail_url'],
        'rarity': json['rarity'] == null ? undefined : json['rarity'],
        'max_level': json['max_level'] == null ? undefined : json['max_level'],
        'description': json['description'] == null ? undefined : json['description'],
        'base_atk': json['base_atk'] == null ? undefined : json['base_atk'],
        'crit': json['crit'] == null ? undefined : json['crit'],
        'characters': json['characters'] == null ? undefined : HI3CharactersFromJSON(json['characters']),
    };
}

export function HI3WeaponsEntityToJSON(json: any): HI3WeaponsEntity {
    return HI3WeaponsEntityToJSONTyped(json, false);
}

export function HI3WeaponsEntityToJSONTyped(value?: HI3WeaponsEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'skill': value['skill'],
        'type': value['type'],
        'icon_url': value['icon_url'],
        'thumbnail_url': value['thumbnail_url'],
        'rarity': value['rarity'],
        'max_level': value['max_level'],
        'description': value['description'],
        'base_atk': value['base_atk'],
        'crit': value['crit'],
        'characters': HI3CharactersToJSON(value['characters']),
    };
}


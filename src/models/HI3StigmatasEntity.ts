/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.31
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
 * @interface HI3StigmatasEntity
 */
export interface HI3StigmatasEntity {
    /**
     * 
     * @type {string}
     * @memberof HI3StigmatasEntity
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof HI3StigmatasEntity
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3StigmatasEntity
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3StigmatasEntity
     */
    skill?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3StigmatasEntity
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3StigmatasEntity
     */
    two_set_skill?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3StigmatasEntity
     */
    three_set_skill?: string | null;
    /**
     * 
     * @type {number}
     * @memberof HI3StigmatasEntity
     */
    max_level?: number | null;
    /**
     * 
     * @type {string}
     * @memberof HI3StigmatasEntity
     */
    icon_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3StigmatasEntity
     */
    thumbnail_url?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof HI3StigmatasEntity
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof HI3StigmatasEntity
     */
    updatedAt: Date;
    /**
     * 
     * @type {HI3Characters}
     * @memberof HI3StigmatasEntity
     */
    characters?: HI3Characters | null;
}

/**
 * Check if a given object implements the HI3StigmatasEntity interface.
 */
export function instanceOfHI3StigmatasEntity(value: object): value is HI3StigmatasEntity {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function HI3StigmatasEntityFromJSON(json: any): HI3StigmatasEntity {
    return HI3StigmatasEntityFromJSONTyped(json, false);
}

export function HI3StigmatasEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): HI3StigmatasEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'skill': json['skill'] == null ? undefined : json['skill'],
        'type': json['type'] == null ? undefined : json['type'],
        'two_set_skill': json['two_set_skill'] == null ? undefined : json['two_set_skill'],
        'three_set_skill': json['three_set_skill'] == null ? undefined : json['three_set_skill'],
        'max_level': json['max_level'] == null ? undefined : json['max_level'],
        'icon_url': json['icon_url'] == null ? undefined : json['icon_url'],
        'thumbnail_url': json['thumbnail_url'] == null ? undefined : json['thumbnail_url'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'characters': json['characters'] == null ? undefined : HI3CharactersFromJSON(json['characters']),
    };
}

export function HI3StigmatasEntityToJSON(json: any): HI3StigmatasEntity {
    return HI3StigmatasEntityToJSONTyped(json, false);
}

export function HI3StigmatasEntityToJSONTyped(value?: HI3StigmatasEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'skill': value['skill'],
        'type': value['type'],
        'two_set_skill': value['two_set_skill'],
        'three_set_skill': value['three_set_skill'],
        'max_level': value['max_level'],
        'icon_url': value['icon_url'],
        'thumbnail_url': value['thumbnail_url'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'characters': HI3CharactersToJSON(value['characters']),
    };
}


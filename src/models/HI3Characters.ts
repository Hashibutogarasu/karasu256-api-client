/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 4.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { HI3WeaponsEntity } from './HI3WeaponsEntity';
import {
    HI3WeaponsEntityFromJSON,
    HI3WeaponsEntityFromJSONTyped,
    HI3WeaponsEntityToJSON,
    HI3WeaponsEntityToJSONTyped,
} from './HI3WeaponsEntity';
import type { HI3StigmatasEntity } from './HI3StigmatasEntity';
import {
    HI3StigmatasEntityFromJSON,
    HI3StigmatasEntityFromJSONTyped,
    HI3StigmatasEntityToJSON,
    HI3StigmatasEntityToJSONTyped,
} from './HI3StigmatasEntity';
import type { HI3SkillsEntity } from './HI3SkillsEntity';
import {
    HI3SkillsEntityFromJSON,
    HI3SkillsEntityFromJSONTyped,
    HI3SkillsEntityToJSON,
    HI3SkillsEntityToJSONTyped,
} from './HI3SkillsEntity';

/**
 * 
 * @export
 * @interface HI3Characters
 */
export interface HI3Characters {
    /**
     * 
     * @type {string}
     * @memberof HI3Characters
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof HI3Characters
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof HI3Characters
     */
    sub_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3Characters
     */
    icon_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3Characters
     */
    thumbnail_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HI3Characters
     */
    description?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof HI3Characters
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof HI3Characters
     */
    updatedAt: Date;
    /**
     * 
     * @type {Array<HI3SkillsEntity>}
     * @memberof HI3Characters
     */
    skills?: Array<HI3SkillsEntity> | null;
    /**
     * 
     * @type {Array<HI3StigmatasEntity>}
     * @memberof HI3Characters
     */
    stigmatas?: Array<HI3StigmatasEntity> | null;
    /**
     * 
     * @type {Array<HI3WeaponsEntity>}
     * @memberof HI3Characters
     */
    weapons?: Array<HI3WeaponsEntity> | null;
}

/**
 * Check if a given object implements the HI3Characters interface.
 */
export function instanceOfHI3Characters(value: object): value is HI3Characters {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function HI3CharactersFromJSON(json: any): HI3Characters {
    return HI3CharactersFromJSONTyped(json, false);
}

export function HI3CharactersFromJSONTyped(json: any, ignoreDiscriminator: boolean): HI3Characters {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'sub_name': json['sub_name'] == null ? undefined : json['sub_name'],
        'icon_url': json['icon_url'] == null ? undefined : json['icon_url'],
        'thumbnail_url': json['thumbnail_url'] == null ? undefined : json['thumbnail_url'],
        'description': json['description'] == null ? undefined : json['description'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'skills': json['skills'] == null ? undefined : ((json['skills'] as Array<any>).map(HI3SkillsEntityFromJSON)),
        'stigmatas': json['stigmatas'] == null ? undefined : ((json['stigmatas'] as Array<any>).map(HI3StigmatasEntityFromJSON)),
        'weapons': json['weapons'] == null ? undefined : ((json['weapons'] as Array<any>).map(HI3WeaponsEntityFromJSON)),
    };
}

export function HI3CharactersToJSON(json: any): HI3Characters {
    return HI3CharactersToJSONTyped(json, false);
}

export function HI3CharactersToJSONTyped(value?: HI3Characters | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'sub_name': value['sub_name'],
        'icon_url': value['icon_url'],
        'thumbnail_url': value['thumbnail_url'],
        'description': value['description'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'skills': value['skills'] == null ? undefined : ((value['skills'] as Array<any>).map(HI3SkillsEntityToJSON)),
        'stigmatas': value['stigmatas'] == null ? undefined : ((value['stigmatas'] as Array<any>).map(HI3StigmatasEntityToJSON)),
        'weapons': value['weapons'] == null ? undefined : ((value['weapons'] as Array<any>).map(HI3WeaponsEntityToJSON)),
    };
}


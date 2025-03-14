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
import type { VersionsEntity } from './VersionsEntity';
import {
    VersionsEntityFromJSON,
    VersionsEntityFromJSONTyped,
    VersionsEntityToJSON,
    VersionsEntityToJSONTyped,
} from './VersionsEntity';
import type { GICharacter } from './GICharacter';
import {
    GICharacterFromJSON,
    GICharacterFromJSONTyped,
    GICharacterToJSON,
    GICharacterToJSONTyped,
} from './GICharacter';

/**
 * 
 * @export
 * @interface Weapon
 */
export interface Weapon {
    /**
     * 
     * @type {string}
     * @memberof Weapon
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Weapon
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Weapon
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Weapon
     */
    icon_url: string;
    /**
     * 
     * @type {number}
     * @memberof Weapon
     */
    rarity: number;
    /**
     * 
     * @type {string}
     * @memberof Weapon
     */
    effect: string;
    /**
     * 
     * @type {string}
     * @memberof Weapon
     */
    type: string;
    /**
     * 
     * @type {Array<GICharacter>}
     * @memberof Weapon
     */
    characters?: Array<GICharacter> | null;
    /**
     * 
     * @type {VersionsEntity}
     * @memberof Weapon
     */
    version?: VersionsEntity | null;
    /**
     * 
     * @type {Date}
     * @memberof Weapon
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Weapon
     */
    updatedAt: Date;
}

/**
 * Check if a given object implements the Weapon interface.
 */
export function instanceOfWeapon(value: object): value is Weapon {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('icon_url' in value) || value['icon_url'] === undefined) return false;
    if (!('rarity' in value) || value['rarity'] === undefined) return false;
    if (!('effect' in value) || value['effect'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function WeaponFromJSON(json: any): Weapon {
    return WeaponFromJSONTyped(json, false);
}

export function WeaponFromJSONTyped(json: any, ignoreDiscriminator: boolean): Weapon {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'icon_url': json['icon_url'],
        'rarity': json['rarity'],
        'effect': json['effect'],
        'type': json['type'],
        'characters': json['characters'] == null ? undefined : ((json['characters'] as Array<any>).map(GICharacterFromJSON)),
        'version': json['version'] == null ? undefined : VersionsEntityFromJSON(json['version']),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
    };
}

export function WeaponToJSON(json: any): Weapon {
    return WeaponToJSONTyped(json, false);
}

export function WeaponToJSONTyped(value?: Weapon | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'icon_url': value['icon_url'],
        'rarity': value['rarity'],
        'effect': value['effect'],
        'type': value['type'],
        'characters': value['characters'] == null ? undefined : ((value['characters'] as Array<any>).map(GICharacterToJSON)),
        'version': VersionsEntityToJSON(value['version']),
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
    };
}


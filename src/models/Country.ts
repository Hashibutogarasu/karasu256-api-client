/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab Auth API Document Production
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.6
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
 * @interface Country
 */
export interface Country {
    /**
     * 
     * @type {number}
     * @memberof Country
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    sumbnail_url?: string | null;
    /**
     * 
     * @type {Array<GICharacter>}
     * @memberof Country
     */
    characters: Array<GICharacter>;
    /**
     * 
     * @type {Date}
     * @memberof Country
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Country
     */
    updatedAt: Date;
    /**
     * 
     * @type {VersionsEntity}
     * @memberof Country
     */
    version: VersionsEntity;
}

/**
 * Check if a given object implements the Country interface.
 */
export function instanceOfCountry(value: object): value is Country {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('characters' in value) || value['characters'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function CountryFromJSON(json: any): Country {
    return CountryFromJSONTyped(json, false);
}

export function CountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Country {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'sumbnail_url': json['sumbnail_url'] == null ? undefined : json['sumbnail_url'],
        'characters': ((json['characters'] as Array<any>).map(GICharacterFromJSON)),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'version': VersionsEntityFromJSON(json['version']),
    };
}

export function CountryToJSON(json: any): Country {
    return CountryToJSONTyped(json, false);
}

export function CountryToJSONTyped(value?: Country | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'sumbnail_url': value['sumbnail_url'],
        'characters': ((value['characters'] as Array<any>).map(GICharacterToJSON)),
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'version': VersionsEntityToJSON(value['version']),
    };
}


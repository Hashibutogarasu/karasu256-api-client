/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CharactersControllerGetRequestWeaponVersion } from './CharactersControllerGetRequestWeaponVersion';
import {
    CharactersControllerGetRequestWeaponVersionFromJSON,
    CharactersControllerGetRequestWeaponVersionFromJSONTyped,
    CharactersControllerGetRequestWeaponVersionToJSON,
    CharactersControllerGetRequestWeaponVersionToJSONTyped,
} from './CharactersControllerGetRequestWeaponVersion';

/**
 * 
 * @export
 * @interface WeaponsControllerGetRequest
 */
export interface WeaponsControllerGetRequest {
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    icon_url: string;
    /**
     * 
     * @type {number}
     * @memberof WeaponsControllerGetRequest
     */
    rarity: number;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    effect: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    type: string;
    /**
     * 
     * @type {CharactersControllerGetRequestWeaponVersion}
     * @memberof WeaponsControllerGetRequest
     */
    version: CharactersControllerGetRequestWeaponVersion;
}

/**
 * Check if a given object implements the WeaponsControllerGetRequest interface.
 */
export function instanceOfWeaponsControllerGetRequest(value: object): value is WeaponsControllerGetRequest {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('icon_url' in value) || value['icon_url'] === undefined) return false;
    if (!('rarity' in value) || value['rarity'] === undefined) return false;
    if (!('effect' in value) || value['effect'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function WeaponsControllerGetRequestFromJSON(json: any): WeaponsControllerGetRequest {
    return WeaponsControllerGetRequestFromJSONTyped(json, false);
}

export function WeaponsControllerGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeaponsControllerGetRequest {
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
        'version': CharactersControllerGetRequestWeaponVersionFromJSON(json['version']),
    };
}

export function WeaponsControllerGetRequestToJSON(json: any): WeaponsControllerGetRequest {
    return WeaponsControllerGetRequestToJSONTyped(json, false);
}

export function WeaponsControllerGetRequestToJSONTyped(value?: WeaponsControllerGetRequest | null, ignoreDiscriminator: boolean = false): any {
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
        'version': CharactersControllerGetRequestWeaponVersionToJSON(value['version']),
    };
}


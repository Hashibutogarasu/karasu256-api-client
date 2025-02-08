/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
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
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    take?: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    skip?: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    icon_url?: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof WeaponsControllerGetRequest
     */
    rarity?: number;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    effect?: string;
    /**
     * 
     * @type {string}
     * @memberof WeaponsControllerGetRequest
     */
    version?: string;
}

/**
 * Check if a given object implements the WeaponsControllerGetRequest interface.
 */
export function instanceOfWeaponsControllerGetRequest(value: object): value is WeaponsControllerGetRequest {
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
        
        'id': json['id'] == null ? undefined : json['id'],
        'take': json['take'] == null ? undefined : json['take'],
        'skip': json['skip'] == null ? undefined : json['skip'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'icon_url': json['icon_url'] == null ? undefined : json['icon_url'],
        'type': json['type'] == null ? undefined : json['type'],
        'rarity': json['rarity'] == null ? undefined : json['rarity'],
        'effect': json['effect'] == null ? undefined : json['effect'],
        'version': json['version'] == null ? undefined : json['version'],
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
        'take': value['take'],
        'skip': value['skip'],
        'name': value['name'],
        'description': value['description'],
        'icon_url': value['icon_url'],
        'type': value['type'],
        'rarity': value['rarity'],
        'effect': value['effect'],
        'version': value['version'],
    };
}


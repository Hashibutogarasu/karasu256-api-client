/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab Auth API Document Production
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 1.0.3
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
 * @interface CharactersControllerGetRequest
 */
export interface CharactersControllerGetRequest {
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    take?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    skip?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    icon_url?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    element?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    weapon?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    header_img_url?: string;
    /**
     * 
     * @type {number}
     * @memberof CharactersControllerGetRequest
     */
    rarity?: number;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    property?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    unimplemented?: string;
}

/**
 * Check if a given object implements the CharactersControllerGetRequest interface.
 */
export function instanceOfCharactersControllerGetRequest(value: object): value is CharactersControllerGetRequest {
    return true;
}

export function CharactersControllerGetRequestFromJSON(json: any): CharactersControllerGetRequest {
    return CharactersControllerGetRequestFromJSONTyped(json, false);
}

export function CharactersControllerGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharactersControllerGetRequest {
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
        'element': json['element'] == null ? undefined : json['element'],
        'region': json['region'] == null ? undefined : json['region'],
        'weapon': json['weapon'] == null ? undefined : json['weapon'],
        'header_img_url': json['header_img_url'] == null ? undefined : json['header_img_url'],
        'rarity': json['rarity'] == null ? undefined : json['rarity'],
        'version': json['version'] == null ? undefined : json['version'],
        'property': json['property'] == null ? undefined : json['property'],
        'unimplemented': json['unimplemented'] == null ? undefined : json['unimplemented'],
    };
}

export function CharactersControllerGetRequestToJSON(json: any): CharactersControllerGetRequest {
    return CharactersControllerGetRequestToJSONTyped(json, false);
}

export function CharactersControllerGetRequestToJSONTyped(value?: CharactersControllerGetRequest | null, ignoreDiscriminator: boolean = false): any {
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
        'element': value['element'],
        'region': value['region'],
        'weapon': value['weapon'],
        'header_img_url': value['header_img_url'],
        'rarity': value['rarity'],
        'version': value['version'],
        'property': value['property'],
        'unimplemented': value['unimplemented'],
    };
}


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
/**
 * 
 * @export
 * @interface CharactersControllerGetRequestRegion
 */
export interface CharactersControllerGetRequestRegion {
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequestRegion
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequestRegion
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequestRegion
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequestRegion
     */
    icon_url: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequestRegion
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequestRegion
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the CharactersControllerGetRequestRegion interface.
 */
export function instanceOfCharactersControllerGetRequestRegion(value: object): value is CharactersControllerGetRequestRegion {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('icon_url' in value) || value['icon_url'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function CharactersControllerGetRequestRegionFromJSON(json: any): CharactersControllerGetRequestRegion {
    return CharactersControllerGetRequestRegionFromJSONTyped(json, false);
}

export function CharactersControllerGetRequestRegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharactersControllerGetRequestRegion {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'icon_url': json['icon_url'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function CharactersControllerGetRequestRegionToJSON(json: any): CharactersControllerGetRequestRegion {
    return CharactersControllerGetRequestRegionToJSONTyped(json, false);
}

export function CharactersControllerGetRequestRegionToJSONTyped(value?: CharactersControllerGetRequestRegion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'icon_url': value['icon_url'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}


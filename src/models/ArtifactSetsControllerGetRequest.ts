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
 * @interface ArtifactSetsControllerGetRequest
 */
export interface ArtifactSetsControllerGetRequest {
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    icon_url: string;
    /**
     * 
     * @type {number}
     * @memberof ArtifactSetsControllerGetRequest
     */
    rarity: number;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    one_set_effect: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    two_set_effect: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    four_set_effect: string;
}

/**
 * Check if a given object implements the ArtifactSetsControllerGetRequest interface.
 */
export function instanceOfArtifactSetsControllerGetRequest(value: object): value is ArtifactSetsControllerGetRequest {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('icon_url' in value) || value['icon_url'] === undefined) return false;
    if (!('rarity' in value) || value['rarity'] === undefined) return false;
    if (!('one_set_effect' in value) || value['one_set_effect'] === undefined) return false;
    if (!('two_set_effect' in value) || value['two_set_effect'] === undefined) return false;
    if (!('four_set_effect' in value) || value['four_set_effect'] === undefined) return false;
    return true;
}

export function ArtifactSetsControllerGetRequestFromJSON(json: any): ArtifactSetsControllerGetRequest {
    return ArtifactSetsControllerGetRequestFromJSONTyped(json, false);
}

export function ArtifactSetsControllerGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArtifactSetsControllerGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'icon_url': json['icon_url'],
        'rarity': json['rarity'],
        'one_set_effect': json['one_set_effect'],
        'two_set_effect': json['two_set_effect'],
        'four_set_effect': json['four_set_effect'],
    };
}

export function ArtifactSetsControllerGetRequestToJSON(json: any): ArtifactSetsControllerGetRequest {
    return ArtifactSetsControllerGetRequestToJSONTyped(json, false);
}

export function ArtifactSetsControllerGetRequestToJSONTyped(value?: ArtifactSetsControllerGetRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'icon_url': value['icon_url'],
        'rarity': value['rarity'],
        'one_set_effect': value['one_set_effect'],
        'two_set_effect': value['two_set_effect'],
        'four_set_effect': value['four_set_effect'],
    };
}


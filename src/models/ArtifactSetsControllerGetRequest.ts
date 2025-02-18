/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.30
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
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    take?: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    skip?: string;
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
    icon_url?: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    one_set_effect?: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    two_set_effect?: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    four_set_effect?: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSetsControllerGetRequest
     */
    version?: string;
}

/**
 * Check if a given object implements the ArtifactSetsControllerGetRequest interface.
 */
export function instanceOfArtifactSetsControllerGetRequest(value: object): value is ArtifactSetsControllerGetRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
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
        
        'id': json['id'] == null ? undefined : json['id'],
        'take': json['take'] == null ? undefined : json['take'],
        'skip': json['skip'] == null ? undefined : json['skip'],
        'name': json['name'],
        'description': json['description'],
        'icon_url': json['icon_url'] == null ? undefined : json['icon_url'],
        'one_set_effect': json['one_set_effect'] == null ? undefined : json['one_set_effect'],
        'two_set_effect': json['two_set_effect'] == null ? undefined : json['two_set_effect'],
        'four_set_effect': json['four_set_effect'] == null ? undefined : json['four_set_effect'],
        'version': json['version'] == null ? undefined : json['version'],
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
        'take': value['take'],
        'skip': value['skip'],
        'name': value['name'],
        'description': value['description'],
        'icon_url': value['icon_url'],
        'one_set_effect': value['one_set_effect'],
        'two_set_effect': value['two_set_effect'],
        'four_set_effect': value['four_set_effect'],
        'version': value['version'],
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 4.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ArtifactsControllerGetRequestVersion } from './ArtifactsControllerGetRequestVersion';
import {
    ArtifactsControllerGetRequestVersionFromJSON,
    ArtifactsControllerGetRequestVersionFromJSONTyped,
    ArtifactsControllerGetRequestVersionToJSON,
    ArtifactsControllerGetRequestVersionToJSONTyped,
} from './ArtifactsControllerGetRequestVersion';
import type { CountriesControllerGetRequestCharactersInner } from './CountriesControllerGetRequestCharactersInner';
import {
    CountriesControllerGetRequestCharactersInnerFromJSON,
    CountriesControllerGetRequestCharactersInnerFromJSONTyped,
    CountriesControllerGetRequestCharactersInnerToJSON,
    CountriesControllerGetRequestCharactersInnerToJSONTyped,
} from './CountriesControllerGetRequestCharactersInner';

/**
 * 
 * @export
 * @interface CountriesControllerGetRequest
 */
export interface CountriesControllerGetRequest {
    /**
     * 
     * @type {string}
     * @memberof CountriesControllerGetRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CountriesControllerGetRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CountriesControllerGetRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CountriesControllerGetRequest
     */
    thumbnail_url?: string | null;
    /**
     * 
     * @type {ArtifactsControllerGetRequestVersion}
     * @memberof CountriesControllerGetRequest
     */
    version?: ArtifactsControllerGetRequestVersion;
    /**
     * 
     * @type {Array<CountriesControllerGetRequestCharactersInner>}
     * @memberof CountriesControllerGetRequest
     */
    characters?: Array<CountriesControllerGetRequestCharactersInner>;
}

/**
 * Check if a given object implements the CountriesControllerGetRequest interface.
 */
export function instanceOfCountriesControllerGetRequest(value: object): value is CountriesControllerGetRequest {
    return true;
}

export function CountriesControllerGetRequestFromJSON(json: any): CountriesControllerGetRequest {
    return CountriesControllerGetRequestFromJSONTyped(json, false);
}

export function CountriesControllerGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountriesControllerGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'thumbnail_url': json['thumbnail_url'] == null ? undefined : json['thumbnail_url'],
        'version': json['version'] == null ? undefined : ArtifactsControllerGetRequestVersionFromJSON(json['version']),
        'characters': json['characters'] == null ? undefined : ((json['characters'] as Array<any>).map(CountriesControllerGetRequestCharactersInnerFromJSON)),
    };
}

export function CountriesControllerGetRequestToJSON(json: any): CountriesControllerGetRequest {
    return CountriesControllerGetRequestToJSONTyped(json, false);
}

export function CountriesControllerGetRequestToJSONTyped(value?: CountriesControllerGetRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'thumbnail_url': value['thumbnail_url'],
        'version': ArtifactsControllerGetRequestVersionToJSON(value['version']),
        'characters': value['characters'] == null ? undefined : ((value['characters'] as Array<any>).map(CountriesControllerGetRequestCharactersInnerToJSON)),
    };
}


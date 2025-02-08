/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.20
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
    take?: string;
    /**
     * 
     * @type {string}
     * @memberof CountriesControllerGetRequest
     */
    skip?: string;
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
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CountriesControllerGetRequest
     */
    icon_url?: string;
    /**
     * 
     * @type {string}
     * @memberof CountriesControllerGetRequest
     */
    version?: string;
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
        'take': json['take'] == null ? undefined : json['take'],
        'skip': json['skip'] == null ? undefined : json['skip'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'icon_url': json['icon_url'] == null ? undefined : json['icon_url'],
        'version': json['version'] == null ? undefined : json['version'],
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
        'take': value['take'],
        'skip': value['skip'],
        'name': value['name'],
        'description': value['description'],
        'icon_url': value['icon_url'],
        'version': value['version'],
    };
}


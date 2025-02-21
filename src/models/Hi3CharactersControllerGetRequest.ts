/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.34
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
 * @interface Hi3CharactersControllerGetRequest
 */
export interface Hi3CharactersControllerGetRequest {
    /**
     * 
     * @type {string}
     * @memberof Hi3CharactersControllerGetRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Hi3CharactersControllerGetRequest
     */
    take?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Hi3CharactersControllerGetRequest
     */
    skip?: string | null;
}

/**
 * Check if a given object implements the Hi3CharactersControllerGetRequest interface.
 */
export function instanceOfHi3CharactersControllerGetRequest(value: object): value is Hi3CharactersControllerGetRequest {
    return true;
}

export function Hi3CharactersControllerGetRequestFromJSON(json: any): Hi3CharactersControllerGetRequest {
    return Hi3CharactersControllerGetRequestFromJSONTyped(json, false);
}

export function Hi3CharactersControllerGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hi3CharactersControllerGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'take': json['take'] == null ? undefined : json['take'],
        'skip': json['skip'] == null ? undefined : json['skip'],
    };
}

export function Hi3CharactersControllerGetRequestToJSON(json: any): Hi3CharactersControllerGetRequest {
    return Hi3CharactersControllerGetRequestToJSONTyped(json, false);
}

export function Hi3CharactersControllerGetRequestToJSONTyped(value?: Hi3CharactersControllerGetRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'take': value['take'],
        'skip': value['skip'],
    };
}


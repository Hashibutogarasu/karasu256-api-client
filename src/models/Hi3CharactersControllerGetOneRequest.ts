/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 4.2.0
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
 * @interface Hi3CharactersControllerGetOneRequest
 */
export interface Hi3CharactersControllerGetOneRequest {
    /**
     * 
     * @type {string}
     * @memberof Hi3CharactersControllerGetOneRequest
     */
    id?: string | null;
}

/**
 * Check if a given object implements the Hi3CharactersControllerGetOneRequest interface.
 */
export function instanceOfHi3CharactersControllerGetOneRequest(value: object): value is Hi3CharactersControllerGetOneRequest {
    return true;
}

export function Hi3CharactersControllerGetOneRequestFromJSON(json: any): Hi3CharactersControllerGetOneRequest {
    return Hi3CharactersControllerGetOneRequestFromJSONTyped(json, false);
}

export function Hi3CharactersControllerGetOneRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): Hi3CharactersControllerGetOneRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function Hi3CharactersControllerGetOneRequestToJSON(json: any): Hi3CharactersControllerGetOneRequest {
    return Hi3CharactersControllerGetOneRequestToJSONTyped(json, false);
}

export function Hi3CharactersControllerGetOneRequestToJSONTyped(value?: Hi3CharactersControllerGetOneRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
    };
}


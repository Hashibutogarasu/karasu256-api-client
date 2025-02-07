/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab Auth API Document Production
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.0
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
 * @interface GalleriesControllerGetRequest
 */
export interface GalleriesControllerGetRequest {
    /**
     * 
     * @type {string}
     * @memberof GalleriesControllerGetRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GalleriesControllerGetRequest
     */
    alt?: string;
    /**
     * 
     * @type {string}
     * @memberof GalleriesControllerGetRequest
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof GalleriesControllerGetRequest
     */
    take?: string;
    /**
     * 
     * @type {string}
     * @memberof GalleriesControllerGetRequest
     */
    skip?: string;
}

/**
 * Check if a given object implements the GalleriesControllerGetRequest interface.
 */
export function instanceOfGalleriesControllerGetRequest(value: object): value is GalleriesControllerGetRequest {
    return true;
}

export function GalleriesControllerGetRequestFromJSON(json: any): GalleriesControllerGetRequest {
    return GalleriesControllerGetRequestFromJSONTyped(json, false);
}

export function GalleriesControllerGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GalleriesControllerGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'alt': json['alt'] == null ? undefined : json['alt'],
        'url': json['url'] == null ? undefined : json['url'],
        'take': json['take'] == null ? undefined : json['take'],
        'skip': json['skip'] == null ? undefined : json['skip'],
    };
}

export function GalleriesControllerGetRequestToJSON(json: any): GalleriesControllerGetRequest {
    return GalleriesControllerGetRequestToJSONTyped(json, false);
}

export function GalleriesControllerGetRequestToJSONTyped(value?: GalleriesControllerGetRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'alt': value['alt'],
        'url': value['url'],
        'take': value['take'],
        'skip': value['skip'],
    };
}


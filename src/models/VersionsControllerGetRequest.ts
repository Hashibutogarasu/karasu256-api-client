/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.21
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
 * @interface VersionsControllerGetRequest
 */
export interface VersionsControllerGetRequest {
    /**
     * 
     * @type {string}
     * @memberof VersionsControllerGetRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof VersionsControllerGetRequest
     */
    take?: string;
    /**
     * 
     * @type {string}
     * @memberof VersionsControllerGetRequest
     */
    skip?: string;
    /**
     * 
     * @type {string}
     * @memberof VersionsControllerGetRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof VersionsControllerGetRequest
     */
    version_string?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VersionsControllerGetRequest
     */
    released?: boolean;
    /**
     * 
     * @type {string}
     * @memberof VersionsControllerGetRequest
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof VersionsControllerGetRequest
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the VersionsControllerGetRequest interface.
 */
export function instanceOfVersionsControllerGetRequest(value: object): value is VersionsControllerGetRequest {
    return true;
}

export function VersionsControllerGetRequestFromJSON(json: any): VersionsControllerGetRequest {
    return VersionsControllerGetRequestFromJSONTyped(json, false);
}

export function VersionsControllerGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionsControllerGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'take': json['take'] == null ? undefined : json['take'],
        'skip': json['skip'] == null ? undefined : json['skip'],
        'name': json['name'] == null ? undefined : json['name'],
        'version_string': json['version_string'] == null ? undefined : json['version_string'],
        'released': json['released'] == null ? undefined : json['released'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
    };
}

export function VersionsControllerGetRequestToJSON(json: any): VersionsControllerGetRequest {
    return VersionsControllerGetRequestToJSONTyped(json, false);
}

export function VersionsControllerGetRequestToJSONTyped(value?: VersionsControllerGetRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'take': value['take'],
        'skip': value['skip'],
        'name': value['name'],
        'version_string': value['version_string'],
        'released': value['released'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}


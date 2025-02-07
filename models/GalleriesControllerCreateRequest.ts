/**
 * Karasu Lab Auth API Document Production
 * API documentation for Karasu Lab
 *
 * OpenAPI spec version: 3.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class GalleriesControllerCreateRequest {
    'url': string;
    'alt': string;
    'key': string;
    'character': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "alt",
            "baseName": "alt",
            "type": "string",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "character",
            "baseName": "character",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GalleriesControllerCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

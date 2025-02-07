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

export class VersionsControllerGetRequest {
    'id'?: string;
    'take'?: string;
    'skip'?: string;
    'name'?: string;
    'version_string'?: string;
    'released'?: boolean;
    'createdAt'?: string;
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "take",
            "baseName": "take",
            "type": "string",
            "format": ""
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "version_string",
            "baseName": "version_string",
            "type": "string",
            "format": ""
        },
        {
            "name": "released",
            "baseName": "released",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VersionsControllerGetRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

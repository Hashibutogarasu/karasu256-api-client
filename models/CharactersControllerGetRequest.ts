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

export class CharactersControllerGetRequest {
    'id'?: string;
    'take'?: string;
    'skip'?: string;
    'name'?: string;
    'description'?: string;
    'icon_url'?: string;
    'element'?: string;
    'region'?: string;
    'weapon'?: string;
    'header_img_url'?: string;
    'rarity'?: number;
    'version'?: string;
    'property'?: string;
    'unimplemented'?: string;

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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "icon_url",
            "baseName": "icon_url",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "element",
            "baseName": "element",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "weapon",
            "baseName": "weapon",
            "type": "string",
            "format": ""
        },
        {
            "name": "header_img_url",
            "baseName": "header_img_url",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "rarity",
            "baseName": "rarity",
            "type": "number",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "property",
            "baseName": "property",
            "type": "string",
            "format": ""
        },
        {
            "name": "unimplemented",
            "baseName": "unimplemented",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CharactersControllerGetRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

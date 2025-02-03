/**
 * Karasu Lab API production
 * API documentation for Karasu Lab
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ArtifactsControllerGetQueryParameter {
    'id': string;
    'createdAt': any | null;
    'updatedAt': any | null;
    'name'?: string;
    'description'?: string;
    'iconUrl'?: string;
    'oneSetEffect'?: string;
    'twoSetEffect'?: string;
    'fourSetEffect'?: string;
    'version'?: string;

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
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "any",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "any",
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
            "name": "iconUrl",
            "baseName": "icon_url",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "oneSetEffect",
            "baseName": "one_set_effect",
            "type": "string",
            "format": ""
        },
        {
            "name": "twoSetEffect",
            "baseName": "two_set_effect",
            "type": "string",
            "format": ""
        },
        {
            "name": "fourSetEffect",
            "baseName": "four_set_effect",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ArtifactsControllerGetQueryParameter.attributeTypeMap;
    }

    public constructor() {
    }
}

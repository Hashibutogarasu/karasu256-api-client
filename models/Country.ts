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

import { Character } from '../models/Character';
import { VersionsEntity } from '../models/VersionsEntity';
import { HttpFile } from '../http/http';

export class Country {
    'id': string;
    'name': string;
    'description'?: string;
    'sumbnailUrl'?: string;
    'characters': Array<Character>;
    'createdAt': Date;
    'updatedAt': Date;
    'version': VersionsEntity;

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
            "name": "sumbnailUrl",
            "baseName": "sumbnail_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "characters",
            "baseName": "characters",
            "type": "Array<Character>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "VersionsEntity",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Country.attributeTypeMap;
    }

    public constructor() {
    }
}

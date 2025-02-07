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

import { ArtifactSets } from '../models/ArtifactSets';
import { VersionsEntity } from '../models/VersionsEntity';
import { HttpFile } from '../http/http';

export class Artifacts {
    'id': string;
    'name': string;
    'icon_url': string;
    'artifact_sets'?: Array<ArtifactSets> | null;
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
            "name": "icon_url",
            "baseName": "icon_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "artifact_sets",
            "baseName": "artifact_sets",
            "type": "Array<ArtifactSets>",
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
        return Artifacts.attributeTypeMap;
    }

    public constructor() {
    }
}

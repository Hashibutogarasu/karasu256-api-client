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
import type { VersionsEntity } from './VersionsEntity';
import {
    VersionsEntityFromJSON,
    VersionsEntityFromJSONTyped,
    VersionsEntityToJSON,
    VersionsEntityToJSONTyped,
} from './VersionsEntity';
import type { ArtifactSets } from './ArtifactSets';
import {
    ArtifactSetsFromJSON,
    ArtifactSetsFromJSONTyped,
    ArtifactSetsToJSON,
    ArtifactSetsToJSONTyped,
} from './ArtifactSets';

/**
 * 
 * @export
 * @interface Artifacts
 */
export interface Artifacts {
    /**
     * 
     * @type {string}
     * @memberof Artifacts
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Artifacts
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Artifacts
     */
    icon_url: string;
    /**
     * 
     * @type {Array<ArtifactSets>}
     * @memberof Artifacts
     */
    artifact_sets?: Array<ArtifactSets> | null;
    /**
     * 
     * @type {Date}
     * @memberof Artifacts
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Artifacts
     */
    updatedAt: Date;
    /**
     * 
     * @type {VersionsEntity}
     * @memberof Artifacts
     */
    version: VersionsEntity;
}

/**
 * Check if a given object implements the Artifacts interface.
 */
export function instanceOfArtifacts(value: object): value is Artifacts {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('icon_url' in value) || value['icon_url'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ArtifactsFromJSON(json: any): Artifacts {
    return ArtifactsFromJSONTyped(json, false);
}

export function ArtifactsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Artifacts {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'icon_url': json['icon_url'],
        'artifact_sets': json['artifact_sets'] == null ? undefined : ((json['artifact_sets'] as Array<any>).map(ArtifactSetsFromJSON)),
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'version': VersionsEntityFromJSON(json['version']),
    };
}

export function ArtifactsToJSON(json: any): Artifacts {
    return ArtifactsToJSONTyped(json, false);
}

export function ArtifactsToJSONTyped(value?: Artifacts | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'icon_url': value['icon_url'],
        'artifact_sets': value['artifact_sets'] == null ? undefined : ((value['artifact_sets'] as Array<any>).map(ArtifactSetsToJSON)),
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'version': VersionsEntityToJSON(value['version']),
    };
}


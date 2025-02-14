/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Artifacts } from './Artifacts';
import {
    ArtifactsFromJSON,
    ArtifactsFromJSONTyped,
    ArtifactsToJSON,
    ArtifactsToJSONTyped,
} from './Artifacts';
import type { VersionsEntity } from './VersionsEntity';
import {
    VersionsEntityFromJSON,
    VersionsEntityFromJSONTyped,
    VersionsEntityToJSON,
    VersionsEntityToJSONTyped,
} from './VersionsEntity';
import type { GICharacter } from './GICharacter';
import {
    GICharacterFromJSON,
    GICharacterFromJSONTyped,
    GICharacterToJSON,
    GICharacterToJSONTyped,
} from './GICharacter';

/**
 * 
 * @export
 * @interface ArtifactSets
 */
export interface ArtifactSets {
    /**
     * 
     * @type {string}
     * @memberof ArtifactSets
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSets
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSets
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSets
     */
    icon_url: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSets
     */
    one_set_effect: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSets
     */
    two_set_effect: string;
    /**
     * 
     * @type {string}
     * @memberof ArtifactSets
     */
    four_set_effect: string;
    /**
     * 
     * @type {Date}
     * @memberof ArtifactSets
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof ArtifactSets
     */
    updatedAt: Date;
    /**
     * 
     * @type {Array<Artifacts>}
     * @memberof ArtifactSets
     */
    artifacts?: Array<Artifacts> | null;
    /**
     * 
     * @type {Array<GICharacter>}
     * @memberof ArtifactSets
     */
    characters?: Array<GICharacter> | null;
    /**
     * 
     * @type {VersionsEntity}
     * @memberof ArtifactSets
     */
    version: VersionsEntity;
}

/**
 * Check if a given object implements the ArtifactSets interface.
 */
export function instanceOfArtifactSets(value: object): value is ArtifactSets {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('icon_url' in value) || value['icon_url'] === undefined) return false;
    if (!('one_set_effect' in value) || value['one_set_effect'] === undefined) return false;
    if (!('two_set_effect' in value) || value['two_set_effect'] === undefined) return false;
    if (!('four_set_effect' in value) || value['four_set_effect'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ArtifactSetsFromJSON(json: any): ArtifactSets {
    return ArtifactSetsFromJSONTyped(json, false);
}

export function ArtifactSetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArtifactSets {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'icon_url': json['icon_url'],
        'one_set_effect': json['one_set_effect'],
        'two_set_effect': json['two_set_effect'],
        'four_set_effect': json['four_set_effect'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'artifacts': json['artifacts'] == null ? undefined : ((json['artifacts'] as Array<any>).map(ArtifactsFromJSON)),
        'characters': json['characters'] == null ? undefined : ((json['characters'] as Array<any>).map(GICharacterFromJSON)),
        'version': VersionsEntityFromJSON(json['version']),
    };
}

export function ArtifactSetsToJSON(json: any): ArtifactSets {
    return ArtifactSetsToJSONTyped(json, false);
}

export function ArtifactSetsToJSONTyped(value?: ArtifactSets | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'icon_url': value['icon_url'],
        'one_set_effect': value['one_set_effect'],
        'two_set_effect': value['two_set_effect'],
        'four_set_effect': value['four_set_effect'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'artifacts': value['artifacts'] == null ? undefined : ((value['artifacts'] as Array<any>).map(ArtifactsToJSON)),
        'characters': value['characters'] == null ? undefined : ((value['characters'] as Array<any>).map(GICharacterToJSON)),
        'version': VersionsEntityToJSON(value['version']),
    };
}


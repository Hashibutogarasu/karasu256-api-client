/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.11
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
import type { Country } from './Country';
import {
    CountryFromJSON,
    CountryFromJSONTyped,
    CountryToJSON,
    CountryToJSONTyped,
} from './Country';
import type { ArtifactSets } from './ArtifactSets';
import {
    ArtifactSetsFromJSON,
    ArtifactSetsFromJSONTyped,
    ArtifactSetsToJSON,
    ArtifactSetsToJSONTyped,
} from './ArtifactSets';
import type { GICharacter } from './GICharacter';
import {
    GICharacterFromJSON,
    GICharacterFromJSONTyped,
    GICharacterToJSON,
    GICharacterToJSONTyped,
} from './GICharacter';
import type { Weapon } from './Weapon';
import {
    WeaponFromJSON,
    WeaponFromJSONTyped,
    WeaponToJSON,
    WeaponToJSONTyped,
} from './Weapon';

/**
 * 
 * @export
 * @interface VersionsEntity
 */
export interface VersionsEntity {
    /**
     * 
     * @type {string}
     * @memberof VersionsEntity
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof VersionsEntity
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VersionsEntity
     */
    version_string: string;
    /**
     * 
     * @type {boolean}
     * @memberof VersionsEntity
     */
    released: boolean;
    /**
     * 
     * @type {Date}
     * @memberof VersionsEntity
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof VersionsEntity
     */
    updatedAt: Date;
    /**
     * 
     * @type {Array<GICharacter>}
     * @memberof VersionsEntity
     */
    characters: Array<GICharacter>;
    /**
     * 
     * @type {Array<Weapon>}
     * @memberof VersionsEntity
     */
    weapons?: Array<Weapon> | null;
    /**
     * 
     * @type {Array<ArtifactSets>}
     * @memberof VersionsEntity
     */
    artifact_sets?: Array<ArtifactSets> | null;
    /**
     * 
     * @type {Array<Country>}
     * @memberof VersionsEntity
     */
    countries?: Array<Country> | null;
    /**
     * 
     * @type {Array<Artifacts>}
     * @memberof VersionsEntity
     */
    artifacts?: Array<Artifacts> | null;
}

/**
 * Check if a given object implements the VersionsEntity interface.
 */
export function instanceOfVersionsEntity(value: object): value is VersionsEntity {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('version_string' in value) || value['version_string'] === undefined) return false;
    if (!('released' in value) || value['released'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('characters' in value) || value['characters'] === undefined) return false;
    return true;
}

export function VersionsEntityFromJSON(json: any): VersionsEntity {
    return VersionsEntityFromJSONTyped(json, false);
}

export function VersionsEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionsEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'version_string': json['version_string'],
        'released': json['released'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'characters': ((json['characters'] as Array<any>).map(GICharacterFromJSON)),
        'weapons': json['weapons'] == null ? undefined : ((json['weapons'] as Array<any>).map(WeaponFromJSON)),
        'artifact_sets': json['artifact_sets'] == null ? undefined : ((json['artifact_sets'] as Array<any>).map(ArtifactSetsFromJSON)),
        'countries': json['countries'] == null ? undefined : ((json['countries'] as Array<any>).map(CountryFromJSON)),
        'artifacts': json['artifacts'] == null ? undefined : ((json['artifacts'] as Array<any>).map(ArtifactsFromJSON)),
    };
}

export function VersionsEntityToJSON(json: any): VersionsEntity {
    return VersionsEntityToJSONTyped(json, false);
}

export function VersionsEntityToJSONTyped(value?: VersionsEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'version_string': value['version_string'],
        'released': value['released'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'characters': ((value['characters'] as Array<any>).map(GICharacterToJSON)),
        'weapons': value['weapons'] == null ? undefined : ((value['weapons'] as Array<any>).map(WeaponToJSON)),
        'artifact_sets': value['artifact_sets'] == null ? undefined : ((value['artifact_sets'] as Array<any>).map(ArtifactSetsToJSON)),
        'countries': value['countries'] == null ? undefined : ((value['countries'] as Array<any>).map(CountryToJSON)),
        'artifacts': value['artifacts'] == null ? undefined : ((value['artifacts'] as Array<any>).map(ArtifactsToJSON)),
    };
}


/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 4.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CharactersControllerGetRequestRegion } from './CharactersControllerGetRequestRegion';
import {
    CharactersControllerGetRequestRegionFromJSON,
    CharactersControllerGetRequestRegionFromJSONTyped,
    CharactersControllerGetRequestRegionToJSON,
    CharactersControllerGetRequestRegionToJSONTyped,
} from './CharactersControllerGetRequestRegion';
import type { CharactersControllerGetRequestWeapon } from './CharactersControllerGetRequestWeapon';
import {
    CharactersControllerGetRequestWeaponFromJSON,
    CharactersControllerGetRequestWeaponFromJSONTyped,
    CharactersControllerGetRequestWeaponToJSON,
    CharactersControllerGetRequestWeaponToJSONTyped,
} from './CharactersControllerGetRequestWeapon';
import type { CharactersControllerGetRequestArtifactSetInner } from './CharactersControllerGetRequestArtifactSetInner';
import {
    CharactersControllerGetRequestArtifactSetInnerFromJSON,
    CharactersControllerGetRequestArtifactSetInnerFromJSONTyped,
    CharactersControllerGetRequestArtifactSetInnerToJSON,
    CharactersControllerGetRequestArtifactSetInnerToJSONTyped,
} from './CharactersControllerGetRequestArtifactSetInner';
import type { CharactersControllerGetRequestVersion } from './CharactersControllerGetRequestVersion';
import {
    CharactersControllerGetRequestVersionFromJSON,
    CharactersControllerGetRequestVersionFromJSONTyped,
    CharactersControllerGetRequestVersionToJSON,
    CharactersControllerGetRequestVersionToJSONTyped,
} from './CharactersControllerGetRequestVersion';
import type { CharactersControllerGetRequestGalleriesInner } from './CharactersControllerGetRequestGalleriesInner';
import {
    CharactersControllerGetRequestGalleriesInnerFromJSON,
    CharactersControllerGetRequestGalleriesInnerFromJSONTyped,
    CharactersControllerGetRequestGalleriesInnerToJSON,
    CharactersControllerGetRequestGalleriesInnerToJSONTyped,
} from './CharactersControllerGetRequestGalleriesInner';

/**
 * 
 * @export
 * @interface CharactersControllerGetRequest
 */
export interface CharactersControllerGetRequest {
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    icon_url?: string;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    element?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CharactersControllerGetRequest
     */
    rarity?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    header_img_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    weapon_type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    property?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CharactersControllerGetRequest
     */
    unimplemented?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CharactersControllerGetRequest
     */
    implemented_date?: string | null;
    /**
     * 
     * @type {CharactersControllerGetRequestRegion}
     * @memberof CharactersControllerGetRequest
     */
    region?: CharactersControllerGetRequestRegion | null;
    /**
     * 
     * @type {CharactersControllerGetRequestWeapon}
     * @memberof CharactersControllerGetRequest
     */
    weapon?: CharactersControllerGetRequestWeapon | null;
    /**
     * 
     * @type {CharactersControllerGetRequestVersion}
     * @memberof CharactersControllerGetRequest
     */
    version?: CharactersControllerGetRequestVersion | null;
    /**
     * 
     * @type {Array<CharactersControllerGetRequestGalleriesInner>}
     * @memberof CharactersControllerGetRequest
     */
    galleries?: Array<CharactersControllerGetRequestGalleriesInner> | null;
    /**
     * 
     * @type {Array<CharactersControllerGetRequestArtifactSetInner>}
     * @memberof CharactersControllerGetRequest
     */
    artifact_set?: Array<CharactersControllerGetRequestArtifactSetInner> | null;
}

/**
 * Check if a given object implements the CharactersControllerGetRequest interface.
 */
export function instanceOfCharactersControllerGetRequest(value: object): value is CharactersControllerGetRequest {
    return true;
}

export function CharactersControllerGetRequestFromJSON(json: any): CharactersControllerGetRequest {
    return CharactersControllerGetRequestFromJSONTyped(json, false);
}

export function CharactersControllerGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharactersControllerGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'icon_url': json['icon_url'] == null ? undefined : json['icon_url'],
        'element': json['element'] == null ? undefined : json['element'],
        'rarity': json['rarity'] == null ? undefined : json['rarity'],
        'header_img_url': json['header_img_url'] == null ? undefined : json['header_img_url'],
        'weapon_type': json['weapon_type'] == null ? undefined : json['weapon_type'],
        'property': json['property'] == null ? undefined : json['property'],
        'unimplemented': json['unimplemented'] == null ? undefined : json['unimplemented'],
        'implemented_date': json['implemented_date'] == null ? undefined : json['implemented_date'],
        'region': json['region'] == null ? undefined : CharactersControllerGetRequestRegionFromJSON(json['region']),
        'weapon': json['weapon'] == null ? undefined : CharactersControllerGetRequestWeaponFromJSON(json['weapon']),
        'version': json['version'] == null ? undefined : CharactersControllerGetRequestVersionFromJSON(json['version']),
        'galleries': json['galleries'] == null ? undefined : ((json['galleries'] as Array<any>).map(CharactersControllerGetRequestGalleriesInnerFromJSON)),
        'artifact_set': json['artifact_set'] == null ? undefined : ((json['artifact_set'] as Array<any>).map(CharactersControllerGetRequestArtifactSetInnerFromJSON)),
    };
}

export function CharactersControllerGetRequestToJSON(json: any): CharactersControllerGetRequest {
    return CharactersControllerGetRequestToJSONTyped(json, false);
}

export function CharactersControllerGetRequestToJSONTyped(value?: CharactersControllerGetRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'icon_url': value['icon_url'],
        'element': value['element'],
        'rarity': value['rarity'],
        'header_img_url': value['header_img_url'],
        'weapon_type': value['weapon_type'],
        'property': value['property'],
        'unimplemented': value['unimplemented'],
        'implemented_date': value['implemented_date'],
        'region': CharactersControllerGetRequestRegionToJSON(value['region']),
        'weapon': CharactersControllerGetRequestWeaponToJSON(value['weapon']),
        'version': CharactersControllerGetRequestVersionToJSON(value['version']),
        'galleries': value['galleries'] == null ? undefined : ((value['galleries'] as Array<any>).map(CharactersControllerGetRequestGalleriesInnerToJSON)),
        'artifact_set': value['artifact_set'] == null ? undefined : ((value['artifact_set'] as Array<any>).map(CharactersControllerGetRequestArtifactSetInnerToJSON)),
    };
}


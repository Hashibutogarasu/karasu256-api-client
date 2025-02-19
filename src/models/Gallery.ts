/* tslint:disable */
/* eslint-disable */
/**
 * Karasu Lab API
 * API documentation for Karasu Lab
 *
 * The version of the OpenAPI document: 3.3.29
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
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
 * @interface Gallery
 */
export interface Gallery {
    /**
     * 
     * @type {string}
     * @memberof Gallery
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Gallery
     */
    alt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Gallery
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Gallery
     */
    key?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Gallery
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Gallery
     */
    updatedAt: Date;
    /**
     * 
     * @type {GICharacter}
     * @memberof Gallery
     */
    character?: GICharacter | null;
}

/**
 * Check if a given object implements the Gallery interface.
 */
export function instanceOfGallery(value: object): value is Gallery {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function GalleryFromJSON(json: any): Gallery {
    return GalleryFromJSONTyped(json, false);
}

export function GalleryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Gallery {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'alt': json['alt'] == null ? undefined : json['alt'],
        'url': json['url'] == null ? undefined : json['url'],
        'key': json['key'] == null ? undefined : json['key'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'character': json['character'] == null ? undefined : GICharacterFromJSON(json['character']),
    };
}

export function GalleryToJSON(json: any): Gallery {
    return GalleryToJSONTyped(json, false);
}

export function GalleryToJSONTyped(value?: Gallery | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'alt': value['alt'],
        'url': value['url'],
        'key': value['key'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'character': GICharacterToJSON(value['character']),
    };
}


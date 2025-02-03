/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Character } from './Character';
import type { VersionsEntity } from './VersionsEntity';
export type Weapon = {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    description?: string;
    icon_url: string;
    rarity: number;
    effect: string;
    type: string;
    characters: Array<Character>;
    version: VersionsEntity;
};


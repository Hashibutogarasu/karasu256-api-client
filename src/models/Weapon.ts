/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Character } from './Character';
export type Weapon = {
    id: number;
    name: string;
    description?: string;
    icon_url: string;
    rarity: number;
    effect: string;
    type: string;
    version: string;
    characters: Array<Character>;
};


/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenshinCountryEntity } from './GenshinCountryEntity';
import type { GenshinElementEntity } from './GenshinElementEntity';
import type { GenshinWeaponTypeEntity } from './GenshinWeaponTypeEntity';
export type GenshinCharacterEntity = {
    translationKey: string;
    id: string;
    entry_page_id?: string;
    name: string;
    slug: string;
    description: string;
    rarity: number;
    image?: string;
    element?: GenshinElementEntity;
    country?: GenshinCountryEntity;
    weaponType?: GenshinWeaponTypeEntity;
};


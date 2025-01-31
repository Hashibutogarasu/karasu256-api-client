/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactSets } from './ArtifactSets';
import type { Country } from './Country';
import type { Gallery } from './Gallery';
import type { Weapon } from './Weapon';
export type Character = {
    id: number;
    name: string;
    description: string;
    icon_url: string;
    element?: string;
    rarity?: number;
    version: string;
    header_img_url: string;
    weapon_type?: string;
    property?: string;
    uninplemented: boolean;
    createdAt: string;
    updatedAt: string;
    country?: Country | null;
    weapon?: Weapon | null;
    artifact_set: Array<ArtifactSets>;
    galleries?: Array<Gallery> | null;
};


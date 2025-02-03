/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifacts } from './Artifacts';
import type { ArtifactSets } from './ArtifactSets';
import type { Character } from './Character';
import type { Country } from './Country';
import type { Weapon } from './Weapon';
export type VersionsEntity = {
    id: string;
    name?: string;
    version_string: string;
    released: boolean;
    createdAt: string;
    updatedAt: string;
    entities: Array<Weapon>;
    artifact_sets: Array<ArtifactSets>;
    countries: Array<Country>;
    characters: Array<Character>;
    artifacts: Array<Artifacts>;
};


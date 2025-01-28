/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifacts } from './Artifacts';
import type { Character } from './Character';
export type ArtifactSets = {
    id: number;
    name: string;
    description: string;
    icon_url: string;
    one_set_effect: string;
    two_set_effect: string;
    four_set_effect: string;
    createdAt: string;
    updatedAt: string;
    artifacts: Array<Artifacts>;
    characters: Array<Character>;
};


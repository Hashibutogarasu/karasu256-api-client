/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Artifact } from './Artifact';
import type { CharacterPage } from './CharacterPage';
export type ArtifactSet = {
    id: string;
    name: string;
    slug: string;
    icon_url: string;
    updatedAt: string;
    createdAt: string;
    oneSetBonus?: string;
    twoSetBonus?: string;
    fourSetBonus?: string;
    characterPage?: Array<CharacterPage>;
    artifacts?: Array<Artifact>;
};


/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Character } from './Character';
import type { VersionsEntity } from './VersionsEntity';
export type Country = {
    id: string;
    name: string;
    description?: string;
    sumbnail_url?: string;
    characters: Array<Character>;
    createdAt: string;
    updatedAt: string;
    version: VersionsEntity;
};


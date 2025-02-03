/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactSets } from './ArtifactSets';
import type { VersionsEntity } from './VersionsEntity';
export type Artifacts = {
    id: string;
    name: string;
    icon_url: string;
    artifact_sets: Array<ArtifactSets>;
    createdAt: string;
    updatedAt: string;
    version: VersionsEntity;
};


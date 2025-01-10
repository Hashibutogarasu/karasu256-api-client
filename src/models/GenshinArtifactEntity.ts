/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenshinArtifactMainStat } from './GenshinArtifactMainStat';
export type GenshinArtifactEntity = {
    translationKey: string;
    id: string;
    name: string;
    slug: string;
    description: string;
    part: string;
    mainStat: GenshinArtifactMainStat;
    subStats: Array<GenshinArtifactMainStat>;
};


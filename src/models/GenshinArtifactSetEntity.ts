/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GenshinArtifactEntity } from './GenshinArtifactEntity';
import type { GenshinArtifactMainStat } from './GenshinArtifactMainStat';
import type { GenshinArtifactSubStat } from './GenshinArtifactSubStat';
import type { GenshinCharacterEntity } from './GenshinCharacterEntity';
export type GenshinArtifactSetEntity = {
    translationKey: string;
    id: string;
    name: string;
    slug: string;
    description: string;
    characters?: Array<GenshinCharacterEntity>;
    mainStats?: Array<GenshinArtifactMainStat>;
    recommendedSubStats?: Array<GenshinArtifactSubStat>;
    artifacts: Array<GenshinArtifactEntity>;
};


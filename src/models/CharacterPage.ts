/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactSet } from './ArtifactSet';
import type { CharacterData } from './CharacterData';
import type { CharacterExt } from './CharacterExt';
import type { CharacterFilterValues } from './CharacterFilterValues';
import type { CharacterModules } from './CharacterModules';
export type CharacterPage = {
    character_page_id: string;
    id: string;
    name: string;
    desc: string;
    icon_url: string;
    header_img_url: string;
    modules: Array<CharacterModules>;
    filter_values: CharacterFilterValues;
    menu_id: string;
    menu_name: string;
    version: string;
    langs: Array<string>;
    template_layout?: Record<string, any>;
    edit_lock_status: string;
    correct_lock_status: string;
    menus: Array<string>;
    template_id: string;
    ext?: CharacterExt;
    alias_name?: string;
    lang: string;
    beta: boolean;
    page_type: string;
    menu_style: string;
    character_data: CharacterData;
    artifactSets?: Array<ArtifactSet>;
};


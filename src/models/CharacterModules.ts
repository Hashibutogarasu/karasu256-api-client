/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacterComponents } from './CharacterComponents';
import type { CharacterPage } from './CharacterPage';
export type CharacterModules = {
    character_module_id: string;
    name: string;
    is_poped: boolean;
    components: Array<CharacterComponents>;
    hoyolab_id: string;
    is_customize_name: boolean;
    is_abstract: boolean;
    is_show_switch: boolean;
    switch: boolean;
    desc: string;
    repeated: boolean;
    is_submodule: boolean;
    origin_module_id: string;
    without_border: boolean;
    can_delete: boolean;
    is_hidden: boolean;
    rich_text_editing: boolean;
    createdAt: string;
    updatedAt: string;
    character_page?: Array<CharacterPage>;
};


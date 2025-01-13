/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacterFilterValue } from './CharacterFilterValue';
import type { CharacterListDataEntity } from './CharacterListDataEntity';
import type { DisplayField } from './DisplayField';
export type CharacterListEntity = {
    id: string;
    entry_page_id: string;
    name: string;
    icon_url: string;
    display_field: DisplayField;
    filter_values: CharacterFilterValue;
    desc: string;
    data: Array<CharacterListDataEntity>;
    createdAt: string;
    updatedAt: string;
};


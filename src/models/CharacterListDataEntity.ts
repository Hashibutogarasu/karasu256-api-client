/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CharacterEntity } from './CharacterEntity';
import type { CharacterListEntity } from './CharacterListEntity';
export type CharacterListDataEntity = {
    id: string;
    list: Array<CharacterListEntity>;
    total?: string | null;
    character: CharacterEntity;
};


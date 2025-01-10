/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UsersEntity } from './UsersEntity';
export type UsersPublicProfileEntity = {
    id: string;
    displayName: string;
    name: string | null;
    bio: string | null;
    avatarUrl: string | null;
    createdAt: string;
    updatedAt: string;
    following: Array<string>;
    followers: Array<string>;
    user?: UsersEntity | null;
};


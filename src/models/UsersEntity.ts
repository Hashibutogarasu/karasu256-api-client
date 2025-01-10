/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParentNodeEntity } from './ParentNodeEntity';
import type { UsersPublicProfileEntity } from './UsersPublicProfileEntity';
export type UsersEntity = {
    id: string;
    supabaseId: string;
    role: 'admin' | 'user';
    email: string;
    emailIsPublic: boolean;
    profileIsPublic: boolean;
    createdAt: string;
    updatedAt: string;
    parentNode: Array<ParentNodeEntity>;
    userPublicProfile?: Array<UsersPublicProfileEntity>;
};


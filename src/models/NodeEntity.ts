/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UsersEntity } from './UsersEntity';
export type NodeEntity = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    children?: Array<NodeEntity>;
    parent?: NodeEntity;
    user: UsersEntity;
};


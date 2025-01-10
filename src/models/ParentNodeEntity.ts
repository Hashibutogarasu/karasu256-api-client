/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NodeChildEntity } from './NodeChildEntity';
import type { UsersEntity } from './UsersEntity';
export type ParentNodeEntity = {
    id: string;
    userId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    nodeChild: Array<NodeChildEntity>;
    user: UsersEntity;
};


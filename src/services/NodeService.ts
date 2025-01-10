/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateParentNodeDto } from '../models/CreateParentNodeDto';
import type { DeleteNodeDto } from '../models/DeleteNodeDto';
import type { ParentNodeEntity } from '../models/ParentNodeEntity';
import type { UpdateParentNodeDto } from '../models/UpdateParentNodeDto';
import type { UsersEntity } from '../models/UsersEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NodeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ParentNodeEntity
     * @throws ApiError
     */
    public nodeControllerCreateNode({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: CreateParentNodeDto,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<ParentNodeEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/nodes/create',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns UsersEntity
     * @throws ApiError
     */
    public nodeControllerUpdateNode({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: UpdateParentNodeDto,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<UsersEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/nodes/update',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public nodeControllerDeleteNode({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: DeleteNodeDto,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/nodes/delete',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

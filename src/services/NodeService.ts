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
    }: {
        requestBody: CreateParentNodeDto,
    }): CancelablePromise<ParentNodeEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/nodes/create',
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
    }: {
        requestBody: UpdateParentNodeDto,
    }): CancelablePromise<UsersEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/nodes/update',
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
    }: {
        requestBody: DeleteNodeDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/nodes/delete',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteDto } from '../models/DeleteDto';
import type { NodeEntity } from '../models/NodeEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NodeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns NodeEntity
     * @throws ApiError
     */
    public nodeControllerGetAll({
        query,
    }: {
        query: {
            id?: string;
            name?: string;
            slug?: string;
        },
    }): CancelablePromise<Array<NodeEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nodes/all',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns NodeEntity
     * @throws ApiError
     */
    public nodeControllerGet({
        query,
    }: {
        query: {
            id: string;
            name: string;
            description: string;
            parent?: any;
            children?: Array<any>;
            parentId?: string;
            user: any;
        },
    }): CancelablePromise<Array<NodeEntity>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nodes',
            query: {
                'query': query,
            },
        });
    }
    /**
     * @returns NodeEntity
     * @throws ApiError
     */
    public nodeControllerCreate({
        requestBody,
    }: {
        requestBody: {
            id: string;
            name: string;
            description: string;
            parent?: any;
            children?: Array<any>;
            parentId?: string;
            user: any;
        },
    }): CancelablePromise<NodeEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/nodes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public nodeControllerUpdate({
        requestBody,
    }: {
        requestBody: {
            id: string;
            entity?: {
                id: string;
                name: string;
                description: string;
                parent?: any;
                children?: Array<any>;
                parentId?: string;
                user: any;
            };
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/nodes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public nodeControllerDelete({
        query,
        requestBody,
    }: {
        query: {
            id: string;
        },
        requestBody: DeleteDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/nodes',
            query: {
                'query': query,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

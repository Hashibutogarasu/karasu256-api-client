/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageDto } from '../models/MessageDto';
import type { UserExistsResponseDto } from '../models/UserExistsResponseDto';
import type { UsersEntity } from '../models/UsersEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UserService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any
     * @throws ApiError
     */
    public userControllerGetUser({
        authorization = 'Bearer {{token}}',
    }: {
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns MessageDto
     * @throws ApiError
     */
    public userControllerCreateUser({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            displayName: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<MessageDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/create',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns UserExistsResponseDto
     * @throws ApiError
     */
    public userControllerUserExists({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            id: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<UserExistsResponseDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/exists',
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
    public userControllerUpdateUser({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            displayName?: string;
            emailIsPublic?: boolean;
            name?: string;
            bio?: string;
            avatarUrl?: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<UsersEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/update',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

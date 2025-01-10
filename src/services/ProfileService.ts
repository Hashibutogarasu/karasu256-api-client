/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUsersPublicProfileDto } from '../models/CreateUsersPublicProfileDto';
import type { UpdateUsersPublicProfileDto } from '../models/UpdateUsersPublicProfileDto';
import type { UsersPublicProfileEntity } from '../models/UsersPublicProfileEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProfileService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns UsersPublicProfileEntity
     * @throws ApiError
     */
    public profileControllerGetProfile({
        authorization = 'Bearer {{token}}',
    }: {
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<UsersPublicProfileEntity> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/profile',
            headers: {
                'Authorization': authorization,
            },
        });
    }
    /**
     * @returns UsersPublicProfileEntity
     * @throws ApiError
     */
    public profileControllerCreateProfile({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: CreateUsersPublicProfileDto,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<UsersPublicProfileEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/profile/create',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns UsersPublicProfileEntity
     * @throws ApiError
     */
    public profileControllerUpdateProfile({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: UpdateUsersPublicProfileDto,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<UsersPublicProfileEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/profile/update',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

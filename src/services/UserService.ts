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
    public userControllerGetUser(): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users',
        });
    }
    /**
     * @returns MessageDto
     * @throws ApiError
     */
    public userControllerCreateUser({
        requestBody,
    }: {
        requestBody: {
            displayName: string;
        },
    }): CancelablePromise<MessageDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/create',
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
    }: {
        requestBody: {
            id: string;
        },
    }): CancelablePromise<UserExistsResponseDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/exists',
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
    }: {
        requestBody: {
            displayName?: string;
            emailIsPublic?: boolean;
            name?: string;
            bio?: string;
            avatarUrl?: string;
        },
    }): CancelablePromise<UsersEntity> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}

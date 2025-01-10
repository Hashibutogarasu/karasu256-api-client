/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenDto } from '../models/AccessTokenDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any
     * @throws ApiError
     */
    public authControllerSignUp({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            email: string;
            password: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/signup',
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns AccessTokenDto
     * @throws ApiError
     */
    public authControllerSignIn({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            email: string;
            password: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<AccessTokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/signin',
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
    public authControllerGooglePasswordless({
        requestBody,
        authorization = 'Bearer {{token}}',
    }: {
        requestBody: {
            email: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/signin/passwordless',
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
    public authControllerVerify({
        token,
        authorization = 'Bearer {{token}}',
    }: {
        token: string,
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/verify',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'token': token,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public authControllerConfirm({
        type,
        authorization = 'Bearer {{token}}',
    }: {
        type: {
            token_hash: string;
            type: string;
        },
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/confirm',
            headers: {
                'Authorization': authorization,
            },
            query: {
                'type': type,
            },
        });
    }
    /**
     * @returns any Redirects to Google OAuth page
     * @throws ApiError
     */
    public googleControllerGoogle({
        authorization = 'Bearer {{token}}',
    }: {
        /**
         * Bearer token
         */
        authorization?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/google/login',
            headers: {
                'Authorization': authorization,
            },
        });
    }
}

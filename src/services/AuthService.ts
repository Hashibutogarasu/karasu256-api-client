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
    }: {
        requestBody: {
            email: string;
            password: string;
        },
    }): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/signup',
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
    }: {
        requestBody: {
            email?: string;
            password?: string;
        },
    }): CancelablePromise<AccessTokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/signin',
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
    }: {
        requestBody: {
            email: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/signin/passwordless',
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
    }: {
        token: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/verify',
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
    }: {
        type: {
            token_hash: string;
            type: string;
        },
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/confirm',
            query: {
                'type': type,
            },
        });
    }
    /**
     * @returns any Redirects to Google OAuth page
     * @throws ApiError
     */
    public googleControllerGoogle(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/google/login',
        });
    }
}

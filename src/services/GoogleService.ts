/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GoogleService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
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

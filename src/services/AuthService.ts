/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any
     * @throws ApiError
     */
    public authControllerMe(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth',
        });
    }
}

/*
External API



# Developer Resources
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface WebhooksListResponseInner
 */
export interface WebhooksListResponseInner {
    /**
     * 
     * @type {string}
     * @memberof WebhooksListResponseInner
     */
    'hookId'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksListResponseInner
     */
    'companyId'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksListResponseInner
     */
    'uri'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksListResponseInner
     */
    'authType'?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksListResponseInner
     */
    'createdDate'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhooksListResponseInner
     */
    'domains'?: Array<string>;
}

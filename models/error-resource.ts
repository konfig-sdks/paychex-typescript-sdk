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
 * Representation of error
 * @export
 * @interface ErrorResource
 */
export interface ErrorResource {
    /**
     * Description of error
     * @type {string}
     * @memberof ErrorResource
     */
    'description'?: string;
    /**
     * Error code
     * @type {string}
     * @memberof ErrorResource
     */
    'code'?: string;
    /**
     * Resolution of error
     * @type {string}
     * @memberof ErrorResource
     */
    'resolution'?: string;
}

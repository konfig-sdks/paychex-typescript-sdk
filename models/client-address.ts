/*
External API



# Developer Resources
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Client } from './client';
import { ClientAddressVersion } from './client-address-version';

/**
 * 
 * @export
 * @interface ClientAddress
 */
export interface ClientAddress {
    /**
     * 
     * @type {number}
     * @memberof ClientAddress
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientAddress
     */
    'addressUsageType'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddress
     */
    'createdDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddress
     */
    'createdByApplicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddress
     */
    'createdByUserId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddress
     */
    'createdByApplicationSubProcessName'?: string;
    /**
     * 
     * @type {Client}
     * @memberof ClientAddress
     */
    'client'?: Client;
    /**
     * 
     * @type {Array<ClientAddressVersion>}
     * @memberof ClientAddress
     */
    'clientAddressVersions'?: Array<ClientAddressVersion>;
}

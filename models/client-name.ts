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
import { ClientNameVersion } from './client-name-version';

/**
 * 
 * @export
 * @interface ClientName
 */
export interface ClientName {
    /**
     * 
     * @type {number}
     * @memberof ClientName
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientName
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientName
     */
    'createdDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientName
     */
    'createdByApplicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientName
     */
    'createdByUserId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientName
     */
    'createdByApplicationSubProcessName'?: string;
    /**
     * 
     * @type {Client}
     * @memberof ClientName
     */
    'clients'?: Client;
    /**
     * 
     * @type {Array<ClientNameVersion>}
     * @memberof ClientName
     */
    'clientNameVersions'?: Array<ClientNameVersion>;
}


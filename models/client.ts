/*
External API



# Developer Resources
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ClientAccountRelation } from './client-account-relation';
import { ClientAddress } from './client-address';
import { ClientName } from './client-name';
import { ClientVersion } from './client-version';

/**
 * 
 * @export
 * @interface Client
 */
export interface Client {
    /**
     * 
     * @type {number}
     * @memberof Client
     */
    'lockVersion'?: number;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'createdByApplicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'createdByUserId'?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'createdDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'createdByApplicationSubProcessName'?: string;
    /**
     * 
     * @type {Array<ClientAccountRelation>}
     * @memberof Client
     */
    'clientAccountRelations'?: Array<ClientAccountRelation>;
    /**
     * 
     * @type {Array<ClientAddress>}
     * @memberof Client
     */
    'clientAddresses'?: Array<ClientAddress>;
    /**
     * 
     * @type {Array<ClientName>}
     * @memberof Client
     */
    'clientNames'?: Array<ClientName>;
    /**
     * 
     * @type {Array<ClientVersion>}
     * @memberof Client
     */
    'clientVersions'?: Array<ClientVersion>;
    /**
     * 
     * @type {string}
     * @memberof Client
     */
    'ceid'?: string;
}


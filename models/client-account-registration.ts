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
import { ClientAccount } from './client-account';

/**
 * 
 * @export
 * @interface ClientAccountRegistration
 */
export interface ClientAccountRegistration {
    /**
     * 
     * @type {number}
     * @memberof ClientAccountRegistration
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'startDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'endDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'endReasonCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'createdDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'createdByApplicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'createdByUserId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'createdByApplicationSubProcessName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'modifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'modifiedByApplicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'modifiedByApplicationSubProcessName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRegistration
     */
    'modifiedByUserId'?: string;
    /**
     * 
     * @type {Client}
     * @memberof ClientAccountRegistration
     */
    'client'?: Client;
    /**
     * 
     * @type {ClientAccount}
     * @memberof ClientAccountRegistration
     */
    'clientAccount'?: ClientAccount;
}


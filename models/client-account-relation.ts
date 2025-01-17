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

/**
 * 
 * @export
 * @interface ClientAccountRelation
 */
export interface ClientAccountRelation {
    /**
     * 
     * @type {number}
     * @memberof ClientAccountRelation
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'applicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'assignedName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'sibApplicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'sibAssignedName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'createdDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'endDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'createdByApplicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'createdByUserId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'createdByApplicationSubProcessName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'modifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'modifiedByApplicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'modifiedByApplicationSubProcessName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'modifiedByUserId'?: string;
    /**
     * 
     * @type {Client}
     * @memberof ClientAccountRelation
     */
    'client'?: Client;
    /**
     * 
     * @type {string}
     * @memberof ClientAccountRelation
     */
    'caid'?: string;
}


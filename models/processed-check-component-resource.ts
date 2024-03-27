/*
External API



# Developer Resources
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OrganizationResource2 } from './organization-resource2';

/**
 * 
 * @export
 * @interface ProcessedCheckComponentResource
 */
export interface ProcessedCheckComponentResource {
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'componentId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'checkComponentId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'classificationType'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'effectOnPay'?: ProcessedCheckComponentResourceEffectOnPayEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ProcessedCheckComponentResource
     */
    'memoed'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'laborAssignmentId'?: string;
    /**
     * 
     * @type {OrganizationResource2}
     * @memberof ProcessedCheckComponentResource
     */
    'organization'?: OrganizationResource2;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'jobName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'jobId'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'paidBy'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'lineDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'amount'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'rate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'hours'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessedCheckComponentResource
     */
    'units'?: string;
}

type ProcessedCheckComponentResourceEffectOnPayEnum = 'ADDITION' | 'ADDITION_WITH_IN_OUT' | 'EMPLOYER_INFORMATIONAL' | 'REDUCTION'


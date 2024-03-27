/*
External API



# Developer Resources
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Link } from './link';

/**
 * 
 * @export
 * @interface CheckSummaryResource
 */
export interface CheckSummaryResource {
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'payPeriodId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'checkDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'payRunDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'totalHrs'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'checkNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'totalEarnings'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'totalWithholdings'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'totalDeductions'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'netPay'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'checkType'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'grossYTD'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckSummaryResource
     */
    'netYTD'?: string;
    /**
     * 
     * @type {Array<Link>}
     * @memberof CheckSummaryResource
     */
    'links'?: Array<Link>;
}

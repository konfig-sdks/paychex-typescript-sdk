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
 * @interface ClientPayComponentFrequency
 */
export interface ClientPayComponentFrequency {
    /**
     * 
     * @type {number}
     * @memberof ClientPayComponentFrequency
     */
    'cfId'?: number;
    /**
     * 
     * @type {number}
     * @memberof ClientPayComponentFrequency
     */
    'frequencyOptionId'?: number;
    /**
     * 
     * @type {number}
     * @memberof ClientPayComponentFrequency
     */
    'freqTypeId'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'frequencyType'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'freqType'?: string;
    /**
     * 
     * @type {number}
     * @memberof ClientPayComponentFrequency
     */
    'payFreqId'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'payFrequency'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'payFreq'?: string;
    /**
     * 
     * @type {number}
     * @memberof ClientPayComponentFrequency
     */
    'firstPeriodOccurrenceId'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'firstPeriodOccurrenceType'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'firstFrequencyPeriod'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'firstPeriodOccurrence'?: string;
    /**
     * 
     * @type {number}
     * @memberof ClientPayComponentFrequency
     */
    'secondPeriodOccurrenceId'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'secondPeriodOccurrenceType'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'secondFrequencyPeriod'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'secondPeriodOccurrence'?: string;
    /**
     * 
     * @type {number}
     * @memberof ClientPayComponentFrequency
     */
    'intervalValue'?: number;
    /**
     * 
     * @type {number}
     * @memberof ClientPayComponentFrequency
     */
    'firstCheckRuleId'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'firstCheckRuleType'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientPayComponentFrequency
     */
    'firstCheckRule'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ClientPayComponentFrequency
     */
    'firstCheckOnly'?: boolean;
}


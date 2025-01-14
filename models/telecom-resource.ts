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
 * The telecom communications for this contact.
 * @export
 * @interface TelecomResource
 */
export interface TelecomResource {
    /**
     * The ID for the workers relationship to contact.
     * @type {string}
     * @memberof TelecomResource
     */
    'communicationId'?: string;
    /**
     * The country code. Required for POST contacts.
     * @type {string}
     * @memberof TelecomResource
     */
    'dialCountry'?: string;
    /**
     * The area code. Required for POST contacts.
     * @type {string}
     * @memberof TelecomResource
     */
    'dialArea'?: string;
    /**
     * The phone number. Required for POST contacts.
     * @type {string}
     * @memberof TelecomResource
     */
    'dialNumber'?: string;
    /**
     * Enum: \"PHONE\", \"MOBILE_PHONE\"  Indicates whether or not the number is for a mobile device. Required for POST contacts.
     * @type {string}
     * @memberof TelecomResource
     */
    'type'?: string;
    /**
     * Enum: \"PERSONAL\", \"BUSINESS\"  A code classifying a designated use associated with a contact method. For example, whether a telephone or email address is one for work communications or one primarily for personal use. This data field cannot be PATCHED. Required for POST contacts.
     * @type {string}
     * @memberof TelecomResource
     */
    'usageType'?: string;
    /**
     * The phone extension.
     * @type {string}
     * @memberof TelecomResource
     */
    'extension'?: string;
}


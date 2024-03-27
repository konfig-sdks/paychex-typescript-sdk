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
 * The email communications for this contact.
 * @export
 * @interface EmailResource
 */
export interface EmailResource {
    /**
     * The ID for this email communication.
     * @type {string}
     * @memberof EmailResource
     */
    'communicationId'?: string;
    /**
     * The mailto address as specified in RFC2368. Required for POST contacts.
     * @type {string}
     * @memberof EmailResource
     */
    'uri'?: string;
    /**
     * Enum: \"PERSONAL\", \"BUSINESS\"  A code classifying a designated use associated with a contact method. For example, whether a telephone or email address is one for work communications or one primarily for personal use. This data field cannot be PATCHED. Required for POST contacts.
     * @type {string}
     * @memberof EmailResource
     */
    'usageType'?: string;
}

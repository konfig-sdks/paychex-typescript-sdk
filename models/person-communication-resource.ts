/*
External API



# Developer Resources
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmailResource } from './email-resource';
import { PostalResource } from './postal-resource';
import { TelecomResource } from './telecom-resource';

/**
 * The set of communications for this contact. Required for POST contacts.
 * @export
 * @interface PersonCommunicationResource
 */
export interface PersonCommunicationResource {
    /**
     * The telecom communications for this contact.
     * @type {Array<TelecomResource>}
     * @memberof PersonCommunicationResource
     */
    'telecom'?: Array<TelecomResource>;
    /**
     * The postal communications for this contact.
     * @type {Array<PostalResource>}
     * @memberof PersonCommunicationResource
     */
    'postal'?: Array<PostalResource>;
    /**
     * The email communications for this contact.
     * @type {Array<EmailResource>}
     * @memberof PersonCommunicationResource
     */
    'email'?: Array<EmailResource>;
}


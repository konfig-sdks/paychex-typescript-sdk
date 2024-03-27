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
 * The relationship type for this worker contact. Required for POST person contacts.
 * @export
 * @interface RelationTypeResource1
 */
export interface RelationTypeResource1 {
    /**
     * ID of worker specific type of relationship with the contact. Required for POST contacts.
     * @type {string}
     * @memberof RelationTypeResource1
     */
    'relationshipTypeId'?: string;
    /**
     * The name of worker specific type of relationship with the contact.  Enum: \"Spouse\", \"Parent\", \"Sibling\", \"Child\",  \"Friend\", \"Domestic Partner\", \"Other\"
     * @type {string}
     * @memberof RelationTypeResource1
     */
    'relationshipTypeName'?: string;
}

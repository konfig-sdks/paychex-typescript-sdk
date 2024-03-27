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
 * @interface WorkerCustomFieldsResource
 */
export interface WorkerCustomFieldsResource {
    /**
     * The unique identifier that is autogenerated when a custom field is created
     * @type {string}
     * @memberof WorkerCustomFieldsResource
     */
    'workerCustomFieldId'?: string;
    /**
     * client Custom Field Id
     * @type {string}
     * @memberof WorkerCustomFieldsResource
     */
    'customFieldId'?: string;
    /**
     * The type of field the custom field is
     * @type {string}
     * @memberof WorkerCustomFieldsResource
     */
    'type'?: WorkerCustomFieldsResourceTypeEnum;
    /**
     * The value for BOOLEAN type (true/false)
     * @type {boolean}
     * @memberof WorkerCustomFieldsResource
     */
    'booleanValue'?: boolean;
    /**
     * The value for TEXT type (any text, alphanumeric, special characters allowed)
     * @type {string}
     * @memberof WorkerCustomFieldsResource
     */
    'textValue'?: string;
    /**
     * Numeric data type can have three formats namely - whole number, second decimal place and fourth decimal place, example: 12 , 12.34 or 12.3456
     * @type {number}
     * @memberof WorkerCustomFieldsResource
     */
    'numericValue'?: number;
    /**
     * The value for DATE type , example : 2012-02-01T05:00:00Z
     * @type {string}
     * @memberof WorkerCustomFieldsResource
     */
    'dateValue'?: string;
    /**
     * The unique identifier that is autogenerated when dropdown list is created
     * @type {string}
     * @memberof WorkerCustomFieldsResource
     */
    'dropdownId'?: string;
    /**
     * The value for dropdown list
     * @type {string}
     * @memberof WorkerCustomFieldsResource
     */
    'dropdownValue'?: string;
    /**
     * The name of the custom field. Such as: \"Hobbies\"
     * @type {string}
     * @memberof WorkerCustomFieldsResource
     */
    'customFieldName'?: string;
    /**
     * Where to indicate if the custom field is required on the worker where true = required and false = not required
     * @type {boolean}
     * @memberof WorkerCustomFieldsResource
     */
    'required'?: boolean;
    /**
     * Where to indicate if the custom field is required on the workers pay stub, where true = required and false = not required.
     * @type {boolean}
     * @memberof WorkerCustomFieldsResource
     */
    'checkStub'?: boolean;
    /**
     * Where to indicate if the custom field is able to be edited by the employee, where true = required and false = not required.
     * @type {boolean}
     * @memberof WorkerCustomFieldsResource
     */
    'employeeEditable'?: boolean;
}

type WorkerCustomFieldsResourceTypeEnum = 'DROPDOWN' | 'TEXT' | 'BOOLEAN' | 'DATE' | 'NUMERIC, NUMERIC__0_00_ OR NUMERIC__0_0000_'


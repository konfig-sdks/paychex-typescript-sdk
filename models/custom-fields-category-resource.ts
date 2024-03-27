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
 * @interface CustomFieldsCategoryResource
 */
export interface CustomFieldsCategoryResource {
    /**
     * The unique identifier that is autogenerated when creating a category
     * @type {string}
     * @memberof CustomFieldsCategoryResource
     */
    'categoryId'?: string;
    /**
     * The name of the Category
     * @type {string}
     * @memberof CustomFieldsCategoryResource
     */
    'categoryName'?: string;
    /**
     * 
     * @type {Array<Link>}
     * @memberof CustomFieldsCategoryResource
     */
    'links'?: Array<Link>;
}

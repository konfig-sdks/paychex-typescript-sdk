/*
External API



# Developer Resources
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ErrorResource } from './error-resource';
import { Link } from './link';
import { MetadataResource } from './metadata-resource';

/**
 * 
 * @export
 * @interface CollectionResource
 */
export interface CollectionResource {
    /**
     * 
     * @type {MetadataResource}
     * @memberof CollectionResource
     */
    'metadata'?: MetadataResource;
    /**
     * 
     * @type {Array<object>}
     * @memberof CollectionResource
     */
    'content'?: Array<object>;
    /**
     * 
     * @type {Array<ErrorResource>}
     * @memberof CollectionResource
     */
    'errors'?: Array<ErrorResource>;
    /**
     * 
     * @type {string}
     * @memberof CollectionResource
     */
    'message'?: string;
    /**
     * 
     * @type {Array<Link>}
     * @memberof CollectionResource
     */
    'links'?: Array<Link>;
}

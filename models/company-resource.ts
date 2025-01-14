/*
External API



# Developer Resources
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CommunicationResource } from './communication-resource';
import { LegalIdResource } from './legal-id-resource';
import { Link } from './link';

/**
 * The state representation of a company
 * @export
 * @interface CompanyResource
 */
export interface CompanyResource {
    /**
     * The unique identifier associated with this companies representation.
     * @type {string}
     * @memberof CompanyResource
     */
    'companyId'?: string;
    /**
     * The client account number used for identification purposes. (no dash or spaces allowed, only the last 8 characters  of the ID)
     * @type {string}
     * @memberof CompanyResource
     */
    'displayId'?: string;
    /**
     * The legal name of the company.
     * @type {string}
     * @memberof CompanyResource
     */
    'legalName'?: string;
    /**
     * 
     * @type {LegalIdResource}
     * @memberof CompanyResource
     */
    'legalId'?: LegalIdResource;
    /**
     * 
     * @type {Array<CommunicationResource>}
     * @memberof CompanyResource
     */
    'communications'?: Array<CommunicationResource>;
    /**
     * 
     * @type {Array<Link>}
     * @memberof CompanyResource
     */
    'links'?: Array<Link>;
}


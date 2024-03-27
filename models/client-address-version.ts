/*
External API



# Developer Resources
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ClientAddress } from './client-address';

/**
 * 
 * @export
 * @interface ClientAddressVersion
 */
export interface ClientAddressVersion {
    /**
     * 
     * @type {number}
     * @memberof ClientAddressVersion
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'valStateCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'verStateCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'beginEffectiveDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'endEffectiveDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'modifiedDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'stateProvince'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'stateProvinceF'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'portalCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'countryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'buildingNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'unitName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'streetName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'poBox'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'streetAddressOne'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'streetAddressTwo'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'modifedByApplicationName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'modifiedByApplicationSubProcessName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ClientAddressVersion
     */
    'modifiedByUserId'?: string;
    /**
     * 
     * @type {ClientAddress}
     * @memberof ClientAddressVersion
     */
    'clientAddress'?: ClientAddress;
}

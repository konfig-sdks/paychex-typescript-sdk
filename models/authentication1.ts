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
 * Required Authentication object is going to be different based on each authType. <br />* NO_AUTH doesn\'t have any other fields in authentication object <br />* BASIC_AUTH needs 2 fields: username and password <br />* APIKEY requires the field: apiKey <br />* OAUTH2 requires 5 fields:  tokenUrl, clientId, clientSecret, grantType, contentType <br />* OAUTH2_BASIC requires 5 fields:  tokenUrl, clientId, clientSecret, grantType, contentType
 * @export
 * @interface Authentication1
 */
export interface Authentication1 {
    /**
     * The authorization method used to authorize callers to your webhook url.
     * @type {string}
     * @memberof Authentication1
     */
    'authType': Authentication1AuthTypeEnum;
    /**
     * The API key required for API_KEY authorization.
     * @type {string}
     * @memberof Authentication1
     */
    'apiKey'?: string;
    /**
     * The username required for BASIC_AUTH authorization.
     * @type {string}
     * @memberof Authentication1
     */
    'username'?: string;
    /**
     * The password required for BASIC_AUTH authorization.
     * @type {string}
     * @memberof Authentication1
     */
    'password'?: string;
    /**
     * The URL used to obtain an access token for OAUTH2 or OAUTH2_BASIC authorization.
     * @type {string}
     * @memberof Authentication1
     */
    'tokenUrl'?: string;
    /**
     * The client ID required by OAUTH2 and OAUTH2_BASIC authorization.
     * @type {string}
     * @memberof Authentication1
     */
    'clientId'?: string;
    /**
     * The client secret required by OAUTH2 and OAUTH2_BASIC authorization.
     * @type {string}
     * @memberof Authentication1
     */
    'clientSecret'?: string;
    /**
     * The grant type used to acquire an access token by OAUTH2 and OAUTH2_BASIC authorization.
     * @type {string}
     * @memberof Authentication1
     */
    'grantType'?: string;
    /**
     * The content type to use in the token request for OAUTH2 and OAUTH2_BASIC authorization.
     * @type {string}
     * @memberof Authentication1
     */
    'contentType'?: string;
}

type Authentication1AuthTypeEnum = 'NO_AUTH' | 'BASIC_AUTH' | 'API_KEY' | 'OAUTH2' | 'OAUTH2_BASIC'



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
 * Worker Assignment Distributions
 * @export
 * @interface WorkerAssignmentDistributionsResource
 */
export interface WorkerAssignmentDistributionsResource {
    /**
     * The job associated with this distribution
     * @type {string}
     * @memberof WorkerAssignmentDistributionsResource
     */
    'jobId'?: string;
    /**
     * The labor assignment associated with this distribution.
     * @type {string}
     * @memberof WorkerAssignmentDistributionsResource
     */
    'laborAssignmentId'?: string;
    /**
     * The allocation of the assignment distribution (percentage).
     * @type {string}
     * @memberof WorkerAssignmentDistributionsResource
     */
    'value'?: string;
}


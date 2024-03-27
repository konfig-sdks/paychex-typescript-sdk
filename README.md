<div align="left">

[![Visit Paychex](./header.png)](https://paychex.com)

# [Paychex](https://paychex.com)<a id="paychex"></a>



# Developer Resources<a id="developer-resources"></a>
 Refer
[Developer Resources](https://developer.paychex.com/resources/overview/) for more details on API specification 

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`paychex.authentication.createBearerToken`](#paychexauthenticationcreatebearertoken)
  * [`paychex.company.addInProgressWorkers`](#paychexcompanyaddinprogressworkers)
  * [`paychex.company.addJob`](#paychexcompanyaddjob)
  * [`paychex.company.createCustomFieldAtCompanyLevel`](#paychexcompanycreatecustomfieldatcompanylevel)
  * [`paychex.company.createCustomFieldCategory`](#paychexcompanycreatecustomfieldcategory)
  * [`paychex.company.deleteCustomField`](#paychexcompanydeletecustomfield)
  * [`paychex.company.deleteCustomFieldsCategory`](#paychexcompanydeletecustomfieldscategory)
  * [`paychex.company.getCalculationBases`](#paychexcompanygetcalculationbases)
  * [`paychex.company.getContactTypes`](#paychexcompanygetcontacttypes)
  * [`paychex.company.getCustomField`](#paychexcompanygetcustomfield)
  * [`paychex.company.getCustomFieldCategories`](#paychexcompanygetcustomfieldcategories)
  * [`paychex.company.getCustomFields`](#paychexcompanygetcustomfields)
  * [`paychex.company.getCustomFieldsCategory`](#paychexcompanygetcustomfieldscategory)
  * [`paychex.company.getInformation`](#paychexcompanygetinformation)
  * [`paychex.company.getJobInformation`](#paychexcompanygetjobinformation)
  * [`paychex.company.getJobSegmentStructureSetup`](#paychexcompanygetjobsegmentstructuresetup)
  * [`paychex.company.getJobTitle`](#paychexcompanygetjobtitle)
  * [`paychex.company.getJobs`](#paychexcompanygetjobs)
  * [`paychex.company.getLaborAssignment`](#paychexcompanygetlaborassignment)
  * [`paychex.company.getLocation`](#paychexcompanygetlocation)
  * [`paychex.company.getLocations`](#paychexcompanygetlocations)
  * [`paychex.company.getOrganization`](#paychexcompanygetorganization)
  * [`paychex.company.getOrganizations`](#paychexcompanygetorganizations)
  * [`paychex.company.getPayFrequencies`](#paychexcompanygetpayfrequencies)
  * [`paychex.company.getStatus`](#paychexcompanygetstatus)
  * [`paychex.company.getWorkers`](#paychexcompanygetworkers)
  * [`paychex.company.list`](#paychexcompanylist)
  * [`paychex.company.listJobTitles`](#paychexcompanylistjobtitles)
  * [`paychex.company.listLaborAssignments`](#paychexcompanylistlaborassignments)
  * [`paychex.company.listWorkerStatuses`](#paychexcompanylistworkerstatuses)
  * [`paychex.company.updateCustomField`](#paychexcompanyupdatecustomfield)
  * [`paychex.company.updateCustomFieldsCategory`](#paychexcompanyupdatecustomfieldscategory)
  * [`paychex.company.updateJob`](#paychexcompanyupdatejob)
  * [`paychex.management.linkPaychexClients`](#paychexmanagementlinkpaychexclients)
  * [`paychex.payroll.addCompanyChecks`](#paychexpayrolladdcompanychecks)
  * [`paychex.payroll.addPayComponentToCheck`](#paychexpayrolladdpaycomponenttocheck)
  * [`paychex.payroll.addWorkerCheck`](#paychexpayrolladdworkercheck)
  * [`paychex.payroll.deleteChecksByPayPeriodAndUser`](#paychexpayrolldeletechecksbypayperiodanduser)
  * [`paychex.payroll.getCompanyChecksByPayPeriod`](#paychexpayrollgetcompanychecksbypayperiod)
  * [`paychex.payroll.getCompanyPayComponent`](#paychexpayrollgetcompanypaycomponent)
  * [`paychex.payroll.getCompanyPayComponents`](#paychexpayrollgetcompanypaycomponents)
  * [`paychex.payroll.getCompanyPayPeriods`](#paychexpayrollgetcompanypayperiods)
  * [`paychex.payroll.getPayPeriod`](#paychexpayrollgetpayperiod)
  * [`paychex.payroll.getWorkerCheck`](#paychexpayrollgetworkercheck)
  * [`paychex.payroll.getWorkerChecksByPayPeriod`](#paychexpayrollgetworkerchecksbypayperiod)
  * [`paychex.payroll.removePayComponent`](#paychexpayrollremovepaycomponent)
  * [`paychex.payroll.removeWorkerCheck`](#paychexpayrollremoveworkercheck)
  * [`paychex.payroll.updatePayComponent`](#paychexpayrollupdatepaycomponent)
  * [`paychex.webhooks.addWebhook`](#paychexwebhooksaddwebhook)
  * [`paychex.webhooks.deleteById`](#paychexwebhooksdeletebyid)
  * [`paychex.webhooks.getAvailableDomains`](#paychexwebhooksgetavailabledomains)
  * [`paychex.webhooks.getSpecificHookById`](#paychexwebhooksgetspecifichookbyid)
  * [`paychex.webhooks.list`](#paychexwebhookslist)
  * [`paychex.worker.addCommunication`](#paychexworkeraddcommunication)
  * [`paychex.worker.addDirectDeposit`](#paychexworkeradddirectdeposit)
  * [`paychex.worker.addFederalTaxSetup`](#paychexworkeraddfederaltaxsetup)
  * [`paychex.worker.addPayComponent`](#paychexworkeraddpaycomponent)
  * [`paychex.worker.addPayRate`](#paychexworkeraddpayrate)
  * [`paychex.worker.addWorkerContacts`](#paychexworkeraddworkercontacts)
  * [`paychex.worker.createCustomField`](#paychexworkercreatecustomfield)
  * [`paychex.worker.deleteContactByContactId`](#paychexworkerdeletecontactbycontactid)
  * [`paychex.worker.deleteCustomField`](#paychexworkerdeletecustomfield)
  * [`paychex.worker.deleteInProgress`](#paychexworkerdeleteinprogress)
  * [`paychex.worker.getCommunicationItem`](#paychexworkergetcommunicationitem)
  * [`paychex.worker.getCommunications`](#paychexworkergetcommunications)
  * [`paychex.worker.getCompensationInformation`](#paychexworkergetcompensationinformation)
  * [`paychex.worker.getContactByContactId`](#paychexworkergetcontactbycontactid)
  * [`paychex.worker.getContacts`](#paychexworkergetcontacts)
  * [`paychex.worker.getCustomField`](#paychexworkergetcustomfield)
  * [`paychex.worker.getCustomFields`](#paychexworkergetcustomfields)
  * [`paychex.worker.getDirectDeposit`](#paychexworkergetdirectdeposit)
  * [`paychex.worker.getFederalTaxSetup`](#paychexworkergetfederaltaxsetup)
  * [`paychex.worker.getInformation`](#paychexworkergetinformation)
  * [`paychex.worker.getPayComponent`](#paychexworkergetpaycomponent)
  * [`paychex.worker.getPayComponents`](#paychexworkergetpaycomponents)
  * [`paychex.worker.getPayRate`](#paychexworkergetpayrate)
  * [`paychex.worker.getPayRatesByWorkerId`](#paychexworkergetpayratesbyworkerid)
  * [`paychex.worker.getPayStandards`](#paychexworkergetpaystandards)
  * [`paychex.worker.getTimeOffBalance`](#paychexworkergettimeoffbalance)
  * [`paychex.worker.getWorkerStatusList`](#paychexworkergetworkerstatuslist)
  * [`paychex.worker.listAssignmentDistributions`](#paychexworkerlistassignmentdistributions)
  * [`paychex.worker.listDirectDeposits`](#paychexworkerlistdirectdeposits)
  * [`paychex.worker.removeCommunication`](#paychexworkerremovecommunication)
  * [`paychex.worker.removeDirectDeposit`](#paychexworkerremovedirectdeposit)
  * [`paychex.worker.removeFederalTax`](#paychexworkerremovefederaltax)
  * [`paychex.worker.removePayComponent`](#paychexworkerremovepaycomponent)
  * [`paychex.worker.removePayRate`](#paychexworkerremovepayrate)
  * [`paychex.worker.updateCommunicationItem`](#paychexworkerupdatecommunicationitem)
  * [`paychex.worker.updateCompensationRate`](#paychexworkerupdatecompensationrate)
  * [`paychex.worker.updateContact`](#paychexworkerupdatecontact)
  * [`paychex.worker.updateCustomField`](#paychexworkerupdatecustomfield)
  * [`paychex.worker.updateDirectDeposit`](#paychexworkerupdatedirectdeposit)
  * [`paychex.worker.updateDirectDeposits`](#paychexworkerupdatedirectdeposits)
  * [`paychex.worker.updateFederalTaxSetup`](#paychexworkerupdatefederaltaxsetup)
  * [`paychex.worker.updatePayComponent`](#paychexworkerupdatepaycomponent)
  * [`paychex.worker.updatePayComponents`](#paychexworkerupdatepaycomponents)
  * [`paychex.worker.updateUniqueWorker`](#paychexworkerupdateuniqueworker)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Paychex&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Paychex } from "paychex-typescript-sdk";

const paychex = new Paychex({
  // Defining the base path is optional and defaults to https://api.paychex.com
  // basePath: "https://api.paychex.com",
});

const createBearerTokenResponse =
  await paychex.authentication.createBearerToken({
    grant_type: "grant_type_example",
    client_id: "client_id_example",
    client_secret: "client_secret_example",
  });

console.log(createBearerTokenResponse);
```

## Reference<a id="reference"></a>


### `paychex.authentication.createBearerToken`<a id="paychexauthenticationcreatebearertoken"></a>

Request a Bearer token that will be used as an access token when making calls to resources.  The credentials need to be sent within the body of the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBearerTokenResponse =
  await paychex.authentication.createBearerToken({
    grant_type: "grant_type_example",
    client_id: "client_id_example",
    client_secret: "client_secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### grantType: `string`<a id="granttype-string"></a>

Send \\\"client_credentials\\\".

##### clientId: `string`<a id="clientid-string"></a>

The applications API key.

##### clientSecret: `string`<a id="clientsecret-string"></a>

The applications corresponding secret.

#### 🔄 Return<a id="🔄-return"></a>

[Authentication](./models/authentication.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/oauth/v2/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.addInProgressWorkers`<a id="paychexcompanyaddinprogressworkers"></a>

Add one or more workers to a specific company that your application has been granted access to. These workers will be added with an IN_PROGRESS status assigned to them.  In_Progress workers will pre-populated within Paychex Flex and will require someone to complete them to be fully available with the Flex platform.  Paychex Flex UI will hold a majority of validation, rules, and enforced required fields based on the clients configuration.  Required fields are givenName, familyName, & workerType (when adding multiple workers at a time you will need to also include a "workerCorrelationId" data element on each worker, that will be used as an identifier in our responses). Optionally you can include a workers communications object within the worker.  Once generated the IN_PROGRESS worker can have their communications, Compensation and Federal Taxes POSTed and PATCHed using the generated workerId.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addInProgressWorkersResponse = await paychex.company.addInProgressWorkers(
  {
    companyId: "companyId_example",
    workerId: "00Z5V9BTIHRQF2CF7BTH",
    employeeId: "3052",
    workerType: "EMPLOYEE",
    employmentType: "NON_EXEMPT",
    exemptionType: "EXEMPT",
    sex: "MALE",
    ethnicityCode: "(blank)",
    hireDate: "2015-06-15T00:00:00Z",
    clockId: "4321",
    laborAssignmentId: "970001557863345",
    jobId: "970001557916904",
    locationId: "970001701620675",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The id assigned to the company that workers are being requested for.

##### workerId: `string`<a id="workerid-string"></a>

The unique identifier associated with this worker representation.

##### employeeId: `string`<a id="employeeid-string"></a>

The workers employee identification information.

##### workerType: `string`<a id="workertype-string"></a>

The type of worker. This data field cannot be PATCHED.

##### employmentType: `string`<a id="employmenttype-string"></a>

The type of employment for the worker.

##### exemptionType: `string`<a id="exemptiontype-string"></a>

The Overtime classification of the worker.This data field cannot be PATCHED for ACTIVE workers.

##### birthDate: `string`<a id="birthdate-string"></a>

The workers date of birth. It cannot be greater than today\\\'s date.

##### sex: `string`<a id="sex-string"></a>

##### ethnicityCode: `string`<a id="ethnicitycode-string"></a>

Disclaimer:This parameter is not visible in Flex for the client. This data field cannot be PATCHED for ACTIVE workers.

##### hireDate: `string`<a id="hiredate-string"></a>

The date which the worker was hired. It cannot be PATCHED for ACTIVE workers.

##### clockId: `string`<a id="clockid-string"></a>

The clock ID of the worker that can be an identification for other systems.

##### name: [`NameResource`](./models/name-resource.ts)<a id="name-nameresourcemodelsname-resourcets"></a>

##### legalId: [`LegalIdResource`](./models/legal-id-resource.ts)<a id="legalid-legalidresourcemodelslegal-id-resourcets"></a>

##### laborAssignmentId: `string`<a id="laborassignmentid-string"></a>

The workers home labor assignment. This data field cannot be POSTED or PATCHED

##### jobId: `string`<a id="jobid-string"></a>

The workers home job. This data field cannot be POSTED or PATCHED.

##### locationId: `string`<a id="locationid-string"></a>

The workers location. This data field cannot be POSTED or PATCHED.

##### job: [`JobTitleResource`](./models/job-title-resource.ts)<a id="job-jobtitleresourcemodelsjob-title-resourcets"></a>

##### organization: [`OrganizationResource`](./models/organization-resource.ts)<a id="organization-organizationresourcemodelsorganization-resourcets"></a>

##### supervisor: [`SupervisorResource`](./models/supervisor-resource.ts)<a id="supervisor-supervisorresourcemodelssupervisor-resourcets"></a>

##### currentStatus: [`Status`](./models/status.ts)<a id="currentstatus-statusmodelsstatusts"></a>

##### communications: [`CommunicationResource`](./models/communication-resource.ts)[]<a id="communications-communicationresourcemodelscommunication-resourcets"></a>

Worker Communications. This data field cannot be updated for worker endpoint.

##### workerCorrelationId: `string`<a id="workercorrelationid-string"></a>

Id that you define which is used for error handling/responses.This data field is used while POSTING multiple IN_PROGRESS workers

#### 🔄 Return<a id="🔄-return"></a>

[WorkerResource](./models/worker-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/workers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.addJob`<a id="paychexcompanyaddjob"></a>

Add a company level job. If a client has their job numbering structured in 2-3 separate 'segments', you may need to first do a GET on the jobsegements endpoint, so you can see how many segments and the character length of each segment, as well as the name of those segments, which you will need to have before you POST.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addJobResponse = await paychex.company.addJob({
  companyId: "companyId_example",
  jobId: "970001557916902",
  jobName: "My job A",
  startDate: "2018-12-20T00:00:00Z",
  endDate: "2025-12-20T00:00:00Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### jobId: `string`<a id="jobid-string"></a>

The unique identifier associated with this job.

##### jobCorrelationId: `string`<a id="jobcorrelationid-string"></a>

Id that you define which is used for error handling/responses.

##### jobName: `string`<a id="jobname-string"></a>

The name of the job.

##### startDate: `string`<a id="startdate-string"></a>

The start date associated with this job.

##### endDate: `string`<a id="enddate-string"></a>

The end date associated with this job.

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

##### jobNumber: [`JobSegmentsResource`](./models/job-segments-resource.ts)<a id="jobnumber-jobsegmentsresourcemodelsjob-segments-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[JobResource](./models/job-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/jobs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.createCustomFieldAtCompanyLevel`<a id="paychexcompanycreatecustomfieldatcompanylevel"></a>

Create CustomFields at the company level which a company could be assigned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCustomFieldAtCompanyLevelResponse =
  await paychex.company.createCustomFieldAtCompanyLevel({
    companyId: "companyId_example",
    customFieldId: "1040014203417589",
    customFieldName: "Hobbies",
    categoryId: "1040014179116276",
    required: false,
    checkStub: false,
    employeeEditable: false,
    type: "DROPDOWN",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### customFieldId: `string`<a id="customfieldid-string"></a>

The unique identifier that is autogenerated when a custom field is created

##### customFieldName: `string`<a id="customfieldname-string"></a>

The name of the custom field

##### categoryId: `string`<a id="categoryid-string"></a>

The unique identifier that is autogenerated when creating a category

##### required: `boolean`<a id="required-boolean"></a>

Where to indicate if the custom field is required on the worker where true = required and false = not required

##### checkStub: `boolean`<a id="checkstub-boolean"></a>

Where to indicate if the custom field is required on the worker\\\'s pay stub, where true = required and false = not required

##### employeeEditable: `boolean`<a id="employeeeditable-boolean"></a>

Where to indicate if the custom field is able to be edited by the employee, where true = required and false = not required

##### type: `string`<a id="type-string"></a>

The type of field the custom field is.

##### booleanValue: `boolean`<a id="booleanvalue-boolean"></a>

The value for BOOLEAN type (true / false)

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

##### dateValue: `string`<a id="datevalue-string"></a>

The value for DATE type , example : 2012-02-01T05:00:00Z

##### textValue: `string`<a id="textvalue-string"></a>

The value for TEXT type (any text, alphanumeric, special characters allowed)

##### maxTextLength: `number`<a id="maxtextlength-number"></a>

The maximum allowed value for textValue

##### numericValue: `number`<a id="numericvalue-number"></a>

Numeric data type can have three formats namely - whole number, second decimal place and fourth decimal place, example: 12 , 12.34 or 12.3456

##### dropdown: [`CustomFieldsDropdownResource`](./models/custom-fields-dropdown-resource.ts)[]<a id="dropdown-customfieldsdropdownresourcemodelscustom-fields-dropdown-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsResource](./models/custom-fields-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfields` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.createCustomFieldCategory`<a id="paychexcompanycreatecustomfieldcategory"></a>

Create CustomFieldsCategory at the company level which a company could be assigned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCustomFieldCategoryResponse =
  await paychex.company.createCustomFieldCategory({
    companyId: "companyId_example",
    categoryId: "970003868555304",
    categoryName: "Social",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### categoryId: `string`<a id="categoryid-string"></a>

The unique identifier that is autogenerated when creating a category

##### categoryName: `string`<a id="categoryname-string"></a>

The name of the Category

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsCategoryResource](./models/custom-fields-category-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfieldscategories` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.deleteCustomField`<a id="paychexcompanydeletecustomfield"></a>

Delete CustomField at the company level.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCustomFieldResponse = await paychex.company.deleteCustomField({
  companyId: "companyId_example",
  customfieldid: "customfieldid_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### customfieldid: `string`<a id="customfieldid-string"></a>

ID associated with desired custom field.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfields/{customfieldid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.deleteCustomFieldsCategory`<a id="paychexcompanydeletecustomfieldscategory"></a>

Delete CustomFieldsCategory at the company level.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCustomFieldsCategoryResponse =
  await paychex.company.deleteCustomFieldsCategory({
    companyId: "companyId_example",
    categoryid: "categoryid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### categoryid: `string`<a id="categoryid-string"></a>

ID associated with desired category.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfieldscategories/{categoryid}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getCalculationBases`<a id="paychexcompanygetcalculationbases"></a>

Array of calculation bases that are used with a worker pay components that are not FLAT_DOLLAR_AMOUNT allow you to determine what to apply the calculation against when determining the amount during the pay run.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCalculationBasesResponse = await paychex.company.getCalculationBases({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

#### 🔄 Return<a id="🔄-return"></a>

[CalculationBase](./models/calculation-base.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/calculationbases` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getContactTypes`<a id="paychexcompanygetcontacttypes"></a>

Information about contact types that your application has been granted access to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContactTypesResponse = await paychex.company.getContactTypes({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

#### 🔄 Return<a id="🔄-return"></a>

[ContactTypeResource](./models/contact-type-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/contacttypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getCustomField`<a id="paychexcompanygetcustomfield"></a>

Information about a single CustomField.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldResponse = await paychex.company.getCustomField({
  companyId: "companyId_example",
  customFieldId: "customFieldId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### customFieldId: `string`<a id="customfieldid-string"></a>

ID associated with desired custom field.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsResource](./models/custom-fields-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfields/{customFieldId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getCustomFieldCategories`<a id="paychexcompanygetcustomfieldcategories"></a>

Array of CustomFieldsCategories Configured at the company level 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldCategoriesResponse =
  await paychex.company.getCustomFieldCategories({
    companyId: "companyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsCategoryResource](./models/custom-fields-category-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfieldscategories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getCustomFields`<a id="paychexcompanygetcustomfields"></a>

Array of customFields Configured at the company level 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldsResponse = await paychex.company.getCustomFields({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsResource](./models/custom-fields-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getCustomFieldsCategory`<a id="paychexcompanygetcustomfieldscategory"></a>

Information about a single CustomFieldsCategory.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldsCategoryResponse =
  await paychex.company.getCustomFieldsCategory({
    companyId: "companyId_example",
    categoryId: "categoryId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### categoryId: `string`<a id="categoryid-string"></a>

ID associated with desired category.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsCategoryResource](./models/custom-fields-category-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfieldscategories/{categoryId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getInformation`<a id="paychexcompanygetinformation"></a>

Information about a single company that your application has access to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse = await paychex.company.getInformation({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

#### 🔄 Return<a id="🔄-return"></a>

[CompanyResource](./models/company-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getJobInformation`<a id="paychexcompanygetjobinformation"></a>

Information about a single Job.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobInformationResponse = await paychex.company.getJobInformation({
  companyId: "companyId_example",
  jobId: "jobId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### jobId: `string`<a id="jobid-string"></a>

The ID of the job.

##### asof: `string`<a id="asof-string"></a>

Returns job as of the date used in the request.

#### 🔄 Return<a id="🔄-return"></a>

[JobResource](./models/job-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/jobs/{jobId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getJobSegmentStructureSetup`<a id="paychexcompanygetjobsegmentstructuresetup"></a>

Retrieve job segment structure setup for this client. This endpoint is only available if the client has their job numbering set up in '2-3 separate 'segments'.  The response will give you back the exact character lengths and the segment names so you are able to POST.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobSegmentStructureSetupResponse =
  await paychex.company.getJobSegmentStructureSetup({
    companyId: "companyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

#### 🔄 Return<a id="🔄-return"></a>

[JobSegmentsConfigResource](./models/job-segments-config-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/jobsegments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getJobTitle`<a id="paychexcompanygetjobtitle"></a>

Information about a single Job Title.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobTitleResponse = await paychex.company.getJobTitle({
  companyId: "companyId_example",
  workerJobTitleId: "workerJobTitleId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### workerJobTitleId: `string`<a id="workerjobtitleid-string"></a>

The ID of the worker job title.

#### 🔄 Return<a id="🔄-return"></a>

[JobTitleResource](./models/job-title-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/jobtitles/{jobTitleId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getJobs`<a id="paychexcompanygetjobs"></a>

Array of jobs set at the company level.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobsResponse = await paychex.company.getJobs({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### asof: `string`<a id="asof-string"></a>

Returns all jobs as of the date used in the request.

#### 🔄 Return<a id="🔄-return"></a>

[JobResource](./models/job-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getLaborAssignment`<a id="paychexcompanygetlaborassignment"></a>

Information about a single Labor Assignment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLaborAssignmentResponse = await paychex.company.getLaborAssignment({
  companyId: "companyId_example",
  laborAssignmentId: "laborAssignmentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### laborAssignmentId: `string`<a id="laborassignmentid-string"></a>

The ID of the labor assignment.

##### asof: `string`<a id="asof-string"></a>

Returns labour assignment as of the date used in the request.

#### 🔄 Return<a id="🔄-return"></a>

[LaborAssignmentResource](./models/labor-assignment-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/laborassignments/{laborAssignmentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getLocation`<a id="paychexcompanygetlocation"></a>

Information about a single Location.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLocationResponse = await paychex.company.getLocation({
  companyId: "companyId_example",
  locationId: "locationId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### locationId: `string`<a id="locationid-string"></a>

The ID of the location.

##### asof: `string`<a id="asof-string"></a>

Returns location as of the date used in the request.

#### 🔄 Return<a id="🔄-return"></a>

[LocationResource](./models/location-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/locations/{locationId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getLocations`<a id="paychexcompanygetlocations"></a>

Array of locations set at the company level.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLocationsResponse = await paychex.company.getLocations({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### asof: `string`<a id="asof-string"></a>

Returns all locations as of the date used in the request.

#### 🔄 Return<a id="🔄-return"></a>

[LocationResource](./models/location-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getOrganization`<a id="paychexcompanygetorganization"></a>

Information about a single Organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationResponse = await paychex.company.getOrganization({
  companyId: "companyId_example",
  organizationId: "organizationId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### organizationId: `string`<a id="organizationid-string"></a>

The ID of the organization.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationResource](./models/organization-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/organizations/{orgId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getOrganizations`<a id="paychexcompanygetorganizations"></a>

Array of organizations set at the company level.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOrganizationsResponse = await paychex.company.getOrganizations({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationResource](./models/organization-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/organizations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getPayFrequencies`<a id="paychexcompanygetpayfrequencies"></a>

Array of pay frequencies that workers maybe paid on. This is a generic array that is currently not specific to the companies pay frequency. This is to be used with the workers pay components to determine what the frequency, occurrence, and intervals are allowed.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayFrequenciesResponse = await paychex.company.getPayFrequencies({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### payfrequency: `string`<a id="payfrequency-string"></a>

The frequency that you would like to search for.

#### 🔄 Return<a id="🔄-return"></a>

[FrequencyCombinationUnitResource](./models/frequency-combination-unit-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/payfrequencies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getStatus`<a id="paychexcompanygetstatus"></a>

Information about a single status.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStatusResponse = await paychex.company.getStatus({
  companyId: "companyId_example",
  workerStatusId: "workerStatusId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### workerStatusId: `string`<a id="workerstatusid-string"></a>

The ID of the worker status.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerStatus](./models/worker-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/workerstatuses/{statusId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.getWorkers`<a id="paychexcompanygetworkers"></a>

Array of workers (employee and contractor) for all of the companies who are associated with a specific company that your application has been granted access to. The combination of query parameters to be used with this endpoint are as follows:  1. givenname, familyname, legallastfour  2. from, to (start date, end date)  3. employeeid  4. locationid  5. offset, limit (paging).  Note: Paging and filtering attributes cannot be applied together. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkersResponse = await paychex.company.getWorkers({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The id assigned to the company that workers are being requested for.

##### givenname: `string`<a id="givenname-string"></a>

The given or first name of the workers to search for.

##### familyname: `string`<a id="familyname-string"></a>

The family or last name of the workers to search for.

##### legallastfour: `string`<a id="legallastfour-string"></a>

The last 4 digits of the workers federal level taxpayer id number of the worker to search for.

##### employeeid: `string`<a id="employeeid-string"></a>

The assigned workers employee ID.

##### from: `string`<a id="from-string"></a>

The beginning of the search date range using for when the worker was created.

##### to: `string`<a id="to-string"></a>

The ending of the search date range using for then the worker was created.

##### locationid: `string`<a id="locationid-string"></a>

The location Id.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerResource](./models/worker-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/workers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.list`<a id="paychexcompanylist"></a>

Array of companies that your application has been granted with some level of access. Your Application (API Key) can be granted access to one or more companies (clients) accounts that are associated with one or more product lines within Paychex.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await paychex.company.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### displayid: `string`<a id="displayid-string"></a>

The client account number used for identification purposes. (no dash or spaces allowed, only the last 8 characters  of the ID)

#### 🔄 Return<a id="🔄-return"></a>

[CompanyResource](./models/company-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.listJobTitles`<a id="paychexcompanylistjobtitles"></a>

Array of job titles set at the company level which a worker could be assigned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listJobTitlesResponse = await paychex.company.listJobTitles({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

#### 🔄 Return<a id="🔄-return"></a>

[JobTitleResource](./models/job-title-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/jobtitles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.listLaborAssignments`<a id="paychexcompanylistlaborassignments"></a>

Array of labor assignments set at the company level.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLaborAssignmentsResponse = await paychex.company.listLaborAssignments(
  {
    companyId: "companyId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### asof: `string`<a id="asof-string"></a>

Returns all labour assignments as of the date used in the request.

#### 🔄 Return<a id="🔄-return"></a>

[LaborAssignmentResource](./models/labor-assignment-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/laborassignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.listWorkerStatuses`<a id="paychexcompanylistworkerstatuses"></a>

Array of statuses set at the company level which a worker could be assigned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWorkerStatusesResponse = await paychex.company.listWorkerStatuses({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerStatus](./models/worker-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/workerstatuses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.updateCustomField`<a id="paychexcompanyupdatecustomfield"></a>

Update CustomFields at the company level which a company could be assigned.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCustomFieldResponse = await paychex.company.updateCustomField({
  companyId: "companyId_example",
  customfieldid: "customfieldid_example",
  customFieldId: "1040014203417589",
  customFieldName: "Hobbies",
  categoryId: "1040014179116276",
  required: false,
  checkStub: false,
  employeeEditable: false,
  type: "DROPDOWN",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### customfieldid: `string`<a id="customfieldid-string"></a>

ID associated with desired custom field.

##### customFieldId: `string`<a id="customfieldid-string"></a>

The unique identifier that is autogenerated when a custom field is created

##### customFieldName: `string`<a id="customfieldname-string"></a>

The name of the custom field

##### categoryId: `string`<a id="categoryid-string"></a>

The unique identifier that is autogenerated when creating a category

##### required: `boolean`<a id="required-boolean"></a>

Where to indicate if the custom field is required on the worker where true = required and false = not required

##### checkStub: `boolean`<a id="checkstub-boolean"></a>

Where to indicate if the custom field is required on the worker\\\'s pay stub, where true = required and false = not required

##### employeeEditable: `boolean`<a id="employeeeditable-boolean"></a>

Where to indicate if the custom field is able to be edited by the employee, where true = required and false = not required

##### type: `string`<a id="type-string"></a>

The type of field the custom field is.

##### booleanValue: `boolean`<a id="booleanvalue-boolean"></a>

The value for BOOLEAN type (true / false)

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

##### dateValue: `string`<a id="datevalue-string"></a>

The value for DATE type , example : 2012-02-01T05:00:00Z

##### textValue: `string`<a id="textvalue-string"></a>

The value for TEXT type (any text, alphanumeric, special characters allowed)

##### maxTextLength: `number`<a id="maxtextlength-number"></a>

The maximum allowed value for textValue

##### numericValue: `number`<a id="numericvalue-number"></a>

Numeric data type can have three formats namely - whole number, second decimal place and fourth decimal place, example: 12 , 12.34 or 12.3456

##### dropdown: [`CustomFieldsDropdownResource`](./models/custom-fields-dropdown-resource.ts)[]<a id="dropdown-customfieldsdropdownresourcemodelscustom-fields-dropdown-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsResource](./models/custom-fields-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfields/{customfieldid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.updateCustomFieldsCategory`<a id="paychexcompanyupdatecustomfieldscategory"></a>

Update  CustomFieldsCategory at the company level.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCustomFieldsCategoryResponse =
  await paychex.company.updateCustomFieldsCategory({
    companyId: "companyId_example",
    categoryid: "categoryid_example",
    categoryId: "970003868555304",
    categoryName: "Social",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### categoryid: `string`<a id="categoryid-string"></a>

ID associated with desired custom field.

##### categoryId: `string`<a id="categoryid-string"></a>

The unique identifier that is autogenerated when creating a category

##### categoryName: `string`<a id="categoryname-string"></a>

The name of the Category

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldsCategoryResource](./models/custom-fields-category-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/customfieldscategories/{categoryid}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.company.updateJob`<a id="paychexcompanyupdatejob"></a>

Update a single Job.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateJobResponse = await paychex.company.updateJob({
  companyId: "companyId_example",
  jobId: "jobId_example",
  requestBody: {
    jobId: "970001557916902",
    jobName: "My job A",
    startDate: "2018-12-20T00:00:00Z",
    endDate: "2025-12-20T00:00:00Z",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The ID of the company.

##### jobId: `string`<a id="jobid-string"></a>

The ID of the job.

##### requestBody: [`JobResource`](./models/job-resource.ts)<a id="requestbody-jobresourcemodelsjob-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[JobResource](./models/job-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/jobs/{jobId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.management.linkPaychexClients`<a id="paychexmanagementlinkpaychexclients"></a>

(For partnerships only) Link Paychex clients to a 3rd party partner application

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const linkPaychexClientsResponse = await paychex.management.linkPaychexClients({
  displayId: "displayId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### displayId: `string`<a id="displayid-string"></a>

The client account number used for identification purposes. (no dash or spaces allowed, only the last 8 characters of the ID)

#### 🔄 Return<a id="🔄-return"></a>

[DeepUrlResponseResource](./models/deep-url-response-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/management/requestclientaccess` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.addCompanyChecks`<a id="paychexpayrolladdcompanychecks"></a>

Add a check for one or more worker within a company for an available pay period.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCompanyChecksResponse = await paychex.payroll.addCompanyChecks({
  companyId: "companyId_example",
  workerId: "004UWBZQJ7GEB9TVWFR9",
  paycheckId: "1020026552555444",
  payPeriodId: "1020026427391732",
  blockAutoDistribution: false,
  checkDate: "2019-05-12T20:00:00Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### workerId: `string`<a id="workerid-string"></a>

The id assigned to the worker.

##### paycheckId: `string`<a id="paycheckid-string"></a>

The id of a single check that a workers has.

##### payPeriodId: `string`<a id="payperiodid-string"></a>

The id for the unprocessed payperiod. 

##### checkCorrelationId: `string`<a id="checkcorrelationid-string"></a>

Id that you define which is used for error handling/responses. This is not required when sending a single check.

##### blockAutoDistribution: `boolean`<a id="blockautodistribution-boolean"></a>

This is used optionally for blocking the auto distribution of the earnings on the workers if they are setup for auto distribution.

##### earnings: [`PayComponentResource`](./models/pay-component-resource.ts)[]<a id="earnings-paycomponentresourcemodelspay-component-resourcets"></a>

The earnings to apply to the check.Each earning needs to define as one of the following:1 .payHours: Will use the default hourly rate defined on the worker to apply the hours against. 2. payHours and payRate: Will allow you to define the monetary rate that the hours will be applied against. 3. payHours and payRateId: Will allow you to define which workers predefined pay rate the hours will be applied against. 4. payUnits: Will use the default hourly rate defined on the worker to apply the units against. 5. payUnits and payRate: Will allow you to define the monetary rate that the units will be applied against. 6. payUnits and payRateId: Will allow you to define which workers predefined pay rate the units will be applied against. 7. payAmount: Will allow you to define straight monetary amount.

##### deductions: [`PayComponentResource`](./models/pay-component-resource.ts)[]<a id="deductions-paycomponentresourcemodelspay-component-resourcets"></a>

Deduction pay components on the check.

##### checkDate: `string`<a id="checkdate-string"></a>

The check date 

##### informational: [`PayComponentResource`](./models/pay-component-resource.ts)[]<a id="informational-paycomponentresourcemodelspay-component-resourcets"></a>

Informational pay components on the check.

##### taxes: [`PayComponentResource`](./models/pay-component-resource.ts)[]<a id="taxes-paycomponentresourcemodelspay-component-resourcets"></a>

Tax pay components on the check.

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CheckResource](./models/check-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/checks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.addPayComponentToCheck`<a id="paychexpayrolladdpaycomponenttocheck"></a>

Add a new pay component on an individual unprocessed check.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPayComponentToCheckResponse =
  await paychex.payroll.addPayComponentToCheck({
    checkId: "checkId_example",
    componentId: "970000053577899",
    checkComponentId: "1020026552555441",
    effectOnPay: "ADDITION",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### checkId: `string`<a id="checkid-string"></a>

ID associated with desired check.

##### description: `string`<a id="description-string"></a>

Description

##### componentId: `string`<a id="componentid-string"></a>

The identifier of the pay component to add to the check. An overtime pay component can\\\'t be placed on a worker that is OT exempt.

##### checkComponentId: `string`<a id="checkcomponentid-string"></a>

The unique identifier associated for the pay component on this check.

##### name: `string`<a id="name-string"></a>

The name given to the pay component

##### classificationType: `string`<a id="classificationtype-string"></a>

The category that this component falls into.

##### effectOnPay: `string`<a id="effectonpay-string"></a>

The effect that the pay component will have on the check amount.

##### startDate: `string`<a id="startdate-string"></a>

The date that the pay component is able to be applied on a check.

##### endDate: `string`<a id="enddate-string"></a>

The date that the pay component is not available to be applied on a check moving forward.

##### appliesToWorkerTypes: `string`[]<a id="appliestoworkertypes-string"></a>

Applies To WorkerTypes.

##### jobId: `string`<a id="jobid-string"></a>

This is used optionally for overriding a job when it needs to be different then the workers default. This option is only available when the client has job costing.

##### laborAssignmentId: `string`<a id="laborassignmentid-string"></a>

This is used optionally for overriding a labor assignment when it needs to be different then the workers assignment distribution. This option is only available when the client has labor assignment.

##### payRateId: `string`<a id="payrateid-string"></a>

The rate identifier for the workers compensation

##### payRate: `string`<a id="payrate-string"></a>

The rate amount that will be applied for this component. Used in conjunction with Hours or Units.

##### payHours: `string`<a id="payhours-string"></a>

The number of hours that will be applied for this component. Used in conjunction with rate.

##### payUnits: `string`<a id="payunits-string"></a>

The number of units that will be applied for this component. Used in conjunction with rate.

##### payAmount: `string`<a id="payamount-string"></a>

The flat amount to be applied for this component. Not used with Rate, Hours, or Units.

##### memoed: `boolean`<a id="memoed-boolean"></a>

This is used optionally for memoing the payHours or payUnits so that they are informational when using a payAmount.

##### lineDate: `string`<a id="linedate-string"></a>

This is used optionally for specifying a date that the pay component was generated on.

#### 🔄 Return<a id="🔄-return"></a>

[CheckResource2](./models/check-resource2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checks/{checkId}/checkcomponents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.addWorkerCheck`<a id="paychexpayrolladdworkercheck"></a>

Add a check to a worker for an unprocessed pay period.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addWorkerCheckResponse = await paychex.payroll.addWorkerCheck({
  workerId: "workerId_example",
  requestBody: {
    workerId: "004UWBZQJ7GEB9TVWFR9",
    paycheckId: "1020026552555444",
    payPeriodId: "1020026427391732",
    checkCorrelationId: "yourID_1",
    blockAutoDistribution: false,
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### requestBody: [`CheckResource1`](./models/check-resource1.ts)<a id="requestbody-checkresource1modelscheck-resource1ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CheckResource1](./models/check-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/checks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.deleteChecksByPayPeriodAndUser`<a id="paychexpayrolldeletechecksbypayperiodanduser"></a>

Delete checks by pay period Id and user Id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteChecksByPayPeriodAndUserResponse =
  await paychex.payroll.deleteChecksByPayPeriodAndUser({
    payperiodid: "payperiodid_example",
    deletebyuserid: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payperiodid: `string`<a id="payperiodid-string"></a>

ID associated with desired pay period.

##### deletebyuserid: `boolean`<a id="deletebyuserid-boolean"></a>

Value for deletebyuserid parameter should be \"true\" 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checks` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.getCompanyChecksByPayPeriod`<a id="paychexpayrollgetcompanychecksbypayperiod"></a>

Get check(s) that are for a specific company within a processed or unprocessed pay period.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyChecksByPayPeriodResponse =
  await paychex.payroll.getCompanyChecksByPayPeriod({
    companyId: "companyId_example",
    payperiodid: "payperiodid_example",
    offset: 0,
    limit: 0,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company.

##### payperiodid: `string`<a id="payperiodid-string"></a>

The id assigned to the pay period that the check will be within.

##### offset: `number`<a id="offset-number"></a>

The zero based offset of the next page of data to be presented.

##### limit: `number`<a id="limit-number"></a>

The maximum number of elements to be returned in a page transition.

##### filterbyuserid: `boolean`<a id="filterbyuserid-boolean"></a>

Filter by User Id.

#### 🔄 Return<a id="🔄-return"></a>

[CheckResource](./models/check-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/checks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.getCompanyPayComponent`<a id="paychexpayrollgetcompanypaycomponent"></a>

Pay component associated with the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyPayComponentResponse =
  await paychex.payroll.getCompanyPayComponent({
    companyId: "companyId_example",
    paycomponentId: "paycomponentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The id assigned to the company that is being requested for.

##### paycomponentId: `string`<a id="paycomponentid-string"></a>

The unique identifier used to identify a pay component.

##### asof: `string`<a id="asof-string"></a>

Returns PayComponent as of the date used in the request.

#### 🔄 Return<a id="🔄-return"></a>

[PayComponentResource](./models/pay-component-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/paycomponents/{paycomponentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.getCompanyPayComponents`<a id="paychexpayrollgetcompanypaycomponents"></a>

Array of pay components that are configured for a company. Pay components are earnings and deductions which are used for payroll.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyPayComponentsResponse =
  await paychex.payroll.getCompanyPayComponents({
    companyId: "companyId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The id assigned to the company that is being requested for.

##### effectonpay: `string`<a id="effectonpay-string"></a>

The type of effect on pay that you are requested for.

##### asof: `string`<a id="asof-string"></a>

Returns all PayComponent\'s as of the date used in the request.

##### classificationtype: `string`<a id="classificationtype-string"></a>

The category that this component falls into. (such as  EARNINGS  or   SICK_PAY )

##### name: `string`<a id="name-string"></a>

The name of a pay component that a company has.

#### 🔄 Return<a id="🔄-return"></a>

[PayComponentResource](./models/pay-component-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/paycomponents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.getCompanyPayPeriods`<a id="paychexpayrollgetcompanypayperiods"></a>

Array of pay periods associated with the company.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompanyPayPeriodsResponse = await paychex.payroll.getCompanyPayPeriods(
  {
    companyId: "companyId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The id assigned to the company that is being requested for.

##### status: `string`[]<a id="status-string"></a>

Get PayPeriods that are in List of specific status.

##### from: `string`<a id="from-string"></a>

The beginning of the search date range using the Payperiod start date.

##### to: `string`<a id="to-string"></a>

The ending of the search date range using the Payperiod end date.

#### 🔄 Return<a id="🔄-return"></a>

[PayPeriodResource](./models/pay-period-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/payperiods` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.getPayPeriod`<a id="paychexpayrollgetpayperiod"></a>

A single pay period.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayPeriodResponse = await paychex.payroll.getPayPeriod({
  companyId: "companyId_example",
  payperiodId: "payperiodId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

The id assigned to the company that is being requested for.

##### payperiodId: `string`<a id="payperiodid-string"></a>

The id assigned to the PayPeriod you are looking for.

#### 🔄 Return<a id="🔄-return"></a>

[PayPeriodResource](./models/pay-period-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/companies/{companyId}/payperiods/{payperiodId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.getWorkerCheck`<a id="paychexpayrollgetworkercheck"></a>

Retrieve a specific unprocessed or processed check that a worker has.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkerCheckResponse = await paychex.payroll.getWorkerCheck({
  workerId: "workerId_example",
  paycheckId: "paycheckId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### paycheckId: `string`<a id="paycheckid-string"></a>

The id of a single check that a workers has.

#### 🔄 Return<a id="🔄-return"></a>

[CheckResource1](./models/check-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/checks/{externalCheckId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.getWorkerChecksByPayPeriod`<a id="paychexpayrollgetworkerchecksbypayperiod"></a>

Get check(s) that are for a specific worker   within a processed or unprocessed pay period.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkerChecksByPayPeriodResponse =
  await paychex.payroll.getWorkerChecksByPayPeriod({
    workerId: "workerId_example",
    payperiodid: "payperiodid_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### payperiodid: `string`<a id="payperiodid-string"></a>

The id assigned to the pay period that the  check will be within.

##### filterbyuserid: `boolean`<a id="filterbyuserid-boolean"></a>

Filter by User Id.

#### 🔄 Return<a id="🔄-return"></a>

[CheckResource1](./models/check-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/checks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.removePayComponent`<a id="paychexpayrollremovepaycomponent"></a>

Remove a single pay component on an individual unprocessed check.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePayComponentResponse = await paychex.payroll.removePayComponent({
  checkId: "checkId_example",
  checkComponentId: "checkComponentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### checkId: `string`<a id="checkid-string"></a>

ID associated with desired check.

##### checkComponentId: `string`<a id="checkcomponentid-string"></a>

ID associated with an Earning of this check

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checks/{checkId}/checkcomponents/{checkComponentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.removeWorkerCheck`<a id="paychexpayrollremoveworkercheck"></a>

Remove a specific unprocessed check that a worker has.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeWorkerCheckResponse = await paychex.payroll.removeWorkerCheck({
  workerId: "workerId_example",
  paycheckId: "paycheckId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### paycheckId: `string`<a id="paycheckid-string"></a>

The id of a single check that a workers has.

#### 🔄 Return<a id="🔄-return"></a>

[CheckResource1](./models/check-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/checks/{externalCheckId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.payroll.updatePayComponent`<a id="paychexpayrollupdatepaycomponent"></a>

 Update a single pay component on an individual unprocessed check.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePayComponentResponse = await paychex.payroll.updatePayComponent({
  checkId: "checkId_example",
  checkComponentId: "checkComponentId_example",
  requestBody: {
    componentId: "970000053577899",
    checkComponentId: "1020026552555441",
    effectOnPay: "ADDITION",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### checkId: `string`<a id="checkid-string"></a>

ID associated with desired check.

##### checkComponentId: `string`<a id="checkcomponentid-string"></a>

ID associated with an Earning of this check

##### requestBody: [`PayComponentResource2`](./models/pay-component-resource2.ts)<a id="requestbody-paycomponentresource2modelspay-component-resource2ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PayComponentResource2](./models/pay-component-resource2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/checks/{checkId}/checkcomponents/{checkComponentId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.webhooks.addWebhook`<a id="paychexwebhooksaddwebhook"></a>

<h3>Add a webhook for the calling application.</h3><p>When registering a webhook, you will need to provide your own URI in the request body (see our <a href='https://developer.paychex.com/resources/webhooks'>full webhook documention here</a> on how to configure your URI). The newly registered webhook will send notifications to this endpoint as JSON payloads which vary by domain. Please configure your endpoint to accept the relevant payloads. To see an example payload for each domain, please refer to the "Callbacks" tab.</p>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addWebhookResponse = await paychex.webhooks.addWebhook({
  uri: "uri_example",
  authentication: {
    authType: "NO_AUTH",
  },
  domains: ["domains_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uri: `string`<a id="uri-string"></a>

Enter a valid URL for the webhook to receive events.

##### authentication: [`Authentication1`](./models/authentication1.ts)<a id="authentication-authentication1modelsauthentication1ts"></a>

##### domains: `string`[]<a id="domains-string"></a>

List of available domains to register to. Refer to webhook documentation https://developer.paychex.com/documentation#operation/domains.

##### hookId: `string`<a id="hookid-string"></a>

The unique identifier associated with this webhook. Not required for Posting.

##### companyId: `string`<a id="companyid-string"></a>

ID associated with desired company that will receive the webhook notifications. NOTE: If no Company ID is provided in the POST, then all companies linked to the app will receive notifications.

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhookResponse](./models/webhook-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/management/hooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.webhooks.deleteById`<a id="paychexwebhooksdeletebyid"></a>

Delete a specific hook for the calling application by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await paychex.webhooks.deleteById({
  hookId: "hookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### hookId: `string`<a id="hookid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/management/hooks/{hookId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.webhooks.getAvailableDomains`<a id="paychexwebhooksgetavailabledomains"></a>

Will return a list of available domains depending on application type.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAvailableDomainsResponse =
  await paychex.webhooks.getAvailableDomains();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/management/domains` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.webhooks.getSpecificHookById`<a id="paychexwebhooksgetspecifichookbyid"></a>

Get a specific hook for the calling application by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificHookByIdResponse = await paychex.webhooks.getSpecificHookById({
  hookId: "hookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### hookId: `string`<a id="hookid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksGetSpecificHookByIdResponse](./models/webhooks-get-specific-hook-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/management/hooks/{hookId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.webhooks.list`<a id="paychexwebhookslist"></a>

List all the webhooks setup for the calling application

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await paychex.webhooks.list();
```

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksListResponseInner](./models/webhooks-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/management/hooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.addCommunication`<a id="paychexworkeraddcommunication"></a>

Add a single communication to the "Active" or "In-progress" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addCommunicationResponse = await paychex.worker.addCommunication({
  workerId: "workerId_example",
  type: "STREET_ADDRESS",
  usageType: "PERSONAL",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

The id assigned to the worker that workers are being requested for.

##### communicationId: `string`<a id="communicationid-string"></a>

The ID for the workers specific communication item.

##### type: `string`<a id="type-string"></a>

A set of communication types classifying an instruction that the customer, requester, or subject must comply with in order for the screening to go forward. NOTE: PHONE and EMAIL type supports BUSINESS and PERSONAL usage type only.MOBILE_PHONE, FAX and PAGER supports BUSINESS usage type only.This data field cannot be PATCHED.

##### usageType: `string`<a id="usagetype-string"></a>

A code classifying a designated use associated with a contact method. For example, whether a telephone or email address is one for business communications or one primarily for personal use.This data field cannot be PATCHED.

##### dialCountry: `string`<a id="dialcountry-string"></a>

The country dialing code for a communication number

##### dialArea: `string`<a id="dialarea-string"></a>

The area dialing code for a communication number

##### dialNumber: `string`<a id="dialnumber-string"></a>

The communication number, not including country dialing or area dialing codes

##### dialExtension: `string`<a id="dialextension-string"></a>

The extension of the associated communication number

##### uri: `string`<a id="uri-string"></a>

The mailto address as specified in RFC2368

##### streetLineOne: `string`<a id="streetlineone-string"></a>

The street address line one

##### streetLineTwo: `string`<a id="streetlinetwo-string"></a>

The street address line two

##### postOfficeBox: `string`<a id="postofficebox-string"></a>

The postal office box. This data field cannot be PATCHED

##### city: `string`<a id="city-string"></a>

The city name

##### postalCode: `string`<a id="postalcode-string"></a>

The zip-code

##### postalCodeExtension: `string`<a id="postalcodeextension-string"></a>

The zip-code extension

##### countrySubdivisionCode: `string`<a id="countrysubdivisioncode-string"></a>

The state code (ISO 3166 subdivision code). This data field cannot be PATCHED for ACTIVE worker

##### countryCode: `string`<a id="countrycode-string"></a>

The country code (ISO 3166 alpha-2)

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CommunicationResource1](./models/communication-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/communications` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.addDirectDeposit`<a id="paychexworkeradddirectdeposit"></a>

Add a direct deposit to an "Active" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addDirectDepositResponse = await paychex.worker.addDirectDeposit({
  workerId: "workerId_example",
  directDepositId: "1020026420675252",
  startDate: "2017-09-11T00:00:00Z",
  paymentType: "PERCENTAGE",
  accountType: "CHECKING",
  value: 75,
  routingNumber: "222371863",
  accountNumber: "123456",
  priority: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### directDepositId: `string`<a id="directdepositid-string"></a>

The ID for the direct deposit item.

##### startDate: `string`<a id="startdate-string"></a>

The date that this direct deposit will be applied to future pay periods. This data field cannot be PATCHED.

##### paymentType: `string`<a id="paymenttype-string"></a>

A type of payment for the direct deposit.

##### accountType: `string`<a id="accounttype-string"></a>

Financial institutions account type. This data field cannot be PATCHED.

##### value: `number`<a id="value-number"></a>

The amount to be applied to this direct deposit.

##### routingNumber: `string`<a id="routingnumber-string"></a>

The financial institutions routing number.This data field cannot be PATCHED.

##### accountNumber: `string`<a id="accountnumber-string"></a>

The financial institutions account number.This data field cannot be PATCHED.

##### priority: `string`<a id="priority-string"></a>

The priority order for which the direct deposits will be performed in. When a new direct deposit is added the priority will be assigned. The priority can be modified only by swapping with a different direct deposit using the bulk PATCH. A paymentType of REMAINDER will show a priority of 99 and can\\\'t be modified.This data field cannot be PATCHED.

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DirectDepositResource](./models/direct-deposit-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/directdeposits` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.addFederalTaxSetup`<a id="paychexworkeraddfederaltaxsetup"></a>

Add federal tax setup for a "Active" or "In-progress" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addFederalTaxSetupResponse = await paychex.worker.addFederalTaxSetup({
  workerId: "workerId_example",
  taxId: "3520000118851387",
  filingStatus: "MARRIED_FILING_JOINTLY",
  multipleJobs: "false",
  dependentsAmount: "123.45",
  otherIncome: "23.45",
  deductionsAmount: "2.45",
  extraWithholdingAmount: "3.45",
  taxesWithheld: "true",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### taxId: `string`<a id="taxid-string"></a>

The ID for the federal tax item.

##### filingStatus: `string`<a id="filingstatus-string"></a>

Filing status.

##### multipleJobs: `string`<a id="multiplejobs-string"></a>

See federal W-4 instructions.

##### dependentsAmount: `string`<a id="dependentsamount-string"></a>

See federal W-4 instructions.

##### otherIncome: `string`<a id="otherincome-string"></a>

See federal W-4 instructions.

##### deductionsAmount: `string`<a id="deductionsamount-string"></a>

See federal W-4 instructions.

##### extraWithholdingAmount: `string`<a id="extrawithholdingamount-string"></a>

Additional tax you want withheld each pay period.

##### taxesWithheld: `string`<a id="taxeswithheld-string"></a>

Should federal taxes be withheld.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerFederalTaxResource](./models/worker-federal-tax-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/federaltax` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.addPayComponent`<a id="paychexworkeraddpaycomponent"></a>

Add a single pay component to the "Active" worker. This pay component will be used for apply recurring pay components on a workers check based on the frequency specified. supports the ability to POST both Addition and Reduction type pay components.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPayComponentResponse = await paychex.worker.addPayComponent({
  workerId: "workerId_example",
  workerComponentId: "970000223656831",
  componentId: "970000180599325",
  name: "Deduction - 1",
  calculationType: "00H2A1IUJE7MXV6TQ37U",
  calculationBaseId: "00H2A1IUJE7MXV6TQ37U",
  value: 5,
  startDate: "2018-03-01T00:00:00Z",
  effectOnPay: "REDUCTION",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### workerComponentId: `string`<a id="workercomponentid-string"></a>

The id of a single pay component that a workers has.

##### componentId: `string`<a id="componentid-string"></a>

The unique identifier of the pay component. This data field cannot be PATCHED.

##### name: `string`<a id="name-string"></a>

Name of the pay component. This data field will be populated automatically based on componentId.

##### calculationType: `string`<a id="calculationtype-string"></a>

The type of calculation that will be applied for the pay component .

##### calculationBaseId: `string`<a id="calculationbaseid-string"></a>

This is required if you are not using a FLAT_DOLLAR_AMOUNT Calculation Type.

##### value: `number`<a id="value-number"></a>

This is used to specify the value that is used against the calculationType.

##### startDate: `string`<a id="startdate-string"></a>

Date which this pay component will start to be applied during the payruns. This is an optional field that default to current datetime if not provided. This cannot be backdated but can be added to start in the future.

##### effectiveDate: `string`<a id="effectivedate-string"></a>

Date which this pay component has started for the worker.

##### endDate: `string`<a id="enddate-string"></a>

Date which this pay component has ended for the worker.

##### effectOnPay: `string`<a id="effectonpay-string"></a>

What the effect on pay will be (REDUCTION OR ADDITION), currently only reductions are available. This data field will be populated automatically based on componentId. This data field cannot be PATCHED

##### classificationType: `string`<a id="classificationtype-string"></a>

The category that this component falls into.

##### frequency: [`PayComponentFrequencyTypeResource1`](./models/pay-component-frequency-type-resource1.ts)<a id="frequency-paycomponentfrequencytyperesource1modelspay-component-frequency-type-resource1ts"></a>

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RecurringResource](./models/recurring-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/paycomponents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.addPayRate`<a id="paychexworkeraddpayrate"></a>

Add a single compensation rate to the "Active" or "In-progress" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addPayRateResponse = await paychex.worker.addPayRate({
  workerId: "workerId_example",
  description: "Security2",
  rateId: "970000054610137",
  rateNumber: "RATE_1",
  rateType: "RATE_1",
  amount: "40.2",
  standardHours: "25.25",
  standardOvertime: "3.25",
  _default: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### description: `string`<a id="description-string"></a>

Describes the rate for the worker.

##### rateId: `string`<a id="rateid-string"></a>

Unique identifier for this workers pay rate. **This ID will change if this is created for an IN_PROGRESS worker that is later completed within Flex**

##### startDate: `string`<a id="startdate-string"></a>

The date when the pay rate is going to begin.

##### rateNumber: `string`<a id="ratenumber-string"></a>

The number of the rate. A worker can have up to 5 different rates.

##### rateType: `string`<a id="ratetype-string"></a>

Type of rate.

##### amount: `string`<a id="amount-string"></a>

The currency amount which this rate is applied.

##### standardHours: `string`<a id="standardhours-string"></a>

Default standard hours that this rate is used with a pay frequency.

##### standardOvertime: `string`<a id="standardovertime-string"></a>

Default over time hours that this rate is used with a pay frequency.

##### default: `boolean`<a id="default-boolean"></a>

If this rate is the default one to apply on the worker.

##### effectiveDate: `string`<a id="effectivedate-string"></a>

The date when the pay rate becomes effective for the worker.(can be used only in POST/PATCH for an active worker)

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PayRateResource](./models/pay-rate-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/compensation/payrates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.addWorkerContacts`<a id="paychexworkeraddworkercontacts"></a>

Add one or more contacts to a worker. A contact may represent a person or entity (organization) but not both. A contact must have at least one communication (telecom, postal, or email). Person contacts can have multiple communications for each communication type (telecom, postal, or email) to support BUSINESS and PERSONAL. Exactly one contact must be marked as primary for each contact type. If one or more contacts are posted for the same contact type, and there are currently no contacts of that type for the worker, the first contact in the list will be made primary unless another in the list is expressly marked as primary. When a new contact is made primary the previous primary contact will be marked as not primary. Use the GET /companies/{companyId}/contacttypes endpoint to get a full list of available contact types and relationship types (used for person contacts).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addWorkerContactsResponse = await paychex.worker.addWorkerContacts({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### contactId: `string`<a id="contactid-string"></a>

The ID for the workers specific contact.

##### contactType: [`ContactTypeResource1`](./models/contact-type-resource1.ts)<a id="contacttype-contacttyperesource1modelscontact-type-resource1ts"></a>

##### relationship: [`RelationshipResource`](./models/relationship-resource.ts)<a id="relationship-relationshipresourcemodelsrelationship-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkerContactResource](./models/worker-contact-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/contacts` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.createCustomField`<a id="paychexworkercreatecustomfield"></a>

Create CustomField at the worker level

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCustomFieldResponse = await paychex.worker.createCustomField({
  workerId: "workerId_example",
  type: "DROPDOWN",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### workerCustomFieldId: `string`<a id="workercustomfieldid-string"></a>

The unique identifier that is autogenerated when a custom field is created

##### customFieldId: `string`<a id="customfieldid-string"></a>

client Custom Field Id

##### type: `string`<a id="type-string"></a>

The type of field the custom field is

##### booleanValue: `boolean`<a id="booleanvalue-boolean"></a>

The value for BOOLEAN type (true/false)

##### textValue: `string`<a id="textvalue-string"></a>

The value for TEXT type (any text, alphanumeric, special characters allowed)

##### numericValue: `number`<a id="numericvalue-number"></a>

Numeric data type can have three formats namely - whole number, second decimal place and fourth decimal place, example: 12 , 12.34 or 12.3456

##### dateValue: `string`<a id="datevalue-string"></a>

The value for DATE type , example : 2012-02-01T05:00:00Z

##### dropdownId: `string`<a id="dropdownid-string"></a>

The unique identifier that is autogenerated when dropdown list is created

##### dropdownValue: `string`<a id="dropdownvalue-string"></a>

The value for dropdown list

##### customFieldName: `string`<a id="customfieldname-string"></a>

The name of the custom field. Such as: \\\"Hobbies\\\"

##### required: `boolean`<a id="required-boolean"></a>

Where to indicate if the custom field is required on the worker where true = required and false = not required

##### checkStub: `boolean`<a id="checkstub-boolean"></a>

Where to indicate if the custom field is required on the workers pay stub, where true = required and false = not required.

##### employeeEditable: `boolean`<a id="employeeeditable-boolean"></a>

Where to indicate if the custom field is able to be edited by the employee, where true = required and false = not required.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerCustomFieldsResource](./models/worker-custom-fields-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/customfields` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.deleteContactByContactId`<a id="paychexworkerdeletecontactbycontactid"></a>

Delete a worker contact by contactId.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteContactByContactIdResponse =
  await paychex.worker.deleteContactByContactId({
    workerId: "workerId_example",
    contactId: "contactId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### contactId: `string`<a id="contactid-string"></a>

ID associated with desired worker contact.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/contacts/{contactId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.deleteCustomField`<a id="paychexworkerdeletecustomfield"></a>

Delete CustomField at the worker level

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCustomFieldResponse = await paychex.worker.deleteCustomField({
  workerId: "workerId_example",
  workerCustomFieldId: "workerCustomFieldId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### workerCustomFieldId: `string`<a id="workercustomfieldid-string"></a>

ID associated with desired worker custom field.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/customfields/{workerCustomFieldId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.deleteInProgress`<a id="paychexworkerdeleteinprogress"></a>

Delete in progress Worker

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteInProgressResponse = await paychex.worker.deleteInProgress({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getCommunicationItem`<a id="paychexworkergetcommunicationitem"></a>

A "Active" or "In-progress" workers single communication item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommunicationItemResponse = await paychex.worker.getCommunicationItem({
  workerId: "workerId_example",
  communicationId: "communicationId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

The id assigned to the worker that workers are being requested for.

##### communicationId: `string`<a id="communicationid-string"></a>

The id of a single workers communication.

#### 🔄 Return<a id="🔄-return"></a>

[CommunicationResource1](./models/communication-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/communications/{communicationId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getCommunications`<a id="paychexworkergetcommunications"></a>

Information about "Active" or "In-progress"  workers communications.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCommunicationsResponse = await paychex.worker.getCommunications({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

The id assigned to the worker that workers are being requested for.

#### 🔄 Return<a id="🔄-return"></a>

[CommunicationResource1](./models/communication-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/communications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getCompensationInformation`<a id="paychexworkergetcompensationinformation"></a>

Information about a workers compensation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCompensationInformationResponse =
  await paychex.worker.getCompensationInformation({
    workerId: "workerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

#### 🔄 Return<a id="🔄-return"></a>

[CollectionResource](./models/collection-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/compensation` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getContactByContactId`<a id="paychexworkergetcontactbycontactid"></a>

Get a worker contact by contactId.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContactByContactIdResponse =
  await paychex.worker.getContactByContactId({
    workerId: "workerId_example",
    contactId: "contactId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### contactId: `string`<a id="contactid-string"></a>

The id of a single Contact.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerContactResource](./models/worker-contact-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/contacts/{contactId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getContacts`<a id="paychexworkergetcontacts"></a>

Get all contacts for the specified worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContactsResponse = await paychex.worker.getContacts({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerContactResource](./models/worker-contact-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/contacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getCustomField`<a id="paychexworkergetcustomfield"></a>

Get the worker's customFields by workerCustomFieldId

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldResponse = await paychex.worker.getCustomField({
  workerId: "workerId_example",
  workerCustomFieldId: "workerCustomFieldId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### workerCustomFieldId: `string`<a id="workercustomfieldid-string"></a>

ID associated with desired worker custom field.

##### asof: `string`<a id="asof-string"></a>

Returns custom field as of the date used in the request

#### 🔄 Return<a id="🔄-return"></a>

[WorkerCustomFieldsResource](./models/worker-custom-fields-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/customfields/{workerCustomFieldId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getCustomFields`<a id="paychexworkergetcustomfields"></a>

Get the worker's customFields

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCustomFieldsResponse = await paychex.worker.getCustomFields({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### asof: `string`<a id="asof-string"></a>

Returns all custom fields as of the date used in the request

#### 🔄 Return<a id="🔄-return"></a>

[WorkerCustomFieldsResource](./models/worker-custom-fields-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/customfields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getDirectDeposit`<a id="paychexworkergetdirectdeposit"></a>

Single direct deposit for an "Active" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDirectDepositResponse = await paychex.worker.getDirectDeposit({
  workerId: "workerId_example",
  directDepositId: "directDepositId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### directDepositId: `string`<a id="directdepositid-string"></a>

The id assigned to the direct deposit for this worker.

##### effectivitydate: `string`<a id="effectivitydate-string"></a>

The effectivity date.

#### 🔄 Return<a id="🔄-return"></a>

[DirectDepositResource](./models/direct-deposit-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/directdeposits/{directDepositId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getFederalTaxSetup`<a id="paychexworkergetfederaltaxsetup"></a>

Federal tax setup for "Active" or "In-progress"  worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFederalTaxSetupResponse = await paychex.worker.getFederalTaxSetup({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerFederalTaxResource](./models/worker-federal-tax-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/federaltax` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getInformation`<a id="paychexworkergetinformation"></a>

Information about a unique worker (employee and contractor) that your application has been granted access to. Currently workers that exist within Paychex Flex payroll will be available, future enhancements will make workers from other Paychex systems available.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse = await paychex.worker.getInformation({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerResource1](./models/worker-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getPayComponent`<a id="paychexworkergetpaycomponent"></a>

Retrieve a specific pay component that a "Active" worker has.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayComponentResponse = await paychex.worker.getPayComponent({
  workerId: "workerId_example",
  workerComponentId: "workerComponentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### workerComponentId: `string`<a id="workercomponentid-string"></a>

The id of a single pay component that a  \"Active\" worker has.

##### asof: `string`<a id="asof-string"></a>

Returns pay component as of the date used in the request

#### 🔄 Return<a id="🔄-return"></a>

[RecurringResource](./models/recurring-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/paycomponents/{workerComponentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getPayComponents`<a id="paychexworkergetpaycomponents"></a>

Get all the the pay components for a specific "Active" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayComponentsResponse = await paychex.worker.getPayComponents({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### effectonpay: `string`<a id="effectonpay-string"></a>

What the effect on pay will be (REDUCTION OR ADDITION), currently only reductions are available.

##### asof: `string`<a id="asof-string"></a>

Returns all pay components as of the date used in the request

##### name: `string`<a id="name-string"></a>

The name of a pay component that a workers has.

##### componentid: `string`<a id="componentid-string"></a>

The unique identifier of the pay component.

##### classificationtype: `string`<a id="classificationtype-string"></a>

The classification type of a pay component that a worker has. (such as \"DEDUCTION\", or \"REGULAR\",)

#### 🔄 Return<a id="🔄-return"></a>

[RecurringResource](./models/recurring-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/paycomponents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getPayRate`<a id="paychexworkergetpayrate"></a>

A workers single compensation rate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayRateResponse = await paychex.worker.getPayRate({
  workerId: "workerId_example",
  rateId: "rateId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### rateId: `string`<a id="rateid-string"></a>

The id of a single workers compensation rate.

##### asof: `string`<a id="asof-string"></a>

Returns compensation as of the date used in the request

#### 🔄 Return<a id="🔄-return"></a>

[PayRateResource](./models/pay-rate-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/compensation/payrates/{rateId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getPayRatesByWorkerId`<a id="paychexworkergetpayratesbyworkerid"></a>

Information about a workers compensation rates. Rate one is only one available if the worker is In-Progress. The multiple rates is available for workers that have been completed within Flex. It’s not required for a worker to have a rate in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayRatesByWorkerIdResponse =
  await paychex.worker.getPayRatesByWorkerId({
    workerId: "workerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### asof: `string`<a id="asof-string"></a>

Returns all pay rates as of the date used in the request

#### 🔄 Return<a id="🔄-return"></a>

[PayRateResource](./models/pay-rate-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/compensation/payrates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getPayStandards`<a id="paychexworkergetpaystandards"></a>

Information about a workers compensation pay standards.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPayStandardsResponse = await paychex.worker.getPayStandards({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

#### 🔄 Return<a id="🔄-return"></a>

[PayStandardResource](./models/pay-standard-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/compensation/paystandards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getTimeOffBalance`<a id="paychexworkergettimeoffbalance"></a>

Array of time off balance(s) a worker has for each policy type of time off, for that worker. NOTE: This data is only available if the client has the Time Off Accrual product (This is not related to the Flex Time product which has it is own dev portal for those APIs).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTimeOffBalanceResponse = await paychex.worker.getTimeOffBalance({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

The ID of the worker.

#### 🔄 Return<a id="🔄-return"></a>

[TimeOffResource](./models/time-off-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/timeoff` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.getWorkerStatusList`<a id="paychexworkergetworkerstatuslist"></a>

Retrieve the full list of worker statuses (past, present, and future). For each status the workerStatusId is the value of the corresponding company worker status ID. If no company worker status with a matching type/reason exists then workerStatusId is omitted. If multiple statuses share an effective date the order field will indicate the order in which they were posted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkerStatusListResponse = await paychex.worker.getWorkerStatusList({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

#### 🔄 Return<a id="🔄-return"></a>

[Status1](./models/status1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/status` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.listAssignmentDistributions`<a id="paychexworkerlistassignmentdistributions"></a>

Array of assignments that will be used for auto distribution assigned to the worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAssignmentDistributionsResponse =
  await paychex.worker.listAssignmentDistributions({
    workerId: "workerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

The ID of the worker.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerAssignmentDistributionsResource](./models/worker-assignment-distributions-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/assignmentdistributions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.listDirectDeposits`<a id="paychexworkerlistdirectdeposits"></a>

Array of direct deposits on the "Active" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDirectDepositsResponse = await paychex.worker.listDirectDeposits({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### effectivitydate: `string`<a id="effectivitydate-string"></a>

The effectivity date

##### asof: `string`<a id="asof-string"></a>

Returns all direct deposits as of the date used in the request

#### 🔄 Return<a id="🔄-return"></a>

[DirectDepositResource](./models/direct-deposit-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/directdeposits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.removeCommunication`<a id="paychexworkerremovecommunication"></a>

Remove a communication item from a "Active" or "In-progress" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeCommunicationResponse = await paychex.worker.removeCommunication({
  workerId: "workerId_example",
  communicationId: "communicationId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

The id assigned to the worker that workers are being requested for.

##### communicationId: `string`<a id="communicationid-string"></a>

The id of a single workers communication.

#### 🔄 Return<a id="🔄-return"></a>

[CommunicationResource1](./models/communication-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/communications/{communicationId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.removeDirectDeposit`<a id="paychexworkerremovedirectdeposit"></a>

Remove a single direct deposit for a "Active" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeDirectDepositResponse = await paychex.worker.removeDirectDeposit({
  workerId: "workerId_example",
  directDepositId: "directDepositId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### directDepositId: `string`<a id="directdepositid-string"></a>

The id assigned to the direct deposit for this worker.

##### effectivitydate: `string`<a id="effectivitydate-string"></a>

The effectivity date.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/directdeposits/{directDepositId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.removeFederalTax`<a id="paychexworkerremovefederaltax"></a>

Remove the federal tax setup for an "In-progress" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFederalTaxResponse = await paychex.worker.removeFederalTax({
  workerId: "workerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/federaltax` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.removePayComponent`<a id="paychexworkerremovepaycomponent"></a>

Remove a specific pay component that a "Active" worker has.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePayComponentResponse = await paychex.worker.removePayComponent({
  workerId: "workerId_example",
  workerComponentId: "workerComponentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### workerComponentId: `string`<a id="workercomponentid-string"></a>

The id of a single pay component that a workers has.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/paycomponents/{workerComponentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.removePayRate`<a id="paychexworkerremovepayrate"></a>

Remove a compensation rate from a worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePayRateResponse = await paychex.worker.removePayRate({
  workerId: "workerId_example",
  rateId: "rateId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### rateId: `string`<a id="rateid-string"></a>

The id of a single workers compensation rate.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/compensation/payrates/{rateId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updateCommunicationItem`<a id="paychexworkerupdatecommunicationitem"></a>

Update a "Active" or "In-progress" workers specific communication item.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCommunicationItemResponse =
  await paychex.worker.updateCommunicationItem({
    workerId: "workerId_example",
    communicationId: "communicationId_example",
    requestBody: {
      type: "STREET_ADDRESS",
      usageType: "PERSONAL",
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

The id assigned to the worker that workers are being requested for.

##### communicationId: `string`<a id="communicationid-string"></a>

The id of a single workers communication.

##### requestBody: [`CommunicationResource1`](./models/communication-resource1.ts)<a id="requestbody-communicationresource1modelscommunication-resource1ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CommunicationResource1](./models/communication-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/communications/{communicationId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updateCompensationRate`<a id="paychexworkerupdatecompensationrate"></a>

Update a workers specific compensation rate.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCompensationRateResponse =
  await paychex.worker.updateCompensationRate({
    workerId: "workerId_example",
    rateId: "rateId_example",
    requestBody: {
      description: "Security2",
      rateId: "970000054610137",
      rateNumber: "RATE_1",
      rateType: "RATE_1",
      amount: "40.2",
      standardHours: "25.25",
      standardOvertime: "3.25",
      _default: true,
    },
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### rateId: `string`<a id="rateid-string"></a>

The id of a single workers compensation rate.

##### requestBody: [`PayRateResource`](./models/pay-rate-resource.ts)<a id="requestbody-payrateresourcemodelspay-rate-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PayRateResource](./models/pay-rate-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/compensation/payrates/{rateId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updateContact`<a id="paychexworkerupdatecontact"></a>

Update a worker contact. A contact may represent a person or entity (organization) but not both. A contact must have at least one communication (telecom, postal, or email). Person contacts can have multiple communications for each communication type (telecom, postal, or email) to support BUSINESS and PERSONAL. Exactly one contact must be marked as primary for each contact type. When a new contact is made primary the previous primary contact will be marked as not primary. A postal contact can be switched from a street address to a PO box and vice versa. This is done by setting either streetLineOne or postOfficeBox (a postal communication may not have both). Use the GET /companies/{companyId}/contacttypes endpoint to get a full list of available contact types and relationship types (used for person contacts).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateContactResponse = await paychex.worker.updateContact({
  workerId: "workerId_example",
  contactId: "contactId_example",
  requestBody: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### contactId: `string`<a id="contactid-string"></a>

ID associated with desired worker contact.

##### requestBody: [`WorkerContactResource`](./models/worker-contact-resource.ts)<a id="requestbody-workercontactresourcemodelsworker-contact-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkerContactResource](./models/worker-contact-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/contacts/{contactId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updateCustomField`<a id="paychexworkerupdatecustomfield"></a>

Update CustomField at the worker level

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCustomFieldResponse = await paychex.worker.updateCustomField({
  workerId: "workerId_example",
  workerCustomFieldId: "workerCustomFieldId_example",
  requestBody: {
    type: "DROPDOWN",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### workerCustomFieldId: `string`<a id="workercustomfieldid-string"></a>

ID associated with desired worker custom field.

##### requestBody: [`WorkerCustomFieldsResource`](./models/worker-custom-fields-resource.ts)<a id="requestbody-workercustomfieldsresourcemodelsworker-custom-fields-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkerCustomFieldsResource](./models/worker-custom-fields-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/customfields/{workerCustomFieldId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updateDirectDeposit`<a id="paychexworkerupdatedirectdeposit"></a>

Update a single direct deposit for a an "Active" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDirectDepositResponse = await paychex.worker.updateDirectDeposit({
  workerId: "workerId_example",
  directDepositId: "directDepositId_example",
  requestBody: {
    directDepositId: "1020026420675252",
    startDate: "2017-09-11T00:00:00Z",
    paymentType: "PERCENTAGE",
    accountType: "CHECKING",
    value: 75,
    routingNumber: "222371863",
    accountNumber: "123456",
    priority: "1",
  },
  effectivitydate: "string_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### directDepositId: `string`<a id="directdepositid-string"></a>

The id assigned to the direct deposit for this worker.

##### effectivitydate: `string`<a id="effectivitydate-string"></a>

The effectivity date.

##### requestBody: [`DirectDepositResource`](./models/direct-deposit-resource.ts)<a id="requestbody-directdepositresourcemodelsdirect-deposit-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DirectDepositResource](./models/direct-deposit-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/directdeposits/{directDepositId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updateDirectDeposits`<a id="paychexworkerupdatedirectdeposits"></a>

Update multiple direct deposits of an "Active" Worker at a time.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDirectDepositsResponse = await paychex.worker.updateDirectDeposits({
  workerId: "workerId_example",
  directDepositId: "1020026420675252",
  startDate: "2017-09-11T00:00:00Z",
  paymentType: "PERCENTAGE",
  accountType: "CHECKING",
  value: 75,
  routingNumber: "222371863",
  accountNumber: "123456",
  priority: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### directDepositId: `string`<a id="directdepositid-string"></a>

The ID for the direct deposit item.

##### startDate: `string`<a id="startdate-string"></a>

The date that this direct deposit will be applied to future pay periods. This data field cannot be PATCHED.

##### paymentType: `string`<a id="paymenttype-string"></a>

A type of payment for the direct deposit.

##### accountType: `string`<a id="accounttype-string"></a>

Financial institutions account type. This data field cannot be PATCHED.

##### value: `number`<a id="value-number"></a>

The amount to be applied to this direct deposit.

##### routingNumber: `string`<a id="routingnumber-string"></a>

The financial institutions routing number.This data field cannot be PATCHED.

##### accountNumber: `string`<a id="accountnumber-string"></a>

The financial institutions account number.This data field cannot be PATCHED.

##### priority: `string`<a id="priority-string"></a>

The priority order for which the direct deposits will be performed in. When a new direct deposit is added the priority will be assigned. The priority can be modified only by swapping with a different direct deposit using the bulk PATCH. A paymentType of REMAINDER will show a priority of 99 and can\\\'t be modified.This data field cannot be PATCHED.

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

##### effectivitydate: `string`<a id="effectivitydate-string"></a>

The effectivity date.

#### 🔄 Return<a id="🔄-return"></a>

[DirectDepositResource](./models/direct-deposit-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/directdeposits` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updateFederalTaxSetup`<a id="paychexworkerupdatefederaltaxsetup"></a>

Update the federal tax setup for a "Active" or "In-progress" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFederalTaxSetupResponse =
  await paychex.worker.updateFederalTaxSetup({
    workerId: "workerId_example",
    taxId: "3520000118851387",
    filingStatus: "MARRIED_FILING_JOINTLY",
    multipleJobs: "false",
    dependentsAmount: "123.45",
    otherIncome: "23.45",
    deductionsAmount: "2.45",
    extraWithholdingAmount: "3.45",
    taxesWithheld: "true",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### taxId: `string`<a id="taxid-string"></a>

The ID for the federal tax item.

##### filingStatus: `string`<a id="filingstatus-string"></a>

Filing status.

##### multipleJobs: `string`<a id="multiplejobs-string"></a>

See federal W-4 instructions.

##### dependentsAmount: `string`<a id="dependentsamount-string"></a>

See federal W-4 instructions.

##### otherIncome: `string`<a id="otherincome-string"></a>

See federal W-4 instructions.

##### deductionsAmount: `string`<a id="deductionsamount-string"></a>

See federal W-4 instructions.

##### extraWithholdingAmount: `string`<a id="extrawithholdingamount-string"></a>

Additional tax you want withheld each pay period.

##### taxesWithheld: `string`<a id="taxeswithheld-string"></a>

Should federal taxes be withheld.

#### 🔄 Return<a id="🔄-return"></a>

[WorkerFederalTaxResource](./models/worker-federal-tax-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/federaltax` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updatePayComponent`<a id="paychexworkerupdatepaycomponent"></a>

 Update a single pay component associated to the "Active" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePayComponentResponse = await paychex.worker.updatePayComponent({
  workerId: "workerId_example",
  workerComponentId: "workerComponentId_example",
  requestBody: {
    workerComponentId: "970000223656831",
    componentId: "970000180599325",
    name: "Deduction - 1",
    calculationType: "00H2A1IUJE7MXV6TQ37U",
    calculationBaseId: "00H2A1IUJE7MXV6TQ37U",
    value: 5,
    startDate: "2018-03-01T00:00:00Z",
    effectOnPay: "REDUCTION",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### workerComponentId: `string`<a id="workercomponentid-string"></a>

The id of a single pay component that a workers has.

##### requestBody: [`RecurringResource`](./models/recurring-resource.ts)<a id="requestbody-recurringresourcemodelsrecurring-resourcets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RecurringResource](./models/recurring-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/paycomponents/{workerComponentId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updatePayComponents`<a id="paychexworkerupdatepaycomponents"></a>

Batch update pay components associated to the "Active" worker.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePayComponentsResponse = await paychex.worker.updatePayComponents({
  workerId: "workerId_example",
  workerComponentId: "970000223656831",
  componentId: "970000180599325",
  name: "Deduction - 1",
  calculationType: "00H2A1IUJE7MXV6TQ37U",
  calculationBaseId: "00H2A1IUJE7MXV6TQ37U",
  value: 5,
  startDate: "2018-03-01T00:00:00Z",
  effectOnPay: "REDUCTION",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### workerComponentId: `string`<a id="workercomponentid-string"></a>

The id of a single pay component that a workers has.

##### componentId: `string`<a id="componentid-string"></a>

The unique identifier of the pay component. This data field cannot be PATCHED.

##### name: `string`<a id="name-string"></a>

Name of the pay component. This data field will be populated automatically based on componentId.

##### calculationType: `string`<a id="calculationtype-string"></a>

The type of calculation that will be applied for the pay component .

##### calculationBaseId: `string`<a id="calculationbaseid-string"></a>

This is required if you are not using a FLAT_DOLLAR_AMOUNT Calculation Type.

##### value: `number`<a id="value-number"></a>

This is used to specify the value that is used against the calculationType.

##### startDate: `string`<a id="startdate-string"></a>

Date which this pay component will start to be applied during the payruns. This is an optional field that default to current datetime if not provided. This cannot be backdated but can be added to start in the future.

##### effectiveDate: `string`<a id="effectivedate-string"></a>

Date which this pay component has started for the worker.

##### endDate: `string`<a id="enddate-string"></a>

Date which this pay component has ended for the worker.

##### effectOnPay: `string`<a id="effectonpay-string"></a>

What the effect on pay will be (REDUCTION OR ADDITION), currently only reductions are available. This data field will be populated automatically based on componentId. This data field cannot be PATCHED

##### classificationType: `string`<a id="classificationtype-string"></a>

The category that this component falls into.

##### frequency: [`PayComponentFrequencyTypeResource1`](./models/pay-component-frequency-type-resource1.ts)<a id="frequency-paycomponentfrequencytyperesource1modelspay-component-frequency-type-resource1ts"></a>

##### links: [`Link`](./models/link.ts)[]<a id="links-linkmodelslinkts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RecurringResource](./models/recurring-resource.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}/paycomponents` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paychex.worker.updateUniqueWorker`<a id="paychexworkerupdateuniqueworker"></a>

Update a unique worker (employee and contractor) that your application has been granted access to modify.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUniqueWorkerResponse = await paychex.worker.updateUniqueWorker({
  workerId: "workerId_example",
  requestBody: {
    workerId: "00Z5V9BTIHRQF2CF7BTH",
    employeeId: "3052",
    workerType: "EMPLOYEE",
    employmentType: "FULL_TIME",
    exemptionType: "NON_EXEMPT",
    birthDate: "1988-07-01T00:00:00Z",
    sex: "MALE",
    hireDate: "2015-06-15T00:00:00Z",
    clockId: "4321",
    laborAssignmentId: "970001557863345",
    locationId: "970001701620675",
    jobId: "970001557916904",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### workerId: `string`<a id="workerid-string"></a>

ID associated with desired worker.

##### requestBody: [`WorkerResource1`](./models/worker-resource1.ts)<a id="requestbody-workerresource1modelsworker-resource1ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkerResource1](./models/worker-resource1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workers/{workerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)

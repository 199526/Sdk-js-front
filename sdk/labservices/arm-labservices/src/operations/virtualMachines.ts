/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualMachinesMappers";
import * as Parameters from "../models/parameters";
import { LabServicesClientContext } from "../labServicesClientContext";

/** Class representing a VirtualMachines. */
export class VirtualMachines {
  private readonly client: LabServicesClientContext;

  /**
   * Create a VirtualMachines.
   * @param {LabServicesClientContext} client Reference to the service client.
   */
  constructor(client: LabServicesClientContext) {
    this.client = client;
  }

  /**
   * Returns a list of all virtual machines for a lab.
   * @summary Get all virtual machines for a lab.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachinesListByLabResponse>
   */
  listByLab(resourceGroupName: string, labName: string, options?: Models.VirtualMachinesListByLabOptionalParams): Promise<Models.VirtualMachinesListByLabResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param callback The callback
   */
  listByLab(resourceGroupName: string, labName: string, callback: msRest.ServiceCallback<Models.PagedVirtualMachines>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLab(resourceGroupName: string, labName: string, options: Models.VirtualMachinesListByLabOptionalParams, callback: msRest.ServiceCallback<Models.PagedVirtualMachines>): void;
  listByLab(resourceGroupName: string, labName: string, options?: Models.VirtualMachinesListByLabOptionalParams | msRest.ServiceCallback<Models.PagedVirtualMachines>, callback?: msRest.ServiceCallback<Models.PagedVirtualMachines>): Promise<Models.VirtualMachinesListByLabResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        options
      },
      listByLabOperationSpec,
      callback) as Promise<Models.VirtualMachinesListByLabResponse>;
  }

  /**
   * Returns the properties for a lab virtual machine.
   * @summary Get a lab virtual machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachinesGetResponse>
   */
  get(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachinesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, virtualMachineName: string, callback: msRest.ServiceCallback<Models.VirtualMachine>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, virtualMachineName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachine>): void;
  get(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualMachine>, callback?: msRest.ServiceCallback<Models.VirtualMachine>): Promise<Models.VirtualMachinesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualMachinesGetResponse>;
  }

  /**
   * Action to start a lab virtual machine.
   * @summary Start a lab virtual machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,labName,virtualMachineName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Action to stop a lab virtual machine.
   * @summary Stop a lab virtual machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName,labName,virtualMachineName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Re-image a lab virtual machine. The virtual machine will be deleted and recreated using the
   * latest published snapshot of the reference environment of the lab.
   * @summary Re-image a lab virtual machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  reimage(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginReimage(resourceGroupName,labName,virtualMachineName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Action to redeploy a lab virtual machine to a different compute node. For troubleshooting
   * connectivity.
   * @summary Redeploy a lab virtual machine to a different compute node. For troubleshooting
   * connectivity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  redeploy(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRedeploy(resourceGroupName,labName,virtualMachineName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Resets a lab virtual machine password.
   * @summary Reset a lab virtual machine password.
   * @param body The request body.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resetPassword(body: Models.ResetPasswordBody, resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginResetPassword(body,resourceGroupName,labName,virtualMachineName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Action to start a lab virtual machine.
   * @summary Start a lab virtual machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Action to stop a lab virtual machine.
   * @summary Stop a lab virtual machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * Re-image a lab virtual machine. The virtual machine will be deleted and recreated using the
   * latest published snapshot of the reference environment of the lab.
   * @summary Re-image a lab virtual machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginReimage(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        options
      },
      beginReimageOperationSpec,
      options);
  }

  /**
   * Action to redeploy a lab virtual machine to a different compute node. For troubleshooting
   * connectivity.
   * @summary Redeploy a lab virtual machine to a different compute node. For troubleshooting
   * connectivity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRedeploy(resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        options
      },
      beginRedeployOperationSpec,
      options);
  }

  /**
   * Resets a lab virtual machine password.
   * @summary Reset a lab virtual machine password.
   * @param body The request body.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param virtualMachineName The ID of the virtual machine that uniquely identifies it within the
   * containing lab. Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginResetPassword(body: Models.ResetPasswordBody, resourceGroupName: string, labName: string, virtualMachineName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        body,
        resourceGroupName,
        labName,
        virtualMachineName,
        options
      },
      beginResetPasswordOperationSpec,
      options);
  }

  /**
   * Returns a list of all virtual machines for a lab.
   * @summary Get all virtual machines for a lab.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachinesListByLabNextResponse>
   */
  listByLabNext(nextPageLink: string, options?: Models.VirtualMachinesListByLabNextOptionalParams): Promise<Models.VirtualMachinesListByLabNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByLabNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PagedVirtualMachines>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLabNext(nextPageLink: string, options: Models.VirtualMachinesListByLabNextOptionalParams, callback: msRest.ServiceCallback<Models.PagedVirtualMachines>): void;
  listByLabNext(nextPageLink: string, options?: Models.VirtualMachinesListByLabNextOptionalParams | msRest.ServiceCallback<Models.PagedVirtualMachines>, callback?: msRest.ServiceCallback<Models.PagedVirtualMachines>): Promise<Models.VirtualMachinesListByLabNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByLabNextOperationSpec,
      callback) as Promise<Models.VirtualMachinesListByLabNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByLabOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PagedVirtualMachines
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachine
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginReimageOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/reimage",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginRedeployOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/redeploy",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginResetPasswordOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/virtualMachines/{virtualMachineName}/resetPassword",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.ResetPasswordBody,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByLabNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PagedVirtualMachines
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
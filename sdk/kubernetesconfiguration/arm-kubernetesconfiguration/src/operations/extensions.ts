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
import * as Mappers from "../models/extensionsMappers";
import * as Parameters from "../models/parameters";
import { SourceControlConfigurationClientContext } from "../sourceControlConfigurationClientContext";

/** Class representing a Extensions. */
export class Extensions {
  private readonly client: SourceControlConfigurationClientContext;

  /**
   * Create a Extensions.
   * @param {SourceControlConfigurationClientContext} client Reference to the service client.
   */
  constructor(client: SourceControlConfigurationClientContext) {
    this.client = client;
  }

  /**
   * Create a new Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param extension Properties necessary to Create an Extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsCreateResponse>
   */
  create(resourceGroupName: string, clusterRp: Models.ClusterRp2, clusterResourceName: Models.ClusterResourceName2, clusterName: string, extensionName: string, extension: Models.Extension, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsCreateResponse> {
    return this.beginCreate(resourceGroupName,clusterRp,clusterResourceName,clusterName,extensionName,extension,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExtensionsCreateResponse>;
  }

  /**
   * Gets Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsGetResponse>
   */
  get(resourceGroupName: string, clusterRp: Models.ClusterRp3, clusterResourceName: Models.ClusterResourceName3, clusterName: string, extensionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterRp: Models.ClusterRp3, clusterResourceName: Models.ClusterResourceName3, clusterName: string, extensionName: string, callback: msRest.ServiceCallback<Models.Extension>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, clusterRp: Models.ClusterRp3, clusterResourceName: Models.ClusterResourceName3, clusterName: string, extensionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Extension>): void;
  get(resourceGroupName: string, clusterRp: Models.ClusterRp3, clusterResourceName: Models.ClusterResourceName3, clusterName: string, extensionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Extension>, callback?: msRest.ServiceCallback<Models.Extension>): Promise<Models.ExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        extensionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExtensionsGetResponse>;
  }

  /**
   * Delete a Kubernetes Cluster Extension. This will cause the Agent to Uninstall the extension from
   * the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, clusterRp: Models.ClusterRp4, clusterResourceName: Models.ClusterResourceName4, clusterName: string, extensionName: string, options?: Models.ExtensionsDeleteMethodOptionalParams): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,clusterRp,clusterResourceName,clusterName,extensionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Patch an existing Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param patchExtension Properties to Patch in an existing Extension.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsUpdateResponse>
   */
  update(resourceGroupName: string, clusterRp: Models.ClusterRp5, clusterResourceName: Models.ClusterResourceName5, clusterName: string, extensionName: string, patchExtension: Models.PatchExtension, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,clusterRp,clusterResourceName,clusterName,extensionName,patchExtension,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExtensionsUpdateResponse>;
  }

  /**
   * List all Extensions in the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsListResponse>
   */
  list(resourceGroupName: string, clusterRp: Models.ClusterRp6, clusterResourceName: Models.ClusterResourceName6, clusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param callback The callback
   */
  list(resourceGroupName: string, clusterRp: Models.ClusterRp6, clusterResourceName: Models.ClusterResourceName6, clusterName: string, callback: msRest.ServiceCallback<Models.ExtensionsList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, clusterRp: Models.ClusterRp6, clusterResourceName: Models.ClusterResourceName6, clusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtensionsList>): void;
  list(resourceGroupName: string, clusterRp: Models.ClusterRp6, clusterResourceName: Models.ClusterResourceName6, clusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtensionsList>, callback?: msRest.ServiceCallback<Models.ExtensionsList>): Promise<Models.ExtensionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ExtensionsListResponse>;
  }

  /**
   * Create a new Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param extension Properties necessary to Create an Extension.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, clusterRp: Models.ClusterRp2, clusterResourceName: Models.ClusterResourceName2, clusterName: string, extensionName: string, extension: Models.Extension, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        extensionName,
        extension,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Delete a Kubernetes Cluster Extension. This will cause the Agent to Uninstall the extension from
   * the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, clusterRp: Models.ClusterRp4, clusterResourceName: Models.ClusterResourceName4, clusterName: string, extensionName: string, options?: Models.ExtensionsBeginDeleteMethodOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        extensionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Patch an existing Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - either Microsoft.ContainerService (for AKS
   * clusters) or Microsoft.Kubernetes (for OnPrem K8S clusters). Possible values include:
   * 'Microsoft.ContainerService', 'Microsoft.Kubernetes'
   * @param clusterResourceName The Kubernetes cluster resource name - either managedClusters (for
   * AKS clusters) or connectedClusters (for OnPrem K8S clusters). Possible values include:
   * 'managedClusters', 'connectedClusters'
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param patchExtension Properties to Patch in an existing Extension.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, clusterRp: Models.ClusterRp5, clusterResourceName: Models.ClusterResourceName5, clusterName: string, extensionName: string, patchExtension: Models.PatchExtension, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        extensionName,
        patchExtension,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * List all Extensions in the cluster.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExtensionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ExtensionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExtensionsList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExtensionsList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExtensionsList>, callback?: msRest.ServiceCallback<Models.ExtensionsList>): Promise<Models.ExtensionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ExtensionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Extension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "extension",
    mapper: {
      ...Mappers.Extension,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Extension
    },
    201: {
      bodyMapper: Mappers.Extension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.forceDelete
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "patchExtension",
    mapper: {
      ...Mappers.PatchExtension,
      required: true
    }
  },
  responses: {
    202: {
      bodyMapper: Mappers.Extension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
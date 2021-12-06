/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/secureScoreControlsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a SecureScoreControls. */
export class SecureScoreControls {
  private readonly client: SecurityCenterContext;

  /**
   * Create a SecureScoreControls.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Get all security controls for a specific initiative within a scope
   * @param secureScoreName The initiative name. For the ASC Default initiative, use 'ascScore' as in
   * the sample request below.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecureScoreControlsListBySecureScoreResponse>
   */
  listBySecureScore(secureScoreName: string, options?: Models.SecureScoreControlsListBySecureScoreOptionalParams): Promise<Models.SecureScoreControlsListBySecureScoreResponse>;
  /**
   * @param secureScoreName The initiative name. For the ASC Default initiative, use 'ascScore' as in
   * the sample request below.
   * @param callback The callback
   */
  listBySecureScore(secureScoreName: string, callback: msRest.ServiceCallback<Models.SecureScoreControlList>): void;
  /**
   * @param secureScoreName The initiative name. For the ASC Default initiative, use 'ascScore' as in
   * the sample request below.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySecureScore(secureScoreName: string, options: Models.SecureScoreControlsListBySecureScoreOptionalParams, callback: msRest.ServiceCallback<Models.SecureScoreControlList>): void;
  listBySecureScore(secureScoreName: string, options?: Models.SecureScoreControlsListBySecureScoreOptionalParams | msRest.ServiceCallback<Models.SecureScoreControlList>, callback?: msRest.ServiceCallback<Models.SecureScoreControlList>): Promise<Models.SecureScoreControlsListBySecureScoreResponse> {
    return this.client.sendOperationRequest(
      {
        secureScoreName,
        options
      },
      listBySecureScoreOperationSpec,
      callback) as Promise<Models.SecureScoreControlsListBySecureScoreResponse>;
  }

  /**
   * Get all security controls within a scope
   * @param [options] The optional parameters
   * @returns Promise<Models.SecureScoreControlsListResponse>
   */
  list(options?: Models.SecureScoreControlsListOptionalParams): Promise<Models.SecureScoreControlsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.SecureScoreControlList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.SecureScoreControlsListOptionalParams, callback: msRest.ServiceCallback<Models.SecureScoreControlList>): void;
  list(options?: Models.SecureScoreControlsListOptionalParams | msRest.ServiceCallback<Models.SecureScoreControlList>, callback?: msRest.ServiceCallback<Models.SecureScoreControlList>): Promise<Models.SecureScoreControlsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SecureScoreControlsListResponse>;
  }

  /**
   * Get all security controls for a specific initiative within a scope
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecureScoreControlsListBySecureScoreNextResponse>
   */
  listBySecureScoreNext(nextPageLink: string, options?: Models.SecureScoreControlsListBySecureScoreNextOptionalParams): Promise<Models.SecureScoreControlsListBySecureScoreNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySecureScoreNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecureScoreControlList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySecureScoreNext(nextPageLink: string, options: Models.SecureScoreControlsListBySecureScoreNextOptionalParams, callback: msRest.ServiceCallback<Models.SecureScoreControlList>): void;
  listBySecureScoreNext(nextPageLink: string, options?: Models.SecureScoreControlsListBySecureScoreNextOptionalParams | msRest.ServiceCallback<Models.SecureScoreControlList>, callback?: msRest.ServiceCallback<Models.SecureScoreControlList>): Promise<Models.SecureScoreControlsListBySecureScoreNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySecureScoreNextOperationSpec,
      callback) as Promise<Models.SecureScoreControlsListBySecureScoreNextResponse>;
  }

  /**
   * Get all security controls within a scope
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecureScoreControlsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.SecureScoreControlsListNextOptionalParams): Promise<Models.SecureScoreControlsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecureScoreControlList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.SecureScoreControlsListNextOptionalParams, callback: msRest.ServiceCallback<Models.SecureScoreControlList>): void;
  listNext(nextPageLink: string, options?: Models.SecureScoreControlsListNextOptionalParams | msRest.ServiceCallback<Models.SecureScoreControlList>, callback?: msRest.ServiceCallback<Models.SecureScoreControlList>): Promise<Models.SecureScoreControlsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SecureScoreControlsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySecureScoreOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/secureScores/{secureScoreName}/secureScoreControls",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.secureScoreName
  ],
  queryParameters: [
    Parameters.apiVersion7,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoreControlList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/secureScoreControls",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion7,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoreControlList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySecureScoreNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion7,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoreControlList
    },
    default: {
      bodyMapper: Mappers.CloudError
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
    Parameters.apiVersion7,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecureScoreControlList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
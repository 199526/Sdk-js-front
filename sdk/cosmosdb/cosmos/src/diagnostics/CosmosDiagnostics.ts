// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Constants } from "../common/constants";
import { Context, Span, trace } from '@opentelemetry/api';
import { createTracingClient } from "@azure/core-tracing";
/**
 * Cosmos Diagnostics tracing client for this package.
 *
 * @internal
 */
export const diagnosticClient = createTracingClient({
  namespace: Constants.AzureNamespace,
  packageName: Constants.AzurePackageName,
  packageVersion: Constants.SDKVersion,
});

export class CosmosDiagnostics{
 diagnosticTracer = trace.getTracer(Constants.AzureNamespace, Constants.SDKVersion);
 ctx: Context;
 span: Span;
 
public start() {
//   const ress = diagnosticClient.startSpan("");

// setSpan(this.ctx,this.span)
}

public isRecording(){
//return getSpan(this.ctx).isRecording();
}

public end() {

}

public getduration(){
  //const span = getSpan(this.ctx);
  //setSpan(this.ctx,span).setValue();
}
public getContactedRegionNames(): any{
 return undefined;
}
 public  toString() {
  //return getSpan(this.ctx).spanContext.toString();
 }

}

/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MySQLManagementFlexibleServerClient } from "@azure/arm-mysql-flexible";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Manual failover a server.
 *
 * @summary Manual failover a server.
 * x-ms-original-file: specification/mysql/resource-manager/Microsoft.DBforMySQL/stable/2021-05-01/examples/ServerFailover.json
 */
async function restartAServer() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "TestGroup";
  const serverName = "testserver";
  const credential = new DefaultAzureCredential();
  const client = new MySQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.beginFailoverAndWait(
    resourceGroupName,
    serverName
  );
  console.log(result);
}

restartAServer().catch(console.error);
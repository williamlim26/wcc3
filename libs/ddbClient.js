// import AWS from "aws-sdk";

// // Update AWS config
// AWS.config.update({
  // accessKeyId: process.env.DB_ACCESS_KEY_ID, // Do NOT HARD-CODE your secret credentials here
  // secretAccessKey: process.env.DB_SECRET_ACCESS_KEY, // Do NOT HARD-CODE your secret credentials here
  // region: "eu-central-1",
// });

// // Create DynamoDB service object
// const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

// export default db;

// Create service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// Set the AWS Region.
const REGION = "us-east-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: 'AKIAW26E6BKBVOZGLWIZ',
    secretAccessKey: 'ZjOUo+vhkSijQb42YAbnLql41mu8h5TXHokZ9fcz',
  },
  region: REGION
});

export { ddbClient };

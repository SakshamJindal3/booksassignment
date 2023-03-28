import type { AWS } from "@serverless/typescript";
import {
  registers,
  logins,
  addbook,
  getbookdatas,
  updatebookdatas,
  deletebooksdatas,
  deleteusers,
  getuserdatas,
  updateadminbook
} from "@functions/index";

const serverlessConfiguration: AWS = {
  service: "inzintassignment",
  configValidationMode: "error",
  frameworkVersion: "3",
  useDotenv: true,
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    deploymentMethod: "direct",
    region: "us-east-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      SECRETKEY: "${env:SECRETKEY}",
      MONGO_URI: "${env:MONGO_URI}",
      accessKeyId: "${env:accessKeyId}",
      secretKeyId: "${env:secretKeyId}",
      region: "${env:region}",
      SALTROUND : "${env:SALTROUND}",
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: {
    registers,
    logins,
    getuserdatas,
    deleteusers,
    addbook,
    getbookdatas,
    updatebookdatas,
    deletebooksdatas,
    updateadminbook,
    
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },

};

module.exports = serverlessConfiguration;

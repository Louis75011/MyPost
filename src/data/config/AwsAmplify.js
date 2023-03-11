import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    region: "YOUR_REGION",
    userPoolId: "YOUR_USER_POOL_ID",
    userPoolWebClientId: "YOUR_USER_POOL_CLIENT_ID",
  },
  Storage: {
    bucket: "YOUR_S3_BUCKET_NAME",
    region: "YOUR_S3_BUCKET_REGION",
  },
  API: {
    endpoints: [
      {
        name: "MyAPI",
        endpoint: "YOUR_API_ENDPOINT",
        region: "YOUR_API_REGION",
      },
    ],
  },
});

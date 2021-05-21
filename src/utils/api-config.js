import Amplify from 'aws-amplify';

Amplify.configure({
    // OPTIONAL - if your API requires authentication 
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-west-2:1f77082c-921c-4aa0-aeed-961d11150ea8',
        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2',
    },
    API: {
        endpoints: [
            {
                name: "mailchimpSubscribe",
                endpoint: "https://uxh7cpzimd.execute-api.us-west-2.amazonaws.com"
            }
        ]
    }
});
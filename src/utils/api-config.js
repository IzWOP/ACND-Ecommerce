import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
// Amplify.configure({
//     API: {
//         endpoints: [
//             {
//                 name: "mailchimpLambda",
//                 endpoint: "https://lambda.us-west-2.amazonaws.com/2015-03-31/functions/mailchipSubscribe/invocations",
//                 service: "lambda",
//                 region: "us-west-2"
//             },
//             {   
//                 name: "mailchimpAPI",
//                 endpoint: "https://uxh7cpzimd.execute-api.us-west-2.amazonaws.com",
//                 // custom_header: async () => { 
//                 //     // return { Authorization : 'token' } 
//                 //     // Alternatively, with Cognito User Pools use this:
//                 //     // return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
//                 //     return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
//                 //   }
//             }
//         ]
//     }
// })
// API.configure(awsconfig);
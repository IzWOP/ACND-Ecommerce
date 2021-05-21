import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Amplify, { Auth } from 'aws-amplify';
// import awsconfig from './aws-exports';
// import awsExports from './aws-exports';

// Amplify.configure(awsExports);
// Amplify.configure(awsconfig);
// Amplify.configure({
//     Auth: {

//         // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
//         identityPoolId: 'us-west-2:1f77082c-921c-4aa0-aeed-961d11150ea8',

//         // REQUIRED - Amazon Cognito Region
//         region: 'us-west-2',

//         // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
//         mandatorySignIn: false,

//         // OPTIONAL - Configuration for cookie storage
//         // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
//         cookieStorage: {
//         // REQUIRED - Cookie domain (only required if cookieStorage is provided)
//             domain: '.acnd.us',
//         // OPTIONAL - Cookie path
//             path: '/',
//         // OPTIONAL - Cookie expiration in days
//             expires: 365,
//         // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
//             secure: true
//         },

//         // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
//     }
// });
// // Auth.signIn()
// // You can get the current config object
// const currentConfig = Auth.configure();
// console.log(currentConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

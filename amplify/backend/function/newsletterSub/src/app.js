/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
// const mailchimp = require('@mailchimp/mailchimp_marketing') 
//declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
});

// //set up mailchimp let key = process.env.MAILCHIMP_API; let list_id =
// process.env.LIST_ID; mailchimp.setConfig({   apiKey: key,   server: 'us1',
// });

/**********************
 * Example get method *
 **********************/

app.get('/subscribe', function (req, res) {
    // Add your code here
    res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/subscribe', function (req, res) {
    //   let incomingEmail = req.body.email_address   async function
    // subscribe(email) {     const body = {         email_address : email,
    // status : 'pending'       }     const response = await mailchimp     .lists
    //  .addListMember(list_id, body)     .then(function(results) {         return
    // results     })     .catch(function (err) {         return err         //
    // return res.json(err.response.body.title);     }); } let results =
    // subscribe(incomingEmail) res.json(results)
    res.json({success: 'get call succeed!', url: req.url});
});

app.post('/subscribe/*', function (req, res) {
    // Add your code here
    res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

// Export the app object. When executing the application local this does
// nothing. However, to port it to AWS Lambda we will create a wrapper around
// that will load the app from this file
module.exports = app

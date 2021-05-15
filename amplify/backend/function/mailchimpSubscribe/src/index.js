const mailchimp = require('@mailchimp/mailchimp_marketing');
let key = process.env.MAILCHIMP_API

mailchimp.setConfig({
  apiKey: key,
  server: 'us1',
});

exports.handler = async (data) =>{
//     console.log(key)
//   console.log(data)
  const response = await mailchimp.lists.getLists
let whatTheySaid = JSON.stringify(response)
  return whatTheySaid;
}

import React, {useState} from 'react';
import Amplify, { Auth } from 'aws-amplify';


//stylesheets
import './index.scss';




let email = 'izzyinjurous@aim.com'; 
function subscribeToList(email) {

  
    // invoking the actual Lambda function
    var lambda = new AWS.Lambda();
    lambda.invoke({
      FunctionName: 'mailchimpSubscribe', // your function name
      LogType: "Tail",
      InvocationType: "Event",
      Payload: JSON.stringify({
        "email": email
      }) // how you send the email to the Lambda event
    }, function(err, data){
      if (err) { 
        console.log(err, err.stack);
      } else {
        console.log('Thanks! Your signed up to my email list on Mailchimp');
      }
    });
  }
subscribeToList(email)

const Home = () => {
    const Istate = {
        user: false,
        setUser: null
    };
    const [user,
        setUser] = useState(Istate);
		if (user===true) {
			console.log('user');
			console.log(setUser);
		}
    return <div className='billboard'>
        <div className='background'></div>
        <div className='container'>
            <div className='row'>
                <div className='billboard_textbox'>
                    <h1>ACND</h1>
                    <h2 data-aos="zoom-in" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-out-cubic">Coming Soon</h2>
                    <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
                        A lifestyle and clothing brand to help you ascend.
                    </p>
                </div>
            </div>
        </div>
    </div>

};

export default Home;

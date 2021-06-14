import React, {useState, useEffect} from 'react';
import {API} from 'aws-amplify';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../../utils/api-config';

//stylesheets
import './index.scss';


const emailSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .email()
            .required('Email is required')
    });

// function sendData(email) {
//     const apiName = 'subscribeAPI';
//     const path = '/subscribe';
//     const myInit = {
//         body: {
//             email_address: email
//         }, // replace this with attributes you need
//         headers: {}, // OPTIONAL
//     }; //replace this with the path you have configured on your API

//     return API
//         .post(apiName, path, myInit)
//         .then(response => {
//             console.log(response);
//         });
// }

const Home = () => {

    //setting up email state/result for button ui and error results
    const [subscribeStatus, setStatus] = useState({email_status:null})
    const [subscribeResult, setResult] = useState({email_result:null})
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(emailSchema)
      }); useForm({resolver: yupResolver(emailSchema)});


        function sendData(email) {
        const apiName = 'subscribeAPI';
        const path = '/subscribe';
        const myInit = {
            //setting up API sending
            body: {
                email_address: email,
            }, 
            headers: {}, // OPTIONAL
        }; 
        //grabbing button and form for UI animations
        let button = document.querySelector('.submit');
        let formSection = document.querySelector('form');
        button.classList.add('clicked')
        
        function validate() {
            setTimeout(function () {
                button.classList.remove("clicked");
                button.classList.add("validate");
                callback()
            }, 2250);
        }
        //if succeeded continue
        function callback(){
            setTimeout(function () {
                    button.classList.remove("validate");
                    formSection.classList.add('hide')
                    setTimeout(function () {
                        formSection.style.display= 'none'
                }, 5000);
            }, 1050);
        }
        return API
            .post(apiName, path, myInit)
            .then(res => {
                validate()
                // console.log(res);
                if(res.errResult){
                    console.log(JSON.parse(res.errResult))
                    let errResponse = JSON.parse(res.errResult)
                    setResult({email_result: errResponse.title })
                } else if(res.result.status === 'pending') {
                    setResult({email_result: res.result.status })
                } else{
                    return;
                }
                
                });
    }


    const onSubmitEmail = (formData) => {
        // formData.preventDefault()
        
        //cleaning setting up data
        const email = formData.email;
        //send said parameter into function clean
        sendData(email)
        // let result = sendData(email)
        //promise return from onsubmit
        // result.then((res)=>{
        //     console.log(res);
        // }).catch((err)=>{
        //     //just in case it failes
        //     console.log('promise in api failed',err);
        // })

    }
    
    useEffect(()=>{
        switch (subscribeResult.email_result) {
            case 'Member Exists':
                console.log('the exists fired switch');
                setStatus({email_status:"Sorry Bro, that email already exists."})
                break;
            case 'Forgotten Email Not Subscribed':
                console.log('the forgotten fired switch');
                setStatus({email_status:"Sorry My Dude, that email is already in the system."});
                window.open('http://eepurl.com/hyzFTv', '_blank');
                break;
            case 'pending':
                console.log('subscribed the mother fucker switch');
                setStatus({email_status:"Hell yes, you're in! Check your email to confirm."})
                break;
            default:
                setStatus({email_status:null});
                break;
        }
    },[subscribeResult]);


    return <div className='billboard'>
        <div className='background'></div>
        <div className='container'>
            <div className='row'>
                <div className='billboard_textbox'>
                    <h1>ACND</h1>
                    <h2
                        data-aos="zoom-in"
                        data-aos-delay="3000"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">Coming Soon</h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic">
                        A lifestyle and clothing brand to help you ascend.
                    </p>
                    <form onSubmit={handleSubmit(onSubmitEmail)} data-aos-delay="3000"  data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
                        <input
                            className='form-item'
                            name="email"
                            placeholder="Email"
                            {...register("email",{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"})} /> 
                            {errors.email && <p>{errors.email.message}</p>}
                            {subscribeStatus.email_status!== null &&<span>{subscribeStatus.email_status}</span> }
                        <button className='submit' type="submit" value="Submitt"></button>
                    </form>
                </div>
            </div>
        </div>
    </div>

};

export default Home;

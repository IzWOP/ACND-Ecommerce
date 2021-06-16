import React, {useState, useEffect} from 'react';
import {API} from 'aws-amplify';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import '../../utils/api-config';

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


const Subscribe=()=> {

        //setting up email state/result for button ui and error results
        const [subscribeStatus,
            setStatus] = useState({email_status: null})
        const [subscribeResult,
            setResult] = useState({email_result: null})
        const {register, handleSubmit, formState: {
                errors
            }} = useForm({resolver: yupResolver(emailSchema)});
        useForm({resolver: yupResolver(emailSchema)});

            //grabbing button and form for UI animations
    let button = document.querySelector('.submit');
    let formSection = document.querySelector('form');


    function errorReport() {
        button
            .classList
            .remove("clicked");
        button
            .classList
            .add("error");
        callback()
    }
    function validate() {
        button
            .classList
            .remove("clicked");
        button
            .classList
            .add("validate");
        callback()
    }

    function callback() {
        setTimeout(function () {
            if (button.classList.contains('validate')) {
                button
                    .classList
                    .remove("validate");
                formSection
                    .classList
                    .add('hide')
                setTimeout(function () {
                    formSection.style.display = 'none'
                }, 5000);
            } else if (button.classList.contains('error')) {
                button
                    .classList
                    .remove("error");
            } else{
                button
                    .classList
                    .remove("clicked");
            }
        }, 3050);
    }

        //send to internal API to hit mailchimp
        function sendData(email) {
            //setting up API sending
            const apiName = 'newsletterAPI';
            const path = '/subscribe';
            const myInit = {
                body: {
                    email_address: email
                },
            };
            //loading on button
            button.classList.add('clicked');
            return API
                .post(apiName, path, myInit)
                .then(res => {
                    if (res.errResult) {
                        //catch error first and set err UI
                        errorReport()
                        let errResponse = JSON.parse(res.errResult.text)
                        setResult({email_result: errResponse.title})
                    } else if (res.result.status === 'pending') {
                        //if successful we validate
                        validate()
                        setResult({email_result: res.result.status})
                    } else {
                        //just in case we clear and start over
                        setResult({email_result: null});
                        callback();
                        return;
                    }
                })
                .catch((err)=>{
                    //only for huge main website error catching/api
                    console.log(err);
                    setResult({email_result: 'error'})
                    callback()
                });
        }
    
        const onSubmitEmail = (formData) => {
            //  cleaning setting up data
            const email = formData.email;
            //send said parameter into function clean
            sendData(email)
        }
        //setting the status to notify the user if email subscription succeeded
        useEffect(() => {
            switch (subscribeResult.email_result) {
                case 'Member Exists':
                    setStatus({email_status: "Sorry Bro, that email already exists."});
                    setTimeout(function () {
                        setStatus({email_status: null})
                    }, 3050);
                    break;
                case 'Forgotten Email Not Subscribed':
                    setStatus({email_status: "Sorry My Dude, that email is already in the system."});
                    window.open('http://eepurl.com/hyzFTv', '_blank');
                    break;
                case 'pending':
                    setStatus({email_status: "Hell yes, you're in! Check your email to confirm."});
                    break;
                case 'error':
                    //huge website error default fallback
                    setStatus({email_status: "Oh no, somethings broken. Subscribe in opened page"});
                    window.open('http://eepurl.com/hyzFTv', '_blank');
                    setTimeout(function () {
                        setStatus({email_status: null})
                    }, 3050);
                    break;
                default:
                    //setting the state just another fallback
                    setStatus({email_status: null});
                    break;
            }
        }, [subscribeResult]);

    return (
        <section className='subscribe'>
            <div className='background'></div>
            <h5>
            subscribe is working
            </h5>
            <form
                        onSubmit={handleSubmit(onSubmitEmail)}
                        data-aos-delay="3000"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-easing="ease-out-cubic">
                        <input
                            className='form-item'
                            name="email"
                            placeholder="Email"
                            {...register("email",{pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"})}/> 
                            {errors.email && <p>{errors.email.message}</p>}
                        <button className='submit' type="submit" value="Submitt"></button>
                    </form>
                    {subscribeStatus.email_status !== null && <div className='email-status'>
                        {subscribeStatus.email_status}
                    </div>}
        </section>
    )
}

export default Subscribe;

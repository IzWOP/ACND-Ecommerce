import React from 'react';
// import {API} from 'aws-amplify';
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
    // const Istate = {
    //     user: false,
    //     setUser: null
    // };
    // const [user,
    //     setUser] = useState(Istate);
    // if (user === true) {
    //     console.log('user');
    //     console.log(setUser);
    // }
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(emailSchema)
      }); useForm({resolver: yupResolver(emailSchema)});

      const formFix = (formData) => {
        const cleanData = {
            'email': formData.email,
            'attributes': {
                email: formData.email,
            }
        }
        return cleanData
    }

    const onSubmitEmail = (formData) => {
        // formData.preventDefault()
        const sendData = formFix(formData)
        console.log(sendData);
        let button = document.querySelector('.submit');
       button.classList.add('clicked')
       validate()
       function validate() {
        setTimeout(function () {
         button.classList.remove("clicked");
          button.classList.add("validate");
          callback()
        }, 2250);
        }
        function callback(){
            setTimeout(function () {
                    button.classList.remove("validate");
            }, 2250);
        }

    }

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
                        <button className='submit' type="submit" value="Submitt"></button>
                    </form>
                </div>
            </div>
        </div>
    </div>

};

export default Home;

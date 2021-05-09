import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {Auth} from 'aws-amplify';
import * as yup from 'yup';
import { FaTimes } from "react-icons/fa";
//yup schemas
const signUpSchema = yup
    .object()
    .shape({
        firstName: yup
            .string()
            .min(2)
            .required(),
        lastName: yup
            .string()
            .min(2)
            .required(),
        email: yup
            .string()
            .email(),
        password: yup
            .string()
            .min(8)
            .required('Password is required'),
        passwordConfirmation: yup
            .string()
            .oneOf([
                yup.ref('password'),
                null
            ], 'Passwords must match')
            // createdOn: yup.date().default(function () {   return new Date(); }),
    });

const formFix = (formData) => {
    const cleanData = {
        'username': formData.email,
        'password': formData.password,
        'attributes': {
            email: formData.email,
            'custom:first_name': formData.firstName,
            'custom:last_name': formData.lastName
        }
    }
    return cleanData
}

// const fullSend = ()=>{
    
// }

const SignUp = (props) => {
    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(signUpSchema)});
    const [errorCaught,
        setError] = useState();
    const clearBanner = ()=>{
        let errorUnhide = document.querySelector('.error-banner')
        errorUnhide.style.display = 'none';
    }
    const onSubmit = (formData) => {
        // formData.preventDefault()
        const sendData = formFix(formData)
        async function signUp() {
            try {
                 await Auth.signUp(sendData);      
            } catch (error) {
                console.log(errorCaught);
                props.updateUsername(null)
                console.log('error signing up:', error);
                setError(error.message)
                let errorUnhide = document.querySelector('.error-banner')
                errorUnhide.style.display = 'block';
            }

        }
        signUp()
    };
    return <section className="sign-up">
        <div className='error-banner'>{errorCaught}<button onClick={clearBanner} className='close'><FaTimes/></button></div>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
                className='form-item'
                name="firstName"
                placeholder="First Name"
                ref={register}/> {errors.firstName && <p>{errors.firstName.message}</p>}
            <input
                className='form-item'
                name="lastName"
                placeholder="Last Name"
                ref={register}/> {errors.lastName && <p>{errors.lastName.message}</p>}
            <input
                className='form-item'
                name="email"
                placeholder="Email"
                ref={register}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/> {errors.email && <p>{errors.email.message}</p>}
            <input
                className='form-item'
                name="password"
                placeholder="Password"
                type="password"
                ref={register({required: "required"})}/> {errors.password && <p>{errors.password.message}</p>}

            <input
                className='form-item'
                name="passwordConfirmation"
                placeholder="Confirm Password"
                ref={register({required: "required"})}
                type="password"/> {errors.passwordConfirmation && <span>Password does not match</span>}

            <input className='submit' type="submit"/>
        </form>
    </section>
}

export default SignUp;
import React from 'react';
import {useForm} from "react-hook-form";
import {Auth} from 'aws-amplify';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

//style
import './index.scss';

// yup schemas
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
            .string().min(5)
            .required('Password is required'),
        passwordConfirmation: yup
            .string()
            .oneOf([
                yup.ref('password'),
                null
            ], 'Passwords must match')
            // createdOn: yup.date().default(function () {   return new Date(); }),
    });
const LoginSchema = yup
    .object()
    .shape({
        emailInput: yup
            .string()
            .required(),
        passwordInput: yup
            .string()
            .required()
    });

const SignUp = (props) => {
    const {register, handleSubmit, watch, errors} = useForm({resolver: yupResolver(signUpSchema)});
    const onSubmit = (data) => {
        console.log(data)
        console.log(errors);

    };

    // console.log(watch("email")); // watch input value by passing the name of it

    return <section className="form-login">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
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
                ref={register({
                required: "required"
            })}/> {errors.password && <p>{errors.password.message}</p>}

            <input
                className='form-item'
                name="passwordConfirmation"
                placeholder="Password"
                ref={register({
                required: "required",
            })}
                type="password"/>
            {errors.passwordConfirmation && <span>Password does not match</span>}

            <input className='submit' type="submit"/>
        </form>
    </section>
}

const Login = (props) => {
    return <section className='login'>
        <SignUp/>
    </section>
}

export default Login;
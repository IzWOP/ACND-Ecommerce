import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

//yup schema
const signInSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .required('Username is required'),
        password: yup
            .string()
            .min(8)
            .required('Password is required')
    });


const SignIn = (props) => {
    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(signInSchema)});
    const onSubmitSignIn = (formData) => {
        console.log(formData, 'signin');
        console.log(formData.email)

        // async function signIn() {     try {         const user = await
        // Auth.signIn(username, password);     } catch (error) { console.log('error
        // signing in', error);     } } signIn();
    }
    return <section className="form-login">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmitSignIn)}>
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
                ref={register}/> {errors.password && <p>{errors.password.message}</p>}
            <input className='submit' type="submit"/>
        </form>
        <Link to='/Login/ForgotPassword'>
            Forgot Password</Link>
    </section>
}

export default SignIn;
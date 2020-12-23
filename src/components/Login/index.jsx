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
            .string()
            .min(1)
            .required('Password is required'),
        passwordConfirmation: yup
            .string()
            .oneOf([
                yup.ref('password'),
                null
            ], 'Passwords must match')
            // createdOn: yup.date().default(function () {   return new Date(); }),
    });
  const confirmSchema = yup.object().shape({
        ConfirmationCode: yup
            .string()
            .required()
    });
const signInSchema = yup
    .object()
    .shape({
        emailInput: yup
            .string()
            .required(),
        passwordInput: yup
            .string()
            .required()
    });

const formFix = (formData)=> {
    const cleanData = {
        'username':formData.email,
        'password':formData.password,
        'attributes': {
            email: formData.email,
            'custom:first_name':formData.firstName,
            'custom:last_name':formData.lastName
        }
    }
    return cleanData
}

const SignUp = (props) => {
    const {register, handleSubmit, watch, errors} = useForm({resolver: yupResolver(signUpSchema)});
    const onSubmit = (formData) => {
       const sendData = formFix(formData)
        async function signUp() {
            try {
                const { user } = await Auth.signUp(sendData);
                console.log(user)
              } catch (error) {
                console.log('error signing up:', error);
              }
        
        }
        signUp()
    };

    // console.log(watch("email")); // watch input value by passing the name of it

    return <section className="form-login">
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
                type="password"/> {errors.passwordConfirmation && <span>Password does not match</span>}

            <input className='submit' type="submit"/>
        </form>
    </section>
}

const ConfirmSignUp = (props) =>{
  const {register, handleSubmit, errors} = useForm({resolver: yupResolver(confirmSchema)});
  
//   async function confirmSignUp() {
//     try {
//       //fix
//       await Auth.confirmSignUp(username, code);
//     } catch (error) {
//         console.log('error confirming sign up', error);
//     }
// }
const onSubmit = (formData) => {
console.log(formData,'confirmation code');

}
return <section className='confirm'>
<form onSubmit={handleSubmit(onSubmit)}>
  <input
    className='form-item'
    name="ConfirmationCode"
    placeholder="Confirmation Code"
    ref={register}/> {errors.ConfirmationCode && <p>{errors.ConfirmationCode.message}</p>}
    <input className='submit' type="submit"/>
</form>
</section>
}

const SignIn = (props) =>{
    return <h2>Sign In</h2>
}

const Login = (props) => {
    return <section className='login'>
        <SignUp/>
        <ConfirmSignUp/>
        <SignIn/>
    </section>
}

export default Login;
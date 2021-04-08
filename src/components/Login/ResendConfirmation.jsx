
import React from 'react';
import {useForm} from "react-hook-form";
import {Auth} from 'aws-amplify';
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

const ResendConfirmation = (props) => {
    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(signInSchema)});
    async function resendConfirmationCode(formData) {
        try {
            await Auth.resendSignUp(formData);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    if (props !== null) {
        // some function right here but more than likey there's going to be something
        // right here if they sign in. Or just want to go to it directly.
        console.log(props, "resendconfirmation props is not empty");
    }

    return <section>
        <form onSubmit={handleSubmit(resendConfirmationCode)}>
            <input
                className='form-item'
                name="email"
                placeholder="Email"
                ref={register}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/> {errors.email && <p>{errors.email.message}</p>}
            <input className='submit' type="submit"/>
        </form>
    </section>
}

export default ResendConfirmation;

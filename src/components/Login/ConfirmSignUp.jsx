import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

//yup schema

const confirmSchema = yup
    .object()
    .shape({
        username: yup
            .string()
            .email(),
        ConfirmationCode: yup
            .string()
            .required()
    });


const ConfirmSignUp = (props) => {
    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(confirmSchema)});
    // set the email as state then use it for the confirmation.   async function
    // confirmSignUp() {     try {       //fix       await
    // Auth.confirmSignUp(username, code);     } catch (error) { console.log('error
    // confirming sign up', error);     } }
    console.log("confirmation state", props.state);
    const onSubmit = (formData) => {
        console.log(formData, 'confirmation code');

    }

    if (props !== null || props !== undefined || props !== '') {
        //action to replace user email to another email.
        //replaces prefilled in with empty form
        const changeUsername = ()=>{
            return <input
            className='form-item'
            name="Username"
            placeholder="Email"
            ref={register}/>
        }

        return <section className='confirm'>
            <h3>Confirmation Code</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* edit the type */}
                <h3>{props.username}<span><button onClick={changeUsername}>Edit</button></span></h3>
                {/* <input className='form-item' name="Username" value={props.username}/> {errors.username && <p>{errors.username.message}</p>} */}
                <input
                    className='form-item'
                    name="ConfirmationCode"
                    placeholder="Confirmation Code"
                    ref={register}/> {errors.ConfirmationCode && <p>{errors.ConfirmationCode.message}</p>}
                <input className='submit' type="submit"/>
            </form>
        </section>
    } else {

        return <section className='confirm'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='form-item'
                    name="Username"
                    placeholder="Email"
                    ref={register}/> {errors.username && <p>{errors.username.message}</p>}
                <input
                    className='form-item'
                    name="ConfirmationCode"
                    placeholder="Confirmation Code"
                    ref={register}/> {errors.ConfirmationCode && <p>{errors.ConfirmationCode.message}</p>}
                <input className='submit' type="submit"/>
            </form>
        </section>
    }
}

export default ConfirmSignUp;
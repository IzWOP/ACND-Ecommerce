import React, { useEffect } from 'react';
import {Auth} from 'aws-amplify';
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
    // set the email as state then use it for the confirmation.
    // async function confirmSignUp() {
    //     try { //fix
    //         await Auth.confirmSignUp(username, formData.ConfirmationCode);
    //     } catch (error) {
    //         console.log('error confirming sign up', error);
    //     }
    // }
    const onSubmit = (formData) => {
        //confirm where the username is coming from to send that shii to the server. 
        console.log(formData, 'confirmation code');
    }
    useEffect(()=>{

    })
  

//needs to check to see if state contains the username if not then provide one or the other
    if (props !== null || props !== undefined || props !== '') {
        // action to replace user email to another email. replaces prefilled in with
        // ability for user to update form by replacing username from state in h3 to input
        const changeUsername = (e) => {
            e.preventDefault()
            let firstChild = document
                .querySelectorAll('h3')
                .[1]
            let replacement = document.createElement("input");
            replacement.type = 'text';
            replacement.className = 'form-item';
            replacement.placeholder = "Email"
            replacement.setAttribute("name", "Username")
            let adult = firstChild.parentNode
            firstChild.remove()
            adult.prepend(replacement)
        }
//if username then the email gets inputted
        return <section className='confirm'>
            <h3>Confirmation Code</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* edit the type */}
                <h3>{props.location.state.detail}
                    <span>
                        <button onClick={changeUsername}>Edit</button>
                    </span>
                </h3>
                <input
                    className='form-item'
                    name="confirmationCode"
                    placeholder="Confirmation Code"
                    ref={register}/> {errors.ConfirmationCode && <p>{errors.ConfirmationCode.message}</p>}
                <input className='submit' type="submit"/>
            </form>
        </section>
    } else {
        //if there's no username and they have to input it themselves they get default
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
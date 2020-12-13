import React from 'react';
import { useForm } from "react-hook-form";

//style
import './index.scss';

const SignUp =(props)=>{
 const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return <section className="form-login">
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input className='form-item' name="email" placeholder="Email" ref={register}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className='form-item' name="password" placeholder="Password" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      
      <input className='submit' type="submit" />
    </form>
    </section>
}


 const Login = (props) =>{
console.log(props);
  return <section className='login'>
      <SignUp/>
  </section>
}

export default Login;
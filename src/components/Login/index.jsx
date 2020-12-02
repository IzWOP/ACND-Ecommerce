import React from 'react';
import { useForm } from "react-hook-form";

const SignUp =(props)=>{
 const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return <section>
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="email" placeholder="Email" ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="password" placeholder="Password" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      
      <input type="submit" />
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
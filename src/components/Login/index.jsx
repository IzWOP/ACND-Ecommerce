import React, {useState, useEffect} from 'react';


//components import
import SignUp from './SignUp';
// import ConfirmSignUp from './ConfirmSignUp';
import ResendConfirmation from './ResendConfirmation';
import SignIn from './SignIn';

//style
import './index.scss';







const Login = (props) => {
    const [emailState,
        setEmailState] = useState({});
    const updateUsername = (username) => {
        setEmailState({username});
    }

    useEffect(() => {
        console.log("email Updated");
    }, [emailState])

    return <section className='login'>
        <div className="container">
            <SignUp updateUsername={updateUsername}/>
            {/* <ConfirmSignUp {...emailState}/> */}
            <SignIn updateUsername={updateUsername}/>
            <ResendConfirmation {...emailState}/>
        </div>
    </section>
}

export default Login;
import React, {useState, createContext, useEffect} from 'react';
import {Auth} from 'aws-amplify';


console.log(Auth);



const initialState = {
  user: undefined,
  errors: {}
}
export const UserContext = createContext(initialState);


const UserState =(props)=>{


}


//  export const UserVerification = (props) => {
//    const userVerfication = ()=>{
// console.log('verfied');
//    }


// return (
//         <UserContext.Provider>
//           {props.children}
//         </UserContext.Provider>
//         );
//  }

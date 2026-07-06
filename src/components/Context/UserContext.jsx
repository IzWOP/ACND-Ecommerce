import React, {useState, createContext, useEffect} from 'react';
import {Auth} from 'aws-amplify';


console.log(Auth);

//YOU THOUGHT YOU WHORE
//lowkey failure ...working up to it. 

const initialState = {
  user: undefined,
  errors: {}
}
export const UserContext = createContext(initialState);


const UserState =(props)=>{


}


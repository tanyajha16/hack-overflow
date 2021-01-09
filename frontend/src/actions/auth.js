import{
    LOGIN_START,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    AUTHENTICATE_USER,
    LOG_OUT,
}from './actionTypes';
import {ApiUrls} from '../helpers/urls';
import { getFormBody, getAuthTokenFromLocalStorage } from '../helpers/utils';
export function startlogin()
{
    return{
    type:LOGIN_START,
    };
}
export function loginSuccess(name,email,id)
{
    return{
        type:LOGIN_SUCCESS,
        name:name,
        email:email,
        id:id,
    };
}
export function loginFailed()
{
    return{
        type:LOGIN_FAILED,
        
    };
}
export function login({email,password})
{
    return(dispatch)=>
    {
        dispatch(startlogin())
        {    
    const url=ApiUrls.login();
    fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: getFormBody({ email, password }),
    })
    .then((response)=>response.json())
    .then((data)=>
    {
    console.log("data",data);
    if(data.status===200)
    {
      localStorage.setItem('info', data.name);
      dispatch(loginSuccess(data.name,data.email,data.id));
      return;
    }
    dispatch(loginFailed());
});   
   }
 }
}
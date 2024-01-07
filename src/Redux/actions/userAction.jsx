import { server } from "../store";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
    toast.error("Failed")

  }
};

export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: "loadUserRequest" });
    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });
    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: "logoutRequest" });
    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: "logoutSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.message });
    toast.error("Failed")
  }
};

export const register = (formdata) => async dispatch =>{
  try{
    dispatch({type:"registerRequest"});
    const {data} = await axios.post(`${server}/signup`,
      formdata,
      {
        headers:{
          'Content-Type':"application/json",
        },
        withCredentials:true,
      }
    );

    dispatch({type : "registerSuccess" ,payload : data});
  }
  catch(err){
    dispatch({type:'registerFail' ,payload: err.response.data.message})
    toast.error("Failed")
  }
};
export const forgetPassword = (email) => async dispatch => {
  try {
    dispatch({ type: "forgetPasswordRequest" });
    const { data } = await axios.post(
      `${server}/forgetpassword`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "forgetPasswordSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "forgetPasswordFail", payload: error.response.data.message });
    toast.error("Failed")

  }
};

export const resetPassword = (password,token) => async dispatch => {
  try {
    dispatch({ type: "resetPasswordRequest" });
    const { data } = await axios.put(
      `${server}/resetpassword/${token}`,
      { password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "resetPasswordSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "resetPasswordFail", payload: error.response.data.message });
    toast.error("Failed")

  }
};

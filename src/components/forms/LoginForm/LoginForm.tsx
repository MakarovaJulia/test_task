import {useStores} from "../../../utils/use-stores-hook";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {authValidationSchema} from "../../../utils/validationSchema";

import {AuthForm} from "../AuthForm";
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {Typography} from "@mui/material";

export const LoginForm = () => {

  let navigate = useNavigate()

  const  {authStore: {login, isAuthorized, isError, error}} = useStores();


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: authValidationSchema,
    onSubmit: values => {
      login({
        email: values.email,
        password: values.password
      })
    },
  })

  useEffect(()=>{
      navigate('/main')
  },[isAuthorized])

  return (
    <div style={{
      width:"100%",
      height:"70vh",
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      marginTop: "10vh"
    }}>
      <Typography variant="h2">Авторизация</Typography>
    <AuthForm formik={formik} error={error}/>
      <div style={{display:"flex", flexDirection:"row"}}>
        <p style={{margin:0}}>Еще не зарегистрированы?</p>
        <NavLink to="/signup" style={{textDecoration:"none", margin:0}}>Зарегистрироваться</NavLink>
      </div>
    </div>
  )
}

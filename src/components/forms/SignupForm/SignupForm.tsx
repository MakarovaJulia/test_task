import {useStores} from "../../../utils/use-stores-hook";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {authValidationSchema} from "../../../utils/validationSchema";
import {AuthForm} from "../AuthForm";
import {NavLink} from "react-router-dom";
import React from "react";
import {Typography} from "@mui/material";

export const SignupForm = () => {

  let navigate = useNavigate()

  const  {authStore: {signup, isError, error}} = useStores();


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: authValidationSchema,
    onSubmit: values => {
      signup({
        email: values.email,
        password: values.password
      })
      if (!isError) {
        navigate('/')
      }
    },
  })

  return (
    <div style={{
      width:"100%",
      height:"70vh",
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      marginTop: "10vh"
    }}>
      <Typography variant="h2">Регистрация</Typography>
      <AuthForm formik={formik}/>
      <div style={{display:"flex", flexDirection:"row"}}>
        <p style={{margin:0}}>Уже есть аккаунт?</p>
        <NavLink to="/" style={{textDecoration:"none", margin:0}}>Войти</NavLink>
      </div>
    </div>
  )
}

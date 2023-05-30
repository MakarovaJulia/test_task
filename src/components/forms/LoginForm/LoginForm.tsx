import {useStores} from "../../../utils/use-stores-hook";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {authValidationSchema} from "../../../utils/validationSchema";

import {AuthForm} from "../AuthForm";
import {NavLink} from "react-router-dom";
import React from "react";

export const LoginForm = () => {

  let navigate = useNavigate()

  const  {authStore: {login, isError, error}} = useStores();


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
      if (!isError) {
        navigate('/main')
      }
    },
  })

  return (
    <div style={{
      width:"100%",
      height:"90vh",
      display:"flex",
      flexDirection:"column",
      alignItems: "center"
    }}>
    <AuthForm formik={formik} error={error}/>
      <div style={{display:"flex", flexDirection:"row"}}>
        <p style={{margin:0}}>Еще не зарегистрированы?</p>
        <NavLink to="/signup" style={{textDecoration:"none", margin:0}}>Зарегистрироваться</NavLink>
      </div>
    </div>
  )
}

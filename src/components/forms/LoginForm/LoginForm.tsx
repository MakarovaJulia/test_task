import {useStores} from "../../../utils/use-stores-hook";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {authValidationSchema} from "../../../utils/validationSchema";

import {AuthForm} from "../AuthForm";

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
    <AuthForm formik={formik} error={error}/>
  )
}

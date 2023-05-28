import {useStores} from "../../../utils/use-stores-hook";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {authValidationSchema} from "../../../utils/validationSchema";
import {AuthForm} from "../AuthForm";

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
        navigate('/main')
      }
    },
  })

  return (
    <AuthForm formik={formik}/>
  )
}

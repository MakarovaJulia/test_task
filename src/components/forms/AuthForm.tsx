import {Button, Input, Theme} from "@mui/material";


export const AuthForm = (props:any) => {

  const {formik, error} = props;

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id='email'
        type='email'
        placeholder='Email'
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <Input
        id='password'
        type='password'
        placeholder='Пароль'
        {...formik.getFieldProps('password')}
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      {error? <div>{error.error}</div>:<></>}
      <Button
        type='submit'
        disabled={false}>Войти</Button>
    </form>
  )
}
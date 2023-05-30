import {Button, Input, Theme} from "@mui/material";
import {MainButton} from "../MUI/Button/MainButton";


export const AuthForm = (props:any) => {

  const {formik, error} = props;

  return (
      <form onSubmit={formik.handleSubmit}
            style={{
              width: "40vh",
              display:"flex",
              flexDirection:"column",
              gap: "20px",
              margin: "auto",
              padding:"10px",
              border: "1px solid lightgray",
              borderRadius:"3px",
            }}>
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
        <MainButton
          type='submit'
          disabled={false}
        >Войти</MainButton>
      </form>
  )
}
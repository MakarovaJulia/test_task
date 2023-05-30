import {useFormik} from "formik";
import {useStores} from "../../../utils/use-stores-hook";
import {Box, Button, Input} from "@mui/material";
import {userValidationSchema} from "../../../utils/validationSchema";
import React, {useEffect} from "react";
import {MainButton} from "../../MUI/Button/MainButton";


export const UserForm = (props:any) => {

  const {action} = props

  const {
    usersStore: { addUser, updateUser, isError },
  } = useStores();

  const getData = async (obj:any) => {
    if (action == 'add'){
      return await addUser(obj);
    } else if (action == 'update'){
      return await updateUser(obj);
    }
  }

  const main = async (obj:any) => {
    try{
      const result = await getData(obj);
      return result;
    }catch(err){
      console.error(err);
    }
  }


  const formik = useFormik({
    initialValues: {
      name: "",
      job: "",
    },
    validationSchema: userValidationSchema,
    onSubmit: (values) => {
      main({
          name: values.name,
          job: values.job,
        }).then(res => {
        localStorage.setItem('createdUser', JSON.stringify(res))
      });
    },
  });

  return (
      <form onSubmit={formik.handleSubmit} style={{display:"flex", flexDirection: "column", gap:"10px"}}>
          <Input
            id="name"
            type="text"
            placeholder="Имя"
            {...formik.getFieldProps("name")}
          />
        {formik.touched.name && formik.errors.name ? (
          <div style={{color: "#f50057"}}>{formik.errors.name}</div>
        ) : null}
          <Input
            id="job"
            type="text"
            placeholder="Должность"
            {...formik.getFieldProps("job")}
          />
        {formik.touched.job && formik.errors.job ? (
          <div style={{color: "#f50057"}}>{formik.errors.job}</div>
        ) : null}
        <MainButton title="Добавить" type="submit" disabled={false}>
          {action == 'add'? 'Добавить': 'Изменить'}
        </MainButton>
      </form>
  );
};

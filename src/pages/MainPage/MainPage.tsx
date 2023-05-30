import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {useStores} from "../../utils/use-stores-hook";
import {Box, Button, Theme} from "@mui/material";
import {UsersTable} from "../../components/UsersTable";
import {MainButton} from "../../components/MUI/Button/MainButton";


export const MainPage = observer(() => {

  const  {authStore: {logout}} = useStores();

  return (
    <>
      <Box>
        <MainButton disabled={false} onClick={()=>console.log(localStorage.getItem("user"))}>Есть юзер?</MainButton>
      </Box>
      <Box>
        <MainButton disabled={false} onClick={()=>logout()}>Выйти</MainButton>
      </Box>
      <UsersTable/>
    </>
  )
});
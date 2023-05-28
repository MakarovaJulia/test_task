import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {useStores} from "../../utils/use-stores-hook";
import {Box, Button, Theme} from "@mui/material";
import {UsersTable} from "../../components/UsersTable";


export const MainPage = observer(() => {

  const  {authStore: {logout}} = useStores();

  return (
    <>
      <Box>
        <Button disabled={false} onClick={()=>console.log(localStorage.getItem("user"))}>Есть юзер?</Button>
      </Box>
      <Box>
        <Button disabled={false} onClick={()=>logout()}>Выйти</Button>
      </Box>
      <UsersTable/>
    </>
  )
});
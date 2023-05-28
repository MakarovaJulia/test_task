import {observer} from "mobx-react";
import React from "react";
import {useStores} from "../../utils/use-stores-hook";
import {Box, Button, Theme} from "@mui/material";


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
    </>
  )
});
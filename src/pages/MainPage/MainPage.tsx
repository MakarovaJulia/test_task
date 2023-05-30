import {observer} from "mobx-react";
import React, {useEffect, useState} from "react";
import {useStores} from "../../utils/use-stores-hook";
import {Box, Button, Theme, Typography} from "@mui/material";
import {UsersTable} from "../../components/UsersTable";
import {MainButton} from "../../components/MUI/Button/MainButton";
import {useNavigate} from "react-router";


export const MainPage = observer(() => {

  let navigate = useNavigate();
  const  {authStore: {logout, isAuthorized}} = useStores();
  const [user, setUser] = useState<any>(null)

  const handleLogout = ()=>{
    logout()
    navigate("/signup")
  }

  return (
    <>
      <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", marginBottom: "20px"}}>
        <Typography variant="h3">Вы авторизованы</Typography>
        <MainButton disabled={false} onClick={()=>logout()}>Выйти</MainButton>
      </Box>
      <UsersTable/>
    </>
  )
});
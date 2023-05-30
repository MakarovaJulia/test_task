import React, {useEffect, useState} from "react";
import { observer } from "mobx-react";
import {Box, Button, Theme, Typography} from "@mui/material";
import {useStores} from "../../utils/use-stores-hook";
import {UserModal} from "../../components/Modals/UsersAddModal/UsersAddModal";
import {CreatedUser} from "../../components/CreatedUser/CreatedUser";
import {MainButton} from "../../components/MUI/Button/MainButton";

export const AddUsersPage = observer(() => {

  const [user, setUser] = useState<any>(null)

  const {
    modalStore: { setCurrentModal, clearCurrentModal },
  } = useStores();

  const openModal = () => {
    clearCurrentModal();
    setCurrentModal(UserModal);
  };

  console.log(localStorage.getItem('createdUser'))

  useEffect(()=>{
    if (localStorage.getItem('createdUser')){
      setUser(localStorage.getItem('createdUser'))
  }
  }, [localStorage.getItem('createdUser')])

  useEffect(()=>{
      console.log('user', user)
  }, [localStorage.getItem('createdUser')])



  return (
    <div style={{display:"flex", flexDirection:"column", marginTop:"5vh"}}>
      <Typography variant="h3" sx={{margin:"auto"}}>Список пользователей</Typography>
      <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", marginLeft:"5vh"}}>
        <MainButton onClick={() => openModal()}>Добавить пользователя</MainButton>
        <div>
          {user ? <CreatedUser user={user}/> : <>Нет пользователей</>}
        </div>
      </div>
    </div>
  );
});

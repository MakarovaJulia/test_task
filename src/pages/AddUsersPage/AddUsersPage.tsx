import React, {useEffect, useState} from "react";
import { observer } from "mobx-react";
import {Box, Button, Theme} from "@mui/material";
import {useStores} from "../../utils/use-stores-hook";
import {UserModal} from "../../components/Modals/UsersAddModal/UsersAddModal";
import {CreatedUser} from "../../components/CreatedUser/CreatedUser";

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
    <>
      <Box>
        <Button onClick={() => openModal()}>Добавить юзера</Button>
      </Box>
      <Box>AddUsersPage</Box>
      {user ? <CreatedUser user={user}/> : <>No user</>}
    </>
  );
});

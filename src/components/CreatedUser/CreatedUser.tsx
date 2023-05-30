import React, {useEffect, useState} from "react";
import { observer } from "mobx-react";
import {Box, Button, Theme} from "@mui/material";
import {useStores} from "../../utils/use-stores-hook";
import {UserUpdateModal} from "../Modals/UserUpdateModal/UserUpdateModal";

export const CreatedUser = observer((props: any) => {

  let {user} = props

  const [userData, setUserData] = useState<any>(null)

  const  {modalStore: { setCurrentModal, clearCurrentModal },usersStore: {deleteUser}} = useStores();

  const openModal = () => {
    clearCurrentModal();
    setCurrentModal(UserUpdateModal);
  };

  const handleDeleteUser = (id:string): void => {
    deleteUser(id).then(res => user = res)
  }

  useEffect(()=>{
    setUserData(JSON.parse(user))
  }, [user])

  return (
      <div style={{padding: "10px", border:"1px solid lightgray", borderRadius:"3px"}}>
        {userData?
          <>
            <Box sx={{display:"flex", flexDirection:"column", gap:"10px"}}>
              <span>{userData.name} {userData.job} </span>
              Создан: {userData.createdAt}
            </Box>
            <Button onClick={()=> handleDeleteUser(userData.id)}>Удалить</Button>
            <Button onClick={()=> openModal()}>Изменить</Button>
          </>
          :<></>}
      </div>
  );
});
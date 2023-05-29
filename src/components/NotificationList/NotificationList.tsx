import React, {useEffect, useState} from "react";
import { observer } from "mobx-react";
import {Box, Button, Theme} from "@mui/material";
import {Notification} from "../Notification/Notification";

export const NotificationList = observer((props:any) => {

  const {notification} = props
  console.log(notification)

  const [notificationsData, setNotificationsData] = useState<any>(null)


  return (
    <>
      {notificationsData && notificationsData.map((data: any) => (
        <Notification notificationData={data}></Notification>
      ))}
    </>
  );
});
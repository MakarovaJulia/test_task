import React, {useEffect, useState} from "react";
import { observer } from "mobx-react";
import {Box, Button, Theme} from "@mui/material";

export const Notification = observer((props:any) => {

  const {notificationData} = props

  console.log(notificationData)

  return (
    <>
      Notification
    </>
  );
});
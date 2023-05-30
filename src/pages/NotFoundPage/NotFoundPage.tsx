import React from "react";
import { observer } from "mobx-react";
import {SignupForm} from "../../components/forms/SignupForm/SignupForm";
import {colors, Container, Typography} from "@mui/material";

export const NotFoundPage = observer(() => {

  return (
    <div style={{
      width:"100%",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Typography sx={{color: colors.teal[500], fontSize:"200px"}}>404</Typography>
      <Typography variant="h2">Страница на найдена</Typography>
    </div>
  );
});

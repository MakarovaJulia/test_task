import React from "react";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import {LoginForm} from "../../components/forms/LoginForm/LoginForm";
import {Box, Container, Theme} from "@mui/material";

export const LoginPage = observer(() => {

  return (
    <Container>
        <LoginForm />
    </Container>
  );
});

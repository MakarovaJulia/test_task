import React from "react";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import {LoginForm} from "../../components/forms/LoginForm/LoginForm";
import {Box, Theme} from "@mui/material";

export const LoginPage = observer(() => {

  return (
    <>
      <Box>
            <p>Еще не зарегистрированы?</p>
            <NavLink
              to="/signup"
            >
              Зарегистрироваться
            </NavLink>
          <LoginForm />
      </Box>
    </>
  );
});

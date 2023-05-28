import React from "react";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import {SignupForm} from "../../components/forms/SignupForm/SignupForm";
import {Box, Theme} from "@mui/material";

export const SignupPage = observer(() => {

  return (
    <>
    <Box>
            <p>Уже есть аккаунт?</p>
            <NavLink
              to="/"
            >
              Войти
            </NavLink>
          <SignupForm />
    </Box>
    </>
  );
});

import React from "react";
import { observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import {SignupForm} from "../../components/forms/SignupForm/SignupForm";
import {Container} from "@mui/material";

export const SignupPage = observer(() => {

  return (
    <Container>
      <SignupForm />
    </Container>
  );
});

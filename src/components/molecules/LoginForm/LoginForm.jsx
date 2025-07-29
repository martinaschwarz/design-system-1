import React, { useState } from "react";

import { validateEmail, validatePassword } from "../../../utils/validation";

import { StyledLogin } from "./styles";

import Heading from "../../atoms/Heading/Heading";
import TextButton from "../../atoms/TextButton/TextButton";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";

import Textfield from "../../molecules/Textfield/Textfield";
import Checkbox from "../../molecules/Checkbox/Checkbox";

const LoginForm = ({ onForgot }) => {
  const [emailVal, setEmailVal] = useState("");
  const [pwVal, setPwVal] = useState("");

  const [emailError, setEmailError] = useState(undefined);
  const [pwError, setPwError] = useState(undefined);

  const authValidation = () => {
    const emailErr = validateEmail(emailVal);
    const pwErr = validatePassword(pwVal);

    setEmailError(emailErr);
    setPwError(pwErr);
  };

  return (
    <StyledLogin>
      <Heading level={1} label="Login" />
      <Textfield
        id="email"
        type="email"
        label="Email"
        placeholder="example@mail.com"
        value={emailVal}
        onChange={(e) => {
          setEmailError(undefined);
          setEmailVal(e.target.value);
        }}
        errorMsg={emailError}
      />
      <Textfield
        id="password"
        type="password"
        label="Password"
        placeholder="••••••"
        value={pwVal}
        onChange={(e) => {
          setPwError(undefined);
          setPwVal(e.target.value);
        }}
        errorMsg={pwError}
      />
      <div id="pw-options">
        <Checkbox label="Remember me?" />
        <TextButton
          id="pw-reset"
          label="Forgot password?"
          onClick={onForgot}
          small
        />
      </div>
      <PrimaryButton id="login-btn" label="Login" onClick={authValidation} />
    </StyledLogin>
  );
};

export default LoginForm;

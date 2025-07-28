import React, { useState } from "react";

import { StyledLogin } from "./styles";

import Modal from "../../atoms/Modal/Modal";
import Heading from "../../atoms/Heading/Heading";
import Textfield from "../../molecules/Textfield/Textfield";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import TextButton from "../../atoms/TextButton/TextButton";
import Checkbox from "../../molecules/Checkbox/Checkbox";

const LoginModal = ({ ref }) => {
  const [emailVal, setEmailVal] = useState("");
  const [pwVal, setPwVal] = useState("");

  const [emailError, setEmailError] = useState(undefined);
  const [pwError, setPwError] = useState(undefined);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const authValidation = () => {
    if (emailVal === "") {
      setEmailError("Please enter your email address.");
    } else if (!emailRegex.test(emailVal)) {
      setEmailError("Please enter a valid email address.");
    }
    if (pwVal === "") {
      setPwError("Please enter your password.");
    }
  };

  return (
    <Modal ref={ref}>
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
          <TextButton id="pw-reset" label="Forgot password?" />
        </div>
        <PrimaryButton id="login-btn" label="Login" onClick={authValidation} />
      </StyledLogin>
    </Modal>
  );
};

export default LoginModal;

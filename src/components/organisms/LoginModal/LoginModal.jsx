import React from "react";

import { StyledLogin } from "./styles";

import Modal from "../../atoms/Modal/Modal";
import Heading from "../../atoms/Heading/Heading";
import Textfield from "../../molecules/Textfield/Textfield";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";
import TextButton from "../../atoms/TextButton/TextButton";
import Checkbox from "../../atoms/Checkbox/Checkbox";

const LoginModal = ({ ref }) => {
  return (
    <Modal ref={ref}>
      <StyledLogin>
        <Heading level={1} label="Login" />
        <Textfield
          type="email"
          id="email"
          label="Email"
          placeholder="example@mail.com"
        />
        <Textfield
          type="password"
          id="password"
          label="Password"
          placeholder="••••••"
        />
        <div id="pw-options">
          <Checkbox label="Remember me?" />
          <TextButton id="pw-reset" label="Forgot password?" />
        </div>
        <PrimaryButton id="login-btn" label="Login" />
      </StyledLogin>
    </Modal>
  );
};

export default LoginModal;

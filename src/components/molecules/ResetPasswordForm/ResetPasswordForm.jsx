import React, { useState } from "react";

import { validateEmail } from "../../../utils/validation";

import { StyledReset } from "./styles";

import Heading from "../../atoms/Heading/Heading";
import TextButton from "../../atoms/TextButton/TextButton";
import Textfield from "../Textfield/Textfield";
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";

const ResetPasswordForm = ({ onBack }) => {
  const [emailVal, setEmailVal] = useState("");
  const [emailError, setEmailError] = useState(undefined);

  const emailValidation = () => {
    const emailErr = validateEmail(emailVal);
    setEmailError(emailErr);
  };

  return (
    <StyledReset>
      <TextButton
        id="back-btn"
        label="<- Back to Login"
        onClick={onBack}
        small
      />
      <Heading level={2} label="Forgot password?" />
      <p>
        No problem, just enter your email address below and we'll send you reset
        instructions.
      </p>
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
      <PrimaryButton
        id="reset-btn"
        label="Reset password"
        onClick={emailValidation}
      />
    </StyledReset>
  );
};

export default ResetPasswordForm;

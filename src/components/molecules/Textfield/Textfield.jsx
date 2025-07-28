import React from "react";

import { InputContainer } from "./styles";

import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";

const Textfield = ({
  id,
  type,
  label,
  value,
  placeholder,
  errorMsg,
  onChange,
}) => {
  return (
    <InputContainer>
      {label && <Label id={id} text={label} />}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        error={errorMsg}
        value={value}
        filled={value !== ""}
        onChange={onChange}
      />
      {errorMsg && <ErrorMessage text={errorMsg} />}
    </InputContainer>
  );
};

export default Textfield;

import React, { useState } from "react";

import { InputContainer } from "./styles";

import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";

const Textfield = ({ id, type, label, placeholder, errorMsg }) => {
  const [value, setValue] = useState("");

  return (
    <InputContainer>
      {label && <Label id={id} text={label} />}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        error={errorMsg}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        filled={value !== ""}
      />
      {errorMsg && <ErrorMessage text={errorMsg} />}
    </InputContainer>
  );
};

export default Textfield;

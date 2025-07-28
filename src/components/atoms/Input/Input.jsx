import React from "react";

import { StyledInput } from "./styles";

const Input = ({ id, type, placeholder, error, value, onChange }) => {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      error={error}
      value={value}
      filled={value !== ""}
      onChange={onChange}
    />
  );
};

export default Input;

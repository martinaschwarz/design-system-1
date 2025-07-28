import React from "react";

import { StyledInput } from "./styles";

const Input = ({ id, placeholder, error, value, onChange }) => {
  return (
    <StyledInput
      id={id}
      placeholder={placeholder}
      error={error}
      value={value}
      filled={value !== ""}
      onChange={onChange}
    />
  );
};

export default Input;

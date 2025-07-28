import React from "react";

import { StyledInput } from "./styles";

const Input = ({ id, type, placeholder, error, value, onChange, filled }) => {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      error={error}
      value={value}
      filled={filled}
      onChange={onChange}
    />
  );
};

export default Input;

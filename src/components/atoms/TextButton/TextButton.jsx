import React from "react";

import { StyledButton } from "./styles";

const TextButton = ({ id, label }) => {
  return <StyledButton id={id}>{label}</StyledButton>;
};

export default TextButton;

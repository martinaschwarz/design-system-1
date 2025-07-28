import React from "react";

import { StyledButton } from "./styles";

const TextButton = ({ id, label, onClick }) => {
  return (
    <StyledButton id={id} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default TextButton;

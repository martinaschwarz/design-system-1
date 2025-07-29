import React from "react";

import { StyledButton } from "./styles";

const TextButton = ({ id, label, onClick, small }) => {
  return (
    <StyledButton id={id} onClick={onClick} small={small}>
      {label}
    </StyledButton>
  );
};

export default TextButton;

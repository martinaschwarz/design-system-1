import React from "react";

import { StyledButton } from "./styles";

const SecondaryButton = ({ id, label, onClick }) => {
  return (
    <StyledButton id={id} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default SecondaryButton;

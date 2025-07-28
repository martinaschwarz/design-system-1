import React from "react";

import { StyledButton } from "./styles";

const PrimaryButton = ({ id, label, onClick }) => {
  return (
    <StyledButton id={id} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default PrimaryButton;

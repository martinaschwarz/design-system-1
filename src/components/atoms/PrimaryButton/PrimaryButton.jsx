import React from "react";

import { StyledButton } from "./styles";

const PrimaryButton = ({ id, label }) => {
  return <StyledButton id={id}>{label}</StyledButton>;
};

export default PrimaryButton;

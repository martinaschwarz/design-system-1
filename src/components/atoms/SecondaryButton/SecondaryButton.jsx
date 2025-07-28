import React from "react";

import { StyledButton } from "./styles";

const SecondaryButton = ({ id, label }) => {
  return <StyledButton id={id}>{label}</StyledButton>;
};

export default SecondaryButton;

import React from "react";

import { StyledLabel } from "./styles";

const Label = ({ id, text }) => {
  return <StyledLabel htmlFor={id}>{text}</StyledLabel>;
};

export default Label;

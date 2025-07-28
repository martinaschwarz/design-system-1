import React from "react";

import { StyledMessage } from "./styles";

const ErrorMessage = ({ text }) => {
  return <StyledMessage>{text}</StyledMessage>;
};

export default ErrorMessage;

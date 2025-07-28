import React from "react";

import { StyledModal } from "./styles";

const Modal = ({ children, ref }) => {
  return <StyledModal ref={ref}>{children}</StyledModal>;
};

export default Modal;

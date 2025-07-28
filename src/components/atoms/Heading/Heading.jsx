import React from "react";

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
} from "./styles";

const Heading = ({ level, label }) => {
  switch (level) {
    case 1:
      return <StyledH1>{label}</StyledH1>;
    case 2:
      return <StyledH2>{label}</StyledH2>;
    case 3:
      return <StyledH3>{label}</StyledH3>;
    case 4:
      return <StyledH4>{label}</StyledH4>;
    case 5:
      return <StyledH5>{label}</StyledH5>;
    default:
      return <StyledH6>{label}</StyledH6>;
  }
};

export default Heading;

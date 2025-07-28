import React, { useState } from "react";

import { StyledCheckbox, CustomCheck, CustomLabel } from "./styles";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState();

  const toggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <StyledCheckbox>
      <input
        id="remember-me"
        type="checkbox"
        checked={isChecked}
        onChange={toggle}
      />
      <CustomCheck checked={isChecked} onClick={toggle}>
        {isChecked && "✔"}
      </CustomCheck>
      <CustomLabel htmlFor="remember-me" checked={isChecked}>
        {label}
      </CustomLabel>
    </StyledCheckbox>
  );
};

export default Checkbox;

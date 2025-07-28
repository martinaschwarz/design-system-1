import styled from "styled-components";

export const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  & input {
    display: none;
  }
`;

export const CustomCheck = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;
  width: 15px;
  height: 15px;
  border: 1px solid #577b67;
  background-color: ${({ checked }) => (checked ? "#577b67" : "white")};
  border-radius: 5px;
  margin-right: 7px;
`;

export const CustomLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${({ checked }) => (checked ? "#466252" : "#7e8189")};
  cursor: pointer;

  &:hover {
    color: #466252;
  }
`;

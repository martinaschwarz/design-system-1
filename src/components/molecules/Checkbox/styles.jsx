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
  border: ${({ theme }) => `1px solid ${theme.colors.primary.main}`};
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary.main : "white"};
  border-radius: 5px;
  margin-right: 7px;
`;

export const CustomLabel = styled.label`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ checked, theme }) =>
    checked ? theme.colors.primary.darken1 : theme.colors.neutral.darken1};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.darken1};
  }
`;

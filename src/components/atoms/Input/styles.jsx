import styled from "styled-components";

export const StyledInput = styled.input`
  min-width: 300px;
  height: 34px;
  border-radius: 20px;
  background: ${({ filled, theme }) =>
    filled ? "white" : theme.colors.neutral.lighten3};
  border: ${({ filled, error, theme }) => {
    if (error) return `2px solid ${theme.colors.error.main}`;
    if (filled) return `2px solid ${theme.colors.neutral.main}`;
    return `2px solid ${theme.colors.neutral.lighten3}`;
  }};
  color: ${({ filled, theme }) =>
    filled ? "black" : theme.colors.neutral.darken2};
  outline: none;
  padding-left: 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;

  &:focus {
    border: ${({ error, theme }) =>
      error
        ? `2px solid ${theme.colors.error.main}`
        : `2px solid ${theme.colors.primary.main}`};
    background: white;
  }
`;

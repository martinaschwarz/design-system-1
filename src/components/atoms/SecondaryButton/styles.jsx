import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: ${({ theme }) => `2px solid ${theme.colors.primary.main}`};
  color: ${({ theme }) => theme.colors.primary.darken1};

  &:hover {
    background: ${({ theme }) => theme.colors.primary.lighten1};
    border: ${({ theme }) => `2px solid ${theme.colors.primary.darken1}`};
    color: ${({ theme }) => theme.colors.primary.darken2};
  }
`;

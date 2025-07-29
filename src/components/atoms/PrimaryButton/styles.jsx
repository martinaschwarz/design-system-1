import styled from "styled-components";

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  color: white;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.darken1};
  }
`;

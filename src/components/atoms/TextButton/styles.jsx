import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary.darken1};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.darken2};
  }
`;

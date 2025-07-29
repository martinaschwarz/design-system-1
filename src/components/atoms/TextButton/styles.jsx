import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary.darken1};
  font-size: ${({ small }) => (small ? "12px" : "16px")};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.darken2};
  }
`;

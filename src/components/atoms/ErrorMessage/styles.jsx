import styled from "styled-components";

export const StyledMessage = styled.div`
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.error.darken1};
`;

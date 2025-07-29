import styled from "styled-components";

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral.darken1};
`;

import styled from "styled-components";

export const StyledInput = styled.input`
  min-width: 300px;
  height: 34px;
  border-radius: 20px;
  background: ${({ filled }) => (filled ? "white" : "#d8d9dd")};
  border: ${({ filled, error }) => {
    if (error) return "2px solid #F8484D";
    if (filled) return "2px solid #9EA1AB";
    return "2px solid #d8d9dd";
  }};
  color: ${({ filled }) => (filled ? "black" : "#5F6167")};
  outline: none;
  padding-left: 20px;
  font-family: "Inter";
  font-size: 14px;

  &:focus {
    border: ${({ error }) =>
      error ? "2px solid #F8484D" : "2px solid #577b67"};
    background: white;
  }
`;

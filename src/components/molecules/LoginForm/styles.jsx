import styled from "styled-components";

export const StyledLogin = styled.div`
  display: grid;
  gap: 10px;

  & h1 {
    margin-bottom: 20px;
    text-align: center;
  }

  #pw-options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2px;
  }

  #pw-reset {
    text-align: end;
    height: auto;
  }

  #login-btn {
    margin-top: 20px;
  }
`;

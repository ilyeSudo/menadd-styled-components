import React from "react";
import styled, { css } from "styled-components";

let Button = styled.button`
  width: 100em;
  height: 10em;
  background-color: red;
  margin-bottom: 15px;
  ${({ primary }) =>
    primary &&
    css`
      border-radius: 50px;
    `}
`;

const StyledButton = ({ primary, btnText }) => {
  return <Button primary={primary}>{btnText}</Button>;
};

export default StyledButton;

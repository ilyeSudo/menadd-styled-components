import React from "react";
import styled from "styled-components";
import StyledButton from "./components/StyledButton";

let Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

let Title = styled.h1`
  font-size: 5em;
  margin-left: 50px;
  color: blue;
`;

function App() {
  return (
    <Container>
      <Title>React with Styled-Componenets</Title>
      <StyledButton btnText="Click me" />
      <StyledButton btnText="Click me" primary />
    </Container>
  );
}

export default App;

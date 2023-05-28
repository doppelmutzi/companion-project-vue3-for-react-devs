import styled, { createGlobalStyle } from "styled-components";
import Headline from "./Headline";
import Todos from "./Todos";
import MailForm from "./MailForm";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    input {
      outline: none;
    }
    button {
        cursor: pointer;
    }
    body {
        font-size: 16px;
        color: #4d4d4d;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        background-color: #f5f5f5;
    }
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 80vw;
`;

const App = () => {
  console.log("render <App />");
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Container>
          <MailForm
            onSubscribeNewsletter={(firstName) =>
              console.log(`Subscribe newsletter for ${firstName}`)
            }
          />
          <Headline />
          <Todos />
        </Container>
      </AppContainer>
    </>
  );
};

export default App;

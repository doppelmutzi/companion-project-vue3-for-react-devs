import styled from "styled-components";

const LayoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Aside = styled.aside`
  margin-bottom: 10px;
`;

const Main = styled.main`
  flex: 1;
  height: 100%;
`;

const Header = styled.header`
  @media (max-width: 767px) {
    order: 2;
  }
`;

function AppLayout({ headline, newsletter, children }) {
  console.log("render <AppLayout />");
  return (
    <LayoutContainer>
      <Aside>{newsletter}</Aside>
      <Header>{headline}</Header>
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

export default AppLayout;

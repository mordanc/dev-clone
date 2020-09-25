import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Login from "../../components/login/Login";

const Container = styled.div`
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
`;

export default function SignUp() {
  return (
    <Container>
      <Login />
      <Footer />
    </Container>
  );
}

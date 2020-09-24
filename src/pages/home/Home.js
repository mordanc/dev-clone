import React from "react";
import styled from "styled-components";

import { Sidebar, Posts, Trending } from "../.././components";

const Container = styled.div`
  display: flex;
  width: 93%;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Posts />
      <Trending />
    </Container>
  );
}

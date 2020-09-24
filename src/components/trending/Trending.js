import React from "react";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { TrendingCard } from "../trendingCard/TrendingCard";

export const TrendingColumn = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 2rem;

  @media (max-width: 960px) {
    display: none;
  }
`;

export function Trending() {
  return (
    <TrendingColumn>
      <TrendingCard
        title="#news"
        items={[
          "How to get a job in web development",
          "Re-Newsletter",
          "Build a virtual agent with Javascript",
        ]}
      />
      <TrendingCard
        title="#help"
        items={[
          "Web development",
          "I need some help here",
          "Trouble with Stack Overflow",
        ]}
      />
      <TrendingCard
        title="#discuss"
        items={[
          "What's the best react framework to use",
          "How do you develop web stuff?",
          "What do you think is the best thing",
        ]}
      />
    </TrendingColumn>
  );
}

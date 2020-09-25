import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  bottom: 0;
  background-color: #d2d6da;
  height: 100%;
`;

const SignUpFooter = styled.div`
  width: 50%;
  margin: 3rem auto;

  display: flex;
`;

const CategoryItemList = styled.div`
  width: 25%;
`;

export const CategoryItem = styled.div`
  width: 100%;
  padding: 7px;
  margin: 3px 0;
  border-radius: 5px;
  font-size: 1.1rem;

  cursor: pointer;

  :hover {
    background-color: rgb(0, 0, 0, 0.035);
    color: #4150f5;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <SignUpFooter>
        <CategoryItemList>
          <CategoryItem>Home</CategoryItem>
          <CategoryItem>Listings</CategoryItem>
          <CategoryItem>Podcasts</CategoryItem>
          <CategoryItem>Videos</CategoryItem>
          <CategoryItem>Tags</CategoryItem>
          <CategoryItem>
            <b>Sign In/Sign Up</b>
          </CategoryItem>
        </CategoryItemList>
        <CategoryItemList>
          <CategoryItem>Code of Conduct</CategoryItem>
          <CategoryItem>FAQ</CategoryItem>
          <CategoryItem>About</CategoryItem>
          <CategoryItem>Privacy Policy</CategoryItem>
          <CategoryItem>Terms of Use</CategoryItem>
          <CategoryItem>Contact</CategoryItem>
        </CategoryItemList>
      </SignUpFooter>
    </FooterContainer>
  );
}

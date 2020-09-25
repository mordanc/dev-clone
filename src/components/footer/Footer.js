import React from "react";
import {
  FooterContainer,
  SignUpFooter,
  CategoryItem,
  CategoryItemList,
} from "./styles";

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

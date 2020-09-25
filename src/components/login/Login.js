import React from "react";
import styled from "styled-components";

import {
  LoginContainer,
  GithubSignInButton,
  GitHubIcon,
  MoreOptionsText,
  TwitterIcon,
} from "./styles";

export default function Login() {
  return (
    <LoginContainer>
      <h3>Welcome to the community!</h3>
      <p>We're home to however many people</p>
      <GithubSignInButton>
        {GitHubIcon} &nbsp; Continue with Github
      </GithubSignInButton>
      <GithubSignInButton primary>
        {TwitterIcon} &nbsp; Continue with Twitter
      </GithubSignInButton>
      <MoreOptionsText>Other ways to sign in</MoreOptionsText>
    </LoginContainer>
  );
}

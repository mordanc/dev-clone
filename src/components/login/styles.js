import React from "react";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 50%;
  margin: 0 auto 5rem auto;
  background-color: white;
  padding: 30px;
  border-radius: 5px;
`;

export const GithubSignInButton = styled.span`
  background-color: ${(props) =>
    props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  color: white;
  padding: 10px 0px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 0.5rem;

  cursor: pointer;

  :hover {
    background-color: ${(props) => (props.primary ? "#0096f2" : "black")};
  }
`;

export const GitHubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    role="img"
    fill="white"
  >
    <title id="0">github</title>
    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"></path>
  </svg>
);

export const TwitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    role="img"
  >
    <title id="1">twitter</title>
    <path
      d="M22.162 5.656a8.383 8.383 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.211 4.211 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.395 8.395 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.495 8.495 0 002.087-2.165l-.001-.001z"
      fill="white"
    ></path>
  </svg>
);

export const MoreOptionsText = styled.div`
  color: grey;

  cursor: pointer;

  :hover {
    color: #1da1f2;
  }
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

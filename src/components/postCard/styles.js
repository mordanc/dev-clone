import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid black; */
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.1);

  margin-bottom: 0.5rem;
  padding: 1rem;
  display: flex;
  min-width: 400px;
`;

export const UserIconColumn = styled.div`
  width: 5%;
  background-color: white;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const UserIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
`;

export const TagContainer = styled.div`
  display: flex;
`;

export const PostCategoryTag = styled.div`
  font-size: 0.875rem;
  color: grey;
  margin: 0 2px;
  cursor: pointer;
  padding: 3px;
  border-radius: 5px;

  :hover {
    background-color: rgb(0, 0, 0, 0.035);
  }
`;

export const PostOverviewColumn = styled.div`
  display: inline-block;
  margin-left: 1rem;
  word-break: break-word;
  width: 100%;
`;

export const AuthorTag = styled.p`
  font-size: 0.8rem;
  color: black;
  height: 3%;
`;

export const PostTitle = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 1.5rem;
  font-weight: bold;

  :hover {
    text-decoration: none;
    color: blue;
  }
`;

export const PostInteractionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const SaveButton = styled.span`
  padding: 6px;
  background-color: #d2d6da;
  border-radius: 5px;
  margin-left: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: #b4bdc3;
  }
`;

export const ReactionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: transparent;
  padding: 6px;
  border-radius: 5px;

  cursor: pointer;

  :hover {
    background-color: #f6f6f6;
  }
`;

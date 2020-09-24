import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import {
  Container,
  UserIcon,
  UserIconColumn,
  PostCategoryTag,
  PostInteractionBar,
  PostOverviewColumn,
  PostTitle,
  AuthorTag,
  TagContainer,
  ReactionContainer,
  SaveButton,
  HideWhenSmall,
} from "./styles";

export function PostCard({ author, title, tags }) {
  return (
    <Container>
      <UserIconColumn>
        <UserIcon />
      </UserIconColumn>
      <PostOverviewColumn>
        <AuthorTag>{author}</AuthorTag>
        <p style={{ fontSize: "0.6rem", height: "3%" }}>Sep 22</p>
        <PostTitle href="/">{title}</PostTitle>
        <TagContainer>
          {tags.map((tag) => (
            <PostCategoryTag>
              <span style={{ color: "black" }}>#</span>
              {tag}
            </PostCategoryTag>
          ))}
        </TagContainer>
        <PostInteractionBar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ReactionContainer>
              <FavoriteBorderIcon />
              &nbsp; 15 Reactions
            </ReactionContainer>
            <ReactionContainer>
              <ChatBubbleOutlineIcon />
              &nbsp; 11 Comments
            </ReactionContainer>
          </div>
          <div>
            <span style={{ fontSize: "0.75rem" }}>4 min read</span>
            <SaveButton>Save</SaveButton>
          </div>
        </PostInteractionBar>
      </PostOverviewColumn>
    </Container>
  );
}

import React from "react";
import {
  PostsContainer,
  PostHeader,
  PostFilter,
  PostFilterGroup,
  PostList,
} from "./styles";

import { PostCard } from "../postCard/PostCard";
import { posts } from "./PostsData";

export function Posts() {
  return (
    <PostsContainer>
      <PostHeader>
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Posts</span>
        <PostFilterGroup>
          <PostFilter>Feed</PostFilter>
          <PostFilter>Day</PostFilter>
          <PostFilter>Week</PostFilter>
          <PostFilter>Month</PostFilter>
        </PostFilterGroup>
      </PostHeader>
      <PostList>
        {posts.map((post) => (
          <PostCard title={post.title} author={post.author} tags={post.tags} />
        ))}
        {/* <PostCard>Im a post</PostCard>
        <PostCard>Im a post</PostCard>
        <PostCard>Im a post</PostCard>
        <PostCard>Im a post</PostCard>
        <PostCard>Im a post</PostCard> */}
      </PostList>
    </PostsContainer>
  );
}

import styled from "styled-components";

export const PostsContainer = styled.div`
  width: 55%;

  margin-left: 5rem;

  @media (max-width: 750px) {
    width: 100%;
    margin-left: 0;
  }
  /* overflow: scroll; */
  /* max-height: 85vh; */
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`;
export const PostFilterGroup = styled.div`
  display: flex;
`;

export const PostFilter = styled.div`
  width: "50px";
  margin: 0 4px;
  padding: 6px;
  border-radius: 5px;

  cursor: pointer;

  :hover {
    color: #3b49df;
    background-color: rgba(59, 73, 223, 0.1);
  }
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
`;

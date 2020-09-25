import styled from "styled-components";

export const FooterContainer = styled.div`
  bottom: 0;
  background-color: #d2d6da;
  height: 100%;
`;

export const SignUpFooter = styled.div`
  width: 50%;
  margin: 3rem auto;

  display: flex;
`;

export const CategoryItemList = styled.div`
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

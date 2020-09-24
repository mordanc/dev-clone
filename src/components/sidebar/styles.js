import styled from "styled-components";

export const CategoriesList = styled.div`
  display: block;
  list-style-type: none;
  width: 10rem;
`;

export const SidebarColumn = styled.div`
  @media (max-width: 750px) {
    display: none;
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

export const CategoryItemSmall = styled.li`
  width: 100%;
  padding: 7px;
  margin: 3px 0;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #63717d;

  cursor: pointer;

  :hover {
    background-color: rgb(0, 0, 0, 0.035);
    color: black;
  }
`;

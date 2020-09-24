import styled from "styled-components";

export const BASE_PADDING = "0.6rem";

export const Header = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  background-color: white;
`;

export const NavItem = styled.div`
  margin: 0px 2px;
  background-color: ${({ bg }) => bg && `${bg}`};
  color: ${({ color }) => (color ? `${color}` : "white")};
  border-radius: 5px;
  font-size: 1.1em;
  padding: 0.6rem;

  cursor: pointer;

  width: ${(props) => props.width && `${props.width}`};
  /* padding: ${({ padding }) => padding && `${padding}`}; */

  :hover {
    background-color: ${({ bgHover }) => bgHover && `${bgHover}`};
    color: ${({ textHover }) => textHover && `${textHover}`};
  }
`;

export const SearchBar = styled.div`
  max-width: 420px;
  flex: 1 auto;
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 3rem;

  text-align: center;
  align-items: center;
`;

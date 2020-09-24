import React from "react";
import { Header, NavItem, NavItemContainer, BASE_PADDING } from "./styles";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Header>
      <NavItemContainer>
        <Link to={`/`}>
          <NavItem width="50px" bg="black">
            DEV
          </NavItem>
        </Link>
        <input
          placeholder="Search..."
          style={{
            outline: 0,
            borderRadius: "5px",
            maxWidth: "25rem",
            padding: BASE_PADDING,
            fontSize: "1rem",
            transition: "0.25s all linear",
          }}
        />
      </NavItemContainer>
      <NavItemContainer>
        <NavItem color="#3B4ADF" bgHover="rgb(0,0,0,0.035)">
          Log in
        </NavItem>
        <Link to="/signUp">
          <NavItem
            color="black"
            bg="#3B4ADF"
            bgHover="#323ebe"
            textHover="white"
            color="white"
          >
            Create account
          </NavItem>
        </Link>
      </NavItemContainer>
    </Header>
  );
};

export default Navbar;

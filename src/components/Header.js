import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <Container>
      <a>
        <img src="./img/teslaLogoSmall.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  /* width: 100%; */
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
export default Header;

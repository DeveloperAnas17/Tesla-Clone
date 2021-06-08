import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import { selectCars } from "../features/carSlice";

function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="./img/teslaLogoSmall.svg" alt="" />
      </a>
      <Menu>
        {cars.map((car, index) => (
          <a key={index} href="#">
            {car}
          </a>
        ))}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerMenu(true)} />
      </RightMenu>

      <BurgerNav show={burgerMenu}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerMenu(false)} />
        </CloseWrapper>

        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadastar</a>
        </li>

        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
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

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
      text-transform: uppercase;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export default Header;

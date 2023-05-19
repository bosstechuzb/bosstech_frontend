import React, { useState } from "react";
import {
  OuterContainer,
  Container,
  ForLogo,
  Links,
  NavbarLink,
  RightSide,
  Right,
  Button,
  Burger,
  Menu,
  MenuContainer,
} from "./style";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { toTop } from "./../../resources/toTop";
import SelectLang from "../SelectLang";
import burger from "../../assets/icons/hamburger.png";
import close from "../../assets/icons/close.png";

function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <OuterContainer>
      <Container>
        <ForLogo
          to=""
          onClick={() => {
            toTop();
            setOpened(false);
          }}
        >
          <Logo />
        </ForLogo>
        <RightSide>
          <Links>
            <NavbarLink to="/home#direction">Direction</NavbarLink>
            <NavbarLink to="/home#services">Services</NavbarLink>
            <NavbarLink to="/home#portfolio">Portfolio</NavbarLink>
            <NavbarLink to="/home#team">Team</NavbarLink>
          </Links>
          <Right>
            <SelectLang />
            <Button to="/home#contact">Contact</Button>
          </Right>
          <Burger onClick={() => setOpened((p) => !p)}>
            <img src={opened ? close : burger} alt="open-close menu" />
          </Burger>
        </RightSide>
      </Container>
      <Menu opened={`${opened}`}>
        <MenuContainer>
          <NavbarLink onClick={() => setOpened(false)} to="/home#direction">
            Direction
          </NavbarLink>
          <NavbarLink onClick={() => setOpened(false)} to="/home#services">
            Services
          </NavbarLink>
          <NavbarLink onClick={() => setOpened(false)} to="/home#portfolio">
            Portfolio
          </NavbarLink>
          <NavbarLink onClick={() => setOpened(false)} to="/home#team">
            Team
          </NavbarLink>
          <SelectLang />
          <Button onClick={() => setOpened(false)} to="/home#contact">
            Contact
          </Button>
        </MenuContainer>
      </Menu>
    </OuterContainer>
  );
}

export default Navbar;

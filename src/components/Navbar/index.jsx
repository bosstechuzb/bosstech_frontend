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
            <NavbarLink href="#direction">Direction</NavbarLink>
            <NavbarLink href="#services">Services</NavbarLink>
            <NavbarLink href="#portfolio">Portfolio</NavbarLink>
            <NavbarLink href="#team">Team</NavbarLink>
          </Links>
          <Right>
            <SelectLang />
            <Button href="#contact">Contact</Button>
          </Right>
          <Burger onClick={() => setOpened((p) => !p)}>
            <img src={opened ? close : burger} alt="open-close menu" />
          </Burger>
        </RightSide>
      </Container>
      <Menu opened={`${opened}`}>
        <MenuContainer>
          <NavbarLink onClick={() => setOpened(false)} href="/home#direction">
            Direction
          </NavbarLink>
          <NavbarLink onClick={() => setOpened(false)} href="/home#services">
            Services
          </NavbarLink>
          <NavbarLink onClick={() => setOpened(false)} href="/home#portfolio">
            Portfolio
          </NavbarLink>
          <NavbarLink onClick={() => setOpened(false)} href="/home#team">
            Team
          </NavbarLink>
          <SelectLang />
          <Button onClick={() => setOpened(false)} href="#contact">
            Contact
          </Button>
        </MenuContainer>
      </Menu>
    </OuterContainer>
  );
}

export default Navbar;

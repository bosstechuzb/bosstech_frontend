import React from "react";
import {
  Container,
  ForLogo,
  Links,
  NavbarDiv,
  NavbarLink,
  RightSide,
  Right,
  Button
} from "./style";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { toTop } from "./../../resources/toTop";
import SelectLang from "../SelectLang";

function Navbar() {
  return (
    <NavbarDiv>
      <Container>
        <ForLogo to="" onClick={toTop}>
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
            <Button to='/home#contact'>Contact</Button>
          </Right>
        </RightSide>
      </Container>
    </NavbarDiv>
  );
}

export default Navbar;

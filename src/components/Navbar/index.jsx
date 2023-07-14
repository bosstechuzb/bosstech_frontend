import React, { useContext, useState } from "react";
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
import { toTop } from "./../../utils/toTop";
import SelectLang from "../SelectLang";
import burger from "../../assets/icons/hamburger.png";
import close from "../../assets/icons/close.png";
import { data_navbar } from "./../../utils/data";
import { LangContext } from "../../context/lang";

function Navbar() {
  const [opened, setOpened] = useState(false);
  const [language] = useContext(LangContext);

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
            {data_navbar[language]?.links.map(({ name, href }, index) => (
              <NavbarLink href={href} key={index}>
                {name}
              </NavbarLink>
            ))}
          </Links>
          <Right>
            <SelectLang />
            <Button href="#contact">{data_navbar[language]?.button}</Button>
          </Right>
          <Burger onClick={() => setOpened((p) => !p)}>
            <img src={opened ? close : burger} alt="open-close menu" />
          </Burger>
        </RightSide>
      </Container>
      <Menu opened={`${opened}`}>
        <MenuContainer>
          {data_navbar[language]?.links.map(({ name, href }, index) => (
            <NavbarLink
              onClick={() => setOpened(false)}
              href={href}
              key={index}
            >
              {name}
            </NavbarLink>
          ))}
          <SelectLang />
          <Button onClick={() => setOpened(false)} href="#contact">
            {data_navbar[language]?.button}
          </Button>
        </MenuContainer>
      </Menu>
    </OuterContainer>
  );
}

export default Navbar;

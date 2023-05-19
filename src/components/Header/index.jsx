import React from "react";
import {
  OuterContainer,
  Img,
  Container,
  RightImg,
  LeftSide,
  Logo,
  Hr,
  Text,
} from "./style";
import backgroundImg from "../../assets/images/header/background.svg";
import rightSideImg from "../../assets/images/header/right-side.svg";
import { ReactComponent as LogoImg } from "../../assets/images/header/logo.svg";

function Header() {
  return (
    <OuterContainer>
      <Img>
        <img src={backgroundImg} alt="people" />
      </Img>
      <Container>
        <LeftSide>
          <Logo>
            <LogoImg />
          </Logo>
          <Hr />
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Text>Lorem ipsum</Text>
        </LeftSide>
        <RightImg>
          <img src={rightSideImg} alt="people" />
        </RightImg>
      </Container>
    </OuterContainer>
  );
}

export default Header;

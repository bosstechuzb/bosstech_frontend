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
import { Fade } from "react-reveal";

function Header() {
  return (
    <OuterContainer>
      <Img>
        <img src={backgroundImg} alt="people" />
      </Img>
      <Container>
        <LeftSide>
          <Logo>
            <Fade bottom>
              <LogoImg />
            </Fade>
          </Logo>
          <Hr />
          <Fade bottom>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Fade>
          <Fade bottom>
            <Text>Lorem ipsum</Text>
          </Fade>
        </LeftSide>
        <RightImg>
          <Fade right>
            <img src={rightSideImg} alt="people" />
          </Fade>
        </RightImg>
      </Container>
    </OuterContainer>
  );
}

export default Header;

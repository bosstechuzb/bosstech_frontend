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
  ButtonRow,
  Button,
} from "./style";
import backgroundImg from "../../assets/images/header/background.svg";
import rightSideImg from "../../assets/images/header/right-side.svg";
import { ReactComponent as LogoImg } from "../../assets/images/header/logo.svg";
import { Fade } from "react-reveal";
import { TypeAnimation } from "react-type-animation";

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
            <Text>
              <TypeAnimation
                sequence={[
                  "IT Consulting",
                  3000,
                  "Web Development",
                  3000,
                  "Mobile Development",
                  3000,
                  "Social Media Marketing",
                  3000,
                  "UX/UI Design",
                  3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </Text>
          </Fade>
          <ButtonRow>
            <Fade bottom>
              <Button href="#contact">Contact</Button>
            </Fade>
          </ButtonRow>
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

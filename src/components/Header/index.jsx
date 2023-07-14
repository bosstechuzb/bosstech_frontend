import React, { useContext } from "react";
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
import { LangContext } from "./../../context/lang";
import { data_header } from "../../utils/data";
import English from "./animation.english";
import Russian from "./animation.russian";
import Uzbek from "./animation.uzbek";

function Header() {
  const [language] = useContext(LangContext);

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
            <p>{data_header[language]?.title}</p>
          </Fade>
          <Fade bottom>
            <Text>
              {language === "en" ? (
                <English />
              ) : language === "ru" ? (
                <Russian />
              ) : (
                <Uzbek />
              )}
            </Text>
          </Fade>
          <ButtonRow>
            <Fade bottom>
              <Button onClick={() => {}} href="#contact">
                {data_header[language]?.button}
              </Button>
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

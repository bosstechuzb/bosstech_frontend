import React, { useContext } from "react";
import {
  Bottom,
  Container,
  ForLogo,
  LinkColumn,
  Links,
  LogoRow,
  OuterContainer,
  Row,
  RowLeftSide,
} from "./style";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { toTop } from "./../../resources/toTop";
import { ReactComponent as Facebook } from "../../assets/icons/footer/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/footer/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/footer/linkedin-in.svg";
import { ReactComponent as Instagram } from "../../assets/icons/footer/instagram.svg";
import { Fade } from "react-reveal";
import { LangContext } from "./../../context/lang/index";
import { data_footer } from "../../resources/data";

function Footer() {
  const [language] = useContext(LangContext);

  return (
    <OuterContainer>
      <Container>
        <LogoRow>
          <ForLogo to="" onClick={toTop}>
            <Fade top>
              <Logo />
            </Fade>
          </ForLogo>
        </LogoRow>
        <Links>
          {data_footer[language]?.link_columns.map((item, index) => (
            <LinkColumn key={index}>
              <Fade top>
                <LinkColumn.Title>
                  <span>{item.title}</span>
                </LinkColumn.Title>
                {item.links.map(({ name, to }, index) => (
                  <LinkColumn.Link to={to} key={index}>
                    {name}
                  </LinkColumn.Link>
                ))}
              </Fade>
            </LinkColumn>
          ))}
        </Links>
        <Row>
          <RowLeftSide>
            <Fade left>
              <RowLeftSide.Link href="https://facebook.com" target="_blank">
                <Facebook />
              </RowLeftSide.Link>
              <RowLeftSide.Link href="https://twitter.com" target="_blank">
                <Twitter />
              </RowLeftSide.Link>
              <RowLeftSide.Link href="https://www.linkedin.com/company/bosstech-uz/" target="_blank">
                <Linkedin />
              </RowLeftSide.Link>
              <RowLeftSide.Link href="https://instagram.com/bosstech.io" target="_blank">
                <Instagram />
              </RowLeftSide.Link>
            </Fade>
          </RowLeftSide>
        </Row>
        <Bottom>
          <Bottom.Hr>
            <Fade top>
              <span></span>
            </Fade>
          </Bottom.Hr>
          <Fade top>
            <Bottom.Copyright>
              {data_footer[language]?.copyright}
            </Bottom.Copyright>
          </Fade>
        </Bottom>
      </Container>
    </OuterContainer>
  );
}

export default Footer;

import React from "react";
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
  RowRightSide,
} from "./style";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { toTop } from "./../../resources/toTop";
import { ReactComponent as Facebook } from "../../assets/icons/footer/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/footer/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/footer/linkedin-in.svg";
import { ReactComponent as Instagram } from "../../assets/icons/footer/instagram.svg";
import { Fade } from "react-reveal";

function Footer() {
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
          <LinkColumn>
            <Fade top>
              <LinkColumn.Title>
                <span>Useful Link</span>
              </LinkColumn.Title>
              <LinkColumn.Link to="">About Us</LinkColumn.Link>
              <LinkColumn.Link to="">About Services</LinkColumn.Link>
              <LinkColumn.Link to="">About Departments</LinkColumn.Link>
              <LinkColumn.Link to="">Services</LinkColumn.Link>
              <LinkColumn.Link to="">Contact US</LinkColumn.Link>
            </Fade>
          </LinkColumn>
          <LinkColumn>
            <Fade top>
              <LinkColumn.Title>
                <span>The Services</span>
              </LinkColumn.Title>
              <LinkColumn.Link to="">About Us</LinkColumn.Link>
              <LinkColumn.Link to="">About Services</LinkColumn.Link>
              <LinkColumn.Link to="">About Departments</LinkColumn.Link>
              <LinkColumn.Link to="">Services</LinkColumn.Link>
              <LinkColumn.Link to="">Contact US</LinkColumn.Link>
            </Fade>
          </LinkColumn>
          <LinkColumn>
            <Fade top>
              <LinkColumn.Title>
                <span>Contact Us</span>
              </LinkColumn.Title>
              <LinkColumn.Link to="">About Us</LinkColumn.Link>
              <LinkColumn.Link to="">About Services</LinkColumn.Link>
              <LinkColumn.Link to="">About Departments</LinkColumn.Link>
              <LinkColumn.Link to="">Services</LinkColumn.Link>
              <LinkColumn.Link to="">Contact US</LinkColumn.Link>
            </Fade>
          </LinkColumn>
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
              <RowLeftSide.Link href="https://linkedin.com" target="_blank">
                <Linkedin />
              </RowLeftSide.Link>
              <RowLeftSide.Link href="https://instagram.com" target="_blank">
                <Instagram />
              </RowLeftSide.Link>
            </Fade>
          </RowLeftSide>
          <RowRightSide>
            <Fade right>
              <RowRightSide.Text>Newsletter</RowRightSide.Text>
              <RowRightSide.Form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter Your email" />
                <button>Subscribe</button>
              </RowRightSide.Form>
            </Fade>
          </RowRightSide>
        </Row>
        <Bottom>
          <Bottom.Hr>
            <Fade top>
              <span></span>
            </Fade>
          </Bottom.Hr>
          <Fade top>
            <Bottom.Copyright>© 2045 All Rights Reserved</Bottom.Copyright>
          </Fade>
        </Bottom>
      </Container>
    </OuterContainer>
  );
}

export default Footer;

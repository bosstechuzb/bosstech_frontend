import React from "react";
import {
  OuterContainer,
  Box,
  Container,
  Description,
  Item,
  Items,
  Title,
} from "./style";
import it from "../../assets/icons/ourServices/it.svg";
import mobile from "../../assets/icons/ourServices/mobile.svg";
import web from "../../assets/icons/ourServices/web.svg";
import social from "../../assets/icons/ourServices/social.svg";
import design from "../../assets/icons/ourServices/design.svg";
import { Fade } from "react-reveal";

function OurServices() {
  return (
    <OuterContainer id="services">
      <Container>
        <Title>
          <Fade bottom>
            Our Services <span />
          </Fade>
        </Title>
        <Fade bottom>
          <Description>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Description>
        </Fade>
        <Items>
          <Item>
            <Box>
              <img src={it} alt="IT" />
            </Box>
            <Fade bottom>
              <h3>IT consulting</h3>
            </Fade>
            <Fade bottom>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Fade>
          </Item>
          <Item>
            <Box>
              <img src={mobile} alt="IT" />
            </Box>
            <Fade bottom>
              <h3>Mobile Development</h3>
            </Fade>
            <Fade bottom>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Fade>
          </Item>
          <Item>
            <Box>
              <img src={web} alt="IT" />
            </Box>
            <Fade bottom>
              <h3>Web Development</h3>
            </Fade>
            <Fade bottom>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Fade>
          </Item>
          <Item>
            <Box>
              <img src={social} alt="IT" />
            </Box>
            <Fade bottom>
              <h3>Social Media Marketing</h3>
            </Fade>
            <Fade bottom>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Fade>
          </Item>
          <Item>
            <Box>
              <img src={design} alt="IT" />
            </Box>
            <Fade bottom>
              <h3>UX|UI Design</h3>
            </Fade>
            <Fade bottom>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </Fade>
          </Item>
        </Items>
      </Container>
    </OuterContainer>
  );
}

export default OurServices;

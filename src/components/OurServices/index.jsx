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

function OurServices() {
  return (
    <OuterContainer>
      <Container>
        <Title>
          Our Services <span />
        </Title>
        <Description>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Description>
        <Items>
          <Item>
            <Box>
              <img src={it} alt="IT" />
            </Box>
            <h3>IT consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </Item>
          <Item>
            <Box>
              <img src={mobile} alt="IT" />
            </Box>
            <h3>IT consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </Item>
          <Item>
            <Box>
              <img src={web} alt="IT" />
            </Box>
            <h3>IT consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </Item>
          <Item>
            <Box>
              <img src={social} alt="IT" />
            </Box>
            <h3>IT consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </Item>
          <Item>
            <Box>
              <img src={design} alt="IT" />
            </Box>
            <h3>IT consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </Item>
        </Items>
      </Container>
    </OuterContainer>
  );
}

export default OurServices;

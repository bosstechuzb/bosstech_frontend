import React from "react";
import {
  Container,
  Item,
  Items,
  LeftSide,
  OuterContainer,
  RightSide,
  Text,
  Title,
} from "./style";
import img from "../../assets/images/solution/right-side.svg";
import check from "../../assets/icons/check.svg";
import { Fade } from "react-reveal";

function SeoSolution() {
  return (
    <OuterContainer id="direction">
      <Container>
        <LeftSide>
          <Fade bottom>
            <Title>The best SEO solution</Title>
          </Fade>
          <Fade bottom>
            <Text>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </Text>
          </Fade>
          <Items>
            <Item>
              <Fade right>
                <img src={check} alt="Award Winning" /> Award Winning
              </Fade>
            </Item>
            <Item>
              <Fade right>
                <img src={check} alt="24/7 Support" /> 24/7 Support
              </Fade>
            </Item>
            <Item>
              <Fade right>
                <img src={check} alt="Professional Staff" /> Professional Staff
              </Fade>
            </Item>
            <Item>
              <Fade right>
                <img src={check} alt="Fair Prices" /> Fair Prices
              </Fade>
            </Item>
          </Items>
        </LeftSide>
        <RightSide>
          <Fade right>
            <img src={img} alt="The best SEO solution" />
          </Fade>
        </RightSide>
      </Container>
    </OuterContainer>
  );
}

export default SeoSolution;

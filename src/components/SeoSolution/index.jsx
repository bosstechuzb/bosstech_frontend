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

function SeoSolution() {
  return (
    <OuterContainer>
      <Container>
        <LeftSide>
          <Title>The best SEO solution</Title>
          <Text>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod magna dolore erat amet
          </Text>
          <Items>
            <Item>
              <img src={check} alt="Award Winning" /> Award Winning
            </Item>
            <Item>
              <img src={check} alt="24/7 Support" /> 24/7 Support
            </Item>
            <Item>
              <img src={check} alt="Professional Staff" /> Professional Staff
            </Item>
            <Item>
              <img src={check} alt="Fair Prices" /> Fair Prices
            </Item>
          </Items>
        </LeftSide>
        <RightSide>
          <img src={img} alt="The best SEO solution" />
        </RightSide>
      </Container>
    </OuterContainer>
  );
}

export default SeoSolution;

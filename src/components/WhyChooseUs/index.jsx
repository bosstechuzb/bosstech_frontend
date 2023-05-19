import React from "react";
import {
  Container,
  Description,
  Item,
  ItemNumber,
  ItemRight,
  ItemText,
  Items,
  OuterContainer,
  Title,
} from "./style";
import satisfied from "../../assets/icons/whyChooseUs/satisfied.svg";
import planning from "../../assets/icons/whyChooseUs/planning.svg";
import clients from "../../assets/icons/whyChooseUs/clients.svg";
import business from "../../assets/icons/whyChooseUs/business.svg";

function WhyChooseUs() {
  return (
    <OuterContainer>
      <Container>
        <Title>Why Choose Us</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad
          minim veniam, quis
        </Description>
        <Items>
          <Item>
            <img src={satisfied} alt="SATISFIED CLIENTS" />
            <ItemRight>
              <ItemNumber>99%</ItemNumber>
              <ItemText>SATISFIED CLIENTS</ItemText>
            </ItemRight>
          </Item>
          <Item>
            <img src={planning} alt="AWESOME planing" />
            <ItemRight>
              <ItemNumber>4700+</ItemNumber>
              <ItemText>AWESOME planing</ItemText>
            </ItemRight>
          </Item>
          <Item>
            <img src={clients} alt="CLIENTS" />
            <ItemRight>
              <ItemNumber>4500+</ItemNumber>
              <ItemText>CLIENTS</ItemText>
            </ItemRight>
          </Item>
          <Item>
            <img src={business} alt="DAILY business" />
            <ItemRight>
              <ItemNumber>19000+</ItemNumber>
              <ItemText>DAILY business</ItemText>
            </ItemRight>
          </Item>
        </Items>
      </Container>
    </OuterContainer>
  );
}

export default WhyChooseUs;

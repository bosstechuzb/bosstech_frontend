import React, { useContext } from "react";
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
import { Fade } from "react-reveal";
import { LangContext } from "./../../context/lang";
import { data_why_choose_us } from "../../utils/data";

function WhyChooseUs() {
  const [language] = useContext(LangContext);

  return (
    <OuterContainer>
      <Container>
        <Fade bottom>
          <Title>{data_why_choose_us[language]?.title}</Title>
        </Fade>
        <Fade bottom>
          <Description>{data_why_choose_us[language]?.description}</Description>
        </Fade>
        <Items>
          {data_why_choose_us[language]?.items.map(
            ({ icon, number, text }, index) => (
              <Item key={index}>
                <Fade right>
                  <img src={icon} alt={text} />
                  <ItemRight>
                    <ItemNumber>{number}</ItemNumber>
                    <ItemText>{text}</ItemText>
                  </ItemRight>
                </Fade>
              </Item>
            )
          )}
        </Items>
      </Container>
    </OuterContainer>
  );
}

export default WhyChooseUs;

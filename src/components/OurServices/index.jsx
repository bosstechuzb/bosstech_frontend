import React, { useContext } from "react";
import {
  OuterContainer,
  Box,
  Container,
  Description,
  Item,
  Items,
  Title,
} from "./style";
import { Fade } from "react-reveal";
import { LangContext } from "./../../context/lang";
import { data_our_services } from "../../utils/data";

function OurServices() {
  const [language] = useContext(LangContext);

  return (
    <OuterContainer id="services">
      <Container>
        <Title>
          <Fade bottom>
            <>
              {data_our_services[language]?.title} <span />
            </>
          </Fade>
        </Title>
        <Fade bottom>
          <Description>{data_our_services[language]?.description}</Description>
        </Fade>
        <Items>
          {data_our_services[language]?.items.map(
            ({ icon, title, description }, index) => (
              <Item key={index}>
                <Box>
                  <img src={icon} alt="IT" />
                </Box>
                <Fade bottom>
                  <h3>{title}</h3>
                </Fade>
                <Fade bottom>
                  <p>{description}</p>
                </Fade>
              </Item>
            )
          )}
        </Items>
      </Container>
    </OuterContainer>
  );
}

export default OurServices;

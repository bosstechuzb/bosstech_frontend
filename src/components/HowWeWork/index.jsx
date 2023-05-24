import React, { useContext } from "react";
import { BottomPart, Container, Item, OuterContainer, TopPart } from "./style";
import { Fade } from "react-reveal";
import { LangContext } from "./../../context/lang/index";
import { data_how_we_work } from "../../resources/data";

function HowWeWork() {
  const [language] = useContext(LangContext);

  return (
    <OuterContainer>
      <TopPart>
        <Container>
          <Fade left>
            <TopPart.Title>{data_how_we_work[language]?.title}</TopPart.Title>
          </Fade>
          <Fade>
            <TopPart.Line />
          </Fade>
          <Fade>
            <TopPart.Text>
              {data_how_we_work[language]?.description}
            </TopPart.Text>
          </Fade>
        </Container>
      </TopPart>
      <BottomPart>
        <Container>
          {data_how_we_work[language]?.items.map((item, index) => (
            <Item key={index}>
              <Fade bottom>
                <Item.Number>
                  <img src={item.number} alt="number 01" />
                </Item.Number>
                <Item.Icon>
                  <img src={item.icon} alt="icon 01" />
                </Item.Icon>
                <Item.Title>{item.title}</Item.Title>
                <Item.Line />
                <Item.Text>{item.text}</Item.Text>
              </Fade>
            </Item>
          ))}
        </Container>
      </BottomPart>
    </OuterContainer>
  );
}

export default HowWeWork;

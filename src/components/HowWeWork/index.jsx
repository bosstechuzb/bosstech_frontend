import React from "react";
import { BottomPart, Container, Item, OuterContainer, TopPart } from "./style";
import number1 from "../../assets/images/howWeWork/01.svg";
import number2 from "../../assets/images/howWeWork/02.svg";
import number3 from "../../assets/images/howWeWork/03.svg";
import number4 from "../../assets/images/howWeWork/04.svg";
import icon1 from "../../assets/icons/howWeWork/01.svg";
import icon2 from "../../assets/icons/howWeWork/02.svg";
import icon3 from "../../assets/icons/howWeWork/03.svg";
import icon4 from "../../assets/icons/howWeWork/04.svg";
import { Fade } from "react-reveal";

function HowWeWork() {
  return (
    <OuterContainer>
      <TopPart>
        <Container>
          <Fade left>
            <TopPart.Title>How we work!</TopPart.Title>
          </Fade>
          <Fade>
            <TopPart.Line />
          </Fade>
          <Fade>
            <TopPart.Text>
              Lorem ipsum dolor sit amet consectetur. Egestas pellentesque et
              sem neque. Habitant nec tincidunt egestas pharetra massa nunc. Sem
              iaculis vulputate viverra nibh commodo sit. Euismod tristique
              ornare quis dolor urna magna in.
            </TopPart.Text>
          </Fade>
        </Container>
      </TopPart>
      <BottomPart>
        <Container>
          <Item>
            <Fade bottom>
              <Item.Number>
                <img src={number1} alt="number 01" />
              </Item.Number>
              <Item.Icon>
                <img src={icon1} alt="icon 01" />
              </Item.Icon>
              <Item.Title>Reach Out</Item.Title>
              <Item.Line />
              <Item.Text>
                This HTML5 template is based on Bootstrap CSS. You are free to
                customize anything.
              </Item.Text>
            </Fade>
          </Item>
          <Item>
            <Fade bottom>
              <Item.Number>
                <img src={number2} alt="number 02" />
              </Item.Number>
              <Item.Icon>
                <img src={icon2} alt="icon 02" />
              </Item.Icon>
              <Item.Title>Develop a Strategy</Item.Title>
              <Item.Line />
              <Item.Text>
                Lorem ipsum dolor sit ameter consectetur adipiscing li elit sed
                do eiusmod.
              </Item.Text>
            </Fade>
          </Item>
          <Item>
            <Fade bottom>
              <Item.Number>
                <img src={number3} alt="number 03" />
              </Item.Number>
              <Item.Icon>
                <img src={icon3} alt="icon 03" />
              </Item.Icon>
              <Item.Title>Implementation</Item.Title>
              <Item.Line />
              <Item.Text>
                If this template is useful for your website, please consider to
                support us a little.
              </Item.Text>
            </Fade>
          </Item>
          <Item>
            <Fade bottom>
              <Item.Number>
                <img src={number4} alt="number 04" />
              </Item.Number>
              <Item.Icon>
                <img src={icon4} alt="icon 04" />
              </Item.Icon>
              <Item.Title>Analyze the result</Item.Title>
              <Item.Line />
              <Item.Text>
                Below circular progress bar animation supports those CSS values
                10, 20, 30, till 100.
              </Item.Text>
            </Fade>
          </Item>
        </Container>
      </BottomPart>
    </OuterContainer>
  );
}

export default HowWeWork;

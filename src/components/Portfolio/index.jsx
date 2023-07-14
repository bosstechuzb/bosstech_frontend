import React, { useContext } from "react";
import {
  BigTitle,
  Card,
  CardImage,
  CardFooter,
  Cards,
  Container,
  LeftSide,
  LittleTitle,
  OuterContainer,
  Top,
  Visit,
} from "./style";
import { ReactComponent as Linkedin } from "../../assets/icons/portfolio/linkedin.svg";
import { ReactComponent as Arrow } from "../../assets/icons/portfolio/arrow-top-right.svg";
import { Fade } from "react-reveal";
import { LangContext } from "./../../context/lang";
import { data_our_portfolio } from "../../utils/data";

function Portfolio() {
  const [language] = useContext(LangContext);

  return (
    <OuterContainer id="portfolio">
      <Container>
        <Top>
          <LeftSide>
            <Fade bottom>
              <LittleTitle>{data_our_portfolio[language]?.title}</LittleTitle>
            </Fade>
            <Fade bottom>
              <BigTitle>{data_our_portfolio[language]?.description}</BigTitle>
            </Fade>
          </LeftSide>
          <Fade bottom>
            <Visit
              href="https://www.linkedin.com/company/bosstech-uz/"
              target="_blank"
            >
              <Linkedin /> {data_our_portfolio[language]?.button}
            </Visit>
          </Fade>
        </Top>
        <Cards>
          {data_our_portfolio[language]?.items.map((item, index) => (
            <Card key={index}>
              <CardImage url={item.image} />
              <Fade>
                <CardFooter>
                  <CardFooter.Title>{item.title}</CardFooter.Title>
                  <CardFooter.Description>
                    {item.description}
                  </CardFooter.Description>
                  <div>
                    <CardFooter.Link href={item.link} target="_blank">
                      {data_our_portfolio[language]?.button} <Arrow />
                    </CardFooter.Link>
                  </div>
                </CardFooter>
              </Fade>
            </Card>
          ))}
        </Cards>
      </Container>
    </OuterContainer>
  );
}

export default Portfolio;

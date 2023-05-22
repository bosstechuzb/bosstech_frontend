import React from "react";
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
import ahuse from "../../assets/images/portfolio/ahuse.png";
import dashboard from "../../assets/images/portfolio/dashboard.png";
import rent from "../../assets/images/portfolio/rent.png";
import { Fade } from "react-reveal";

function Portfolio() {
  return (
    <OuterContainer id="portfolio">
      <Container>
        <Top>
          <LeftSide>
            <Fade bottom>
              <LittleTitle>Our Portofolio</LittleTitle>
            </Fade>
            <Fade bottom>
              <BigTitle>Discover Our Recent Projects And Showcases</BigTitle>
            </Fade>
          </LeftSide>
          <Fade bottom>
            <Visit href="https://linkedin.com" target="_blank">
              <Linkedin /> Visit our Linkedin
            </Visit>
          </Fade>
        </Top>
        <Cards>
          <Card>
            <CardImage url={ahuse} />
            <Fade>
              <CardFooter>
                <CardFooter.Title>Ahuse</CardFooter.Title>
                <CardFooter.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </CardFooter.Description>
                <div>
                  <CardFooter.Link href="https://linkedin.com" target="_blank">
                    View in Linkedin <Arrow />
                  </CardFooter.Link>
                </div>
              </CardFooter>
            </Fade>
          </Card>
          <Card>
            <CardImage url={dashboard} />
            <Fade>
              <CardFooter>
                <CardFooter.Title>App Dashboard</CardFooter.Title>
                <CardFooter.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </CardFooter.Description>
                <div>
                  <CardFooter.Link href="https://linkedin.com" target="_blank">
                    View in Linkedin <Arrow />
                  </CardFooter.Link>
                </div>
              </CardFooter>
            </Fade>
          </Card>
          <Card>
            <CardImage url={rent} />
            <CardFooter>
              <Fade>
                <CardFooter.Title>Easy Rent</CardFooter.Title>
                <CardFooter.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </CardFooter.Description>
                <div>
                  <CardFooter.Link href="https://linkedin.com" target="_blank">
                    View in Linkedin <Arrow />
                  </CardFooter.Link>
                </div>
              </Fade>
            </CardFooter>
          </Card>
        </Cards>
      </Container>
    </OuterContainer>
  );
}

export default Portfolio;

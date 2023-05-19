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

function Portfolio() {
  return (
    <OuterContainer>
      <Container>
        <Top>
          <LeftSide>
            <LittleTitle>Our Portofolio</LittleTitle>
            <BigTitle>Discover Our Recent Projects And Showcases</BigTitle>
          </LeftSide>
          <Visit href="https://linkedin.com" target="_blank">
            <Linkedin /> Visit our Linkedin
          </Visit>
        </Top>
        <Cards>
          <Card>
            <CardImage url={ahuse} />
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
          </Card>
          <Card>
            <CardImage url={dashboard} />
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
          </Card>
          <Card>
            <CardImage url={rent} />
            <CardFooter>
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
            </CardFooter>
          </Card>
        </Cards>
      </Container>
    </OuterContainer>
  );
}

export default Portfolio;

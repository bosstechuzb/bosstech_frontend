import React, { useState } from "react";
import {
  Container,
  Description,
  OuterContainer,
  Title,
  Carousel,
  ItemContainer,
  Item,
} from "./style";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import images
import pseudo from "../../assets/images/ourTeam/pseudo.svg";
import member1 from "../../assets/images/ourTeam/member-1.png";
import member2 from "../../assets/images/ourTeam/member-2.png";
import member3 from "../../assets/images/ourTeam/member-3.png";
import member4 from "../../assets/images/ourTeam/member-4.png";
import member5 from "../../assets/images/ourTeam/member-5.png";

function OurTeam() {
  // Settings of slider
  const [settings] = useState({
    arrows: false,
    dots: true,
    infinite: true,
    lazyLoad: "progressive",
    touchThreshold: 15,
    swipe: "slick",
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <OuterContainer>
      <Container>
        <Title>
          Our Team <span />
        </Title>
        <Description>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </Description>
        <Carousel>
          <Slider {...settings}>
            <ItemContainer>
              <Item>
                <Item.ImageContainer url={pseudo}>
                  <Item.Image url={member1} />
                </Item.ImageContainer>
                <Item.Name>Yokit Den</Item.Name>
                <Item.Position>CEO</Item.Position>
                <Item.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Item.Text>
              </Item>
            </ItemContainer>
            <ItemContainer>
              <Item>
                <Item.ImageContainer url={pseudo}>
                  <Item.Image url={member2} />
                </Item.ImageContainer>
                <Item.Name>Yokit Den</Item.Name>
                <Item.Position>Web developer</Item.Position>
                <Item.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Item.Text>
              </Item>
            </ItemContainer>
            <ItemContainer>
              <Item>
                <Item.ImageContainer url={pseudo}>
                  <Item.Image url={member3} />
                </Item.ImageContainer>
                <Item.Name>Yokit Den</Item.Name>
                <Item.Position>UX|UI Designer</Item.Position>
                <Item.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Item.Text>
              </Item>
            </ItemContainer>
            <ItemContainer>
              <Item>
                <Item.ImageContainer url={pseudo}>
                  <Item.Image url={member4} />
                </Item.ImageContainer>
                <Item.Name>Yokit Den</Item.Name>
                <Item.Position>Android developer</Item.Position>
                <Item.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Item.Text>
              </Item>
            </ItemContainer>
            <ItemContainer>
              <Item>
                <Item.ImageContainer url={pseudo}>
                  <Item.Image url={member5} />
                </Item.ImageContainer>
                <Item.Name>Yokit Den</Item.Name>
                <Item.Position>Front end developer</Item.Position>
                <Item.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </Item.Text>
              </Item>
            </ItemContainer>
          </Slider>
        </Carousel>
      </Container>
    </OuterContainer>
  );
}

export default OurTeam;

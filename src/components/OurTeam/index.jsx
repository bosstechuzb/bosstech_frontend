import React, { useContext, useState } from "react";
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
import { Fade } from "react-reveal";
import { LangContext } from "./../../context/lang/index";
import { data_our_team } from "../../resources/data";

function OurTeam() {
  const [language] = useContext(LangContext);
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
    <OuterContainer id="team">
      <Container>
        <Title>
          <Fade>
            <>
              {data_our_team[language]?.title} <span />
            </>
          </Fade>
        </Title>
        <Fade>
          <Description>{data_our_team[language]?.description}</Description>
        </Fade>
        <Carousel>
          <Fade>
            <Slider {...settings}>
              {data_our_team[language]?.items.map((item, index) => (
                <ItemContainer key={index}>
                  <Item>
                    <Item.ImageContainer url={pseudo}>
                      <Item.Image url={item.image} />
                    </Item.ImageContainer>
                    <Item.Name>{item.name}</Item.Name>
                    <Item.Position>{item.position}</Item.Position>
                    {/* <Item.Text>{item.text}</Item.Text> */}
                  </Item>
                </ItemContainer>
              ))}
            </Slider>
          </Fade>
        </Carousel>
      </Container>
    </OuterContainer>
  );
}

export default OurTeam;

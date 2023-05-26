import styled from "styled-components";
import { globalContainer } from "./../../root/style";

export const OuterContainer = styled.div`
  background-color: #fff;
  padding-block: 50px 100px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 1.1;
  color: #252525;
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    width: 150px;
    height: 3px;
    background-color: #1b5bf7;
    border-radius: 2px;
  }

  @media screen and (max-width: 700px) {
    font-size: 40px;

    span {
      width: 100px;
      height: 2px;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 30px;

    span {
      width: 50px;
    }
  }
`;

export const Description = styled.p`
  max-width: 600px;
  margin-top: 26px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: #0c0c0c;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 10px;
  }
`;

export const Carousel = styled.div`
  margin-top: 75px;
  width: 100%;

  .slick-slider {
    z-index: 0;
    user-select: auto;
    -webkit-user-select: auto;
    margin-inline: -15px;

    @media screen and (max-width: 600px) {
      margin-inline: 0;
    }

    .slick-dots {
      position: absolute;
      z-index: 1;
      top: calc(100% + 30px);
      button {
        margin-left: 0;
        margin-right: 0;
        width: 8px;
        height: 8px;
        background-color: #d6d6d6;
        border-radius: 50%;
        padding: 0;
        &:before {
          content: "";
        }
      }
      li {
        margin-left: 2px;
        margin-right: 2px;
        padding: 0;
      }
      .slick-active {
        button {
          background-color: #5586ff;
        }
      }
    }

    .slick-list {
      width: 100%;
      z-index: 0;
      border-radius: 16px;
      padding: 0;
      /* background-color: #f0f6ff; */
      .slick-slide {
        padding: 0;
      }
    }
  }
`;

export const ItemContainer = styled.div`
  /* background-color: red; */
  padding-inline: 15px;
`;

export const Item = styled.div`
  width: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

Item.ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-block: 5px 0;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  `;

Item.Image = styled.div`
  aspect-ratio: 1 / 1;
  width: 200px;
  border-radius: 10px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

Item.Name = styled.h3`
  margin-top: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.1;
  color: #0c0c0c;
`;

Item.Position = styled.div`
  margin-block: 3px 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.1;
  color: #1b5bf7;
`;

Item.Text = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.15;
  color: #0c0c0c;
`;

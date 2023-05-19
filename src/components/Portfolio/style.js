import styled from "styled-components";
import { globalButton, globalContainer } from "./../../root/style";

export const OuterContainer = styled.div`
  background-color: #fff;
  padding-block: 100px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }
`;

export const LeftSide = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const LittleTitle = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.1;
  color: #5886f8;

  @media screen and (max-width: 700px) {
    font-size: 22px;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

export const BigTitle = styled.div`
  margin-top: 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 1.1;
  color: #2a2a2a;

  span {
    color: #437aff;
  }

  @media screen and (max-width: 700px) {
    font-size: 27px;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

export const Visit = styled.a`
  ${globalButton};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Cards = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: calc(100% / 3 - (40px * 2) / 3);
  max-width: 400px;
  border-radius: 8px;
  transition: 0.2s linear;

  &:hover {
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 1000px) {
    width: calc(100% / 2 - 40px / 2);
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const CardImage = styled.div`
  height: 250px;
  background-color: #e5e5e5;
  background-image: url(${({ url }) => url ?? ""});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px 8px 0 0;
`;

export const CardFooter = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 0 0 8px 8px;
`;

CardFooter.Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.1;
  color: #282938;
`;

CardFooter.Description = styled.div`
  margin-block: 10px 25px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.12;
  color: #1c1e53;
`;

CardFooter.Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.1;
  color: #000;
  border-bottom: 1.33333px solid #1b5bf7;
  padding-block: 10px;

  &:hover svg {
    transform: translate(2px, -2px);
  }

  svg {
    width: 15px;
    transition: 0.2s linear;
  }
`;

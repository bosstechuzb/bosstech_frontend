import styled from "styled-components";
import { globalContainer } from "./../../root/style";

export const OuterContainer = styled.div`
  background: linear-gradient(90deg, #1b5bf7 0%, #5c78bc 100%);
  padding-block: 50px;
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
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: #f9fcfb;
`;

export const Description = styled.p`
  margin-block: 10px 40px;
  max-width: 600px;
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #f9fcfb;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const Items = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 1000px) {
    max-width: 600px;
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
    row-gap: 30px;
  }
`;

export const Item = styled.div`
  width: calc(100% / 4 - (20px * 3) / 4);
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    width: calc(100% / 2 - 20px / 2);
    justify-content: start;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    max-width: 200px;
    justify-content: start;
  }

  img {
    user-select: none;
  }
`;

export const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemNumber = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.1;
  color: #f9fcfb;
`;

export const ItemText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.1;
  color: #f9fcfb;
`;

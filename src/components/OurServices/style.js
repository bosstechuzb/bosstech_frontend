import styled from "styled-components";
import { globalContainer } from "../../root/style";

export const OuterContainer = styled.div`
  background-color: #fff;
  min-height: 20vh;
  padding-block: 50px 100px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.1;
  color: #535353;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    width: 20px;
    height: 20px;
    background-color: #1b5bf7;
    border-radius: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 26px;
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  max-width: 600px;
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.15;
  color: #1d1d27;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const Items = styled.div`
  width: 100%;
  margin-top: 75px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Box = styled.div`
  width: 100%;
  height: 200px;
  padding: 50px;
  background-color: #f9f9f9;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s linear;

  img {
    max-width: 64px;
  }
`;

export const Item = styled.div`
  width: calc(100% / 5 - (4 * 20px) / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    padding-block: 14px 8px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.1;
    color: #1d1d27;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.15;
    color: #1d1d27;
  }

  &:hover ${Box} {
    box-shadow: 0px 4px 4px #1b5bf7;
  }

  @media screen and (max-width: 1100px) {
    width: calc(100% / 4 - (3 * 20px) / 4);
  }
  @media screen and (max-width: 900px) {
    width: calc(100% / 3 - (2 * 20px) / 3);
  }
  @media screen and (max-width: 700px) {
    width: calc(100% / 2 - 20px / 2);
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

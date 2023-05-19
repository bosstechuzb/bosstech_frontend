import styled from "styled-components";
import { globalContainer } from "./../../root/style";

export const OuterContainer = styled.div`
  background-color: #fff;
  min-height: 20vh;
  padding-block: 50px 100px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;

export const LeftSide = styled.div`
  width: calc(50% - 10px);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 1.1;
  color: #1d1d27;

  @media screen and (max-width: 900px) {
    font-size: 40px;
  }
`;

export const Text = styled.div`
  margin-block: 50px 40px;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888;

  @media screen and (max-width: 900px) {
    margin-block: 30px 20px;
    font-size: 15px;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 15px;
`;

export const Item = styled.div`
  width: calc(50% - 10px);
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #1d1d27;
`;

export const RightSide = styled.div`
  width: calc(50% - 10px);

  img {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 450px;
  }
`;

import styled from "styled-components";
import { globalContainer } from "./../../root/style";

export const OuterContainer = styled.div`
  min-height: calc(100vh - 65px);
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: end;
`;

export const Img = styled.div`
  height: 100%;
  max-width: 70%;
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (max-width: 1100px) {
    max-width: 100%;
  }
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding-right: 50px;
  min-height: 100%;
  display: flex;
  gap: 10px; // not necessary
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 1100px) {
    padding-right: 0;
    padding-block: 50px;
    flex-direction: column-reverse;
    gap: 50px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 40px;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 30px;
    color: #464359;

    @media screen and (max-width: 500px) {
      margin-top: 20px;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1100px) {
    text-align: center;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 250px;

  svg {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;

export const Hr = styled.div`
  margin-top: 30px;
  width: 350px;
  height: 3px;
  background-color: #1b5bf7;

  @media screen and (max-width: 500px) {
    margin-top: 15px;
    width: 250px;
  }
`;

export const Text = styled.div`
  margin-top: 20px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  color: #1f50eb;

  @media screen and (max-width: 500px) {
    margin-top: 15px;
    font-size: 20px;
  }
`;

export const RightImg = styled.div`
  img {
    width: 80%;

    @media screen and (max-width: 1100px) {
      width: 90%;
    }
  }
`;

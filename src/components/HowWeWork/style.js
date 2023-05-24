import styled from "styled-components";
import { globalContainer } from "./../../root/style";

export const OuterContainer = styled.div`
  background-color: #fff;
  padding-block: 100px 50px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;

export const TopPart = styled.div`
  padding-bottom: 50px;

  ${Container} {
    display: flex;
    align-items: center;
    gap: 50px;
    justify-content: space-between;

    @media screen and (max-width: 1150px) {
      gap: 20px;
    }
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

TopPart.Title = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 1.2;
  color: #1b5bf7;

  @media screen and (max-width: 1250px) {
    font-size: 40px;
  }
  @media screen and (max-width: 1150px) {
    font-size: 30px;
  }
`;

TopPart.Line = styled.div`
  width: 150px;
  height: 3px;
  background-color: #dae3ea;
  border-radius: 2px;

  @media screen and (max-width: 1150px) {
    width: 100px;
    height: 2px;
  }
`;

TopPart.Text = styled.p`
  width: 100%;
  max-width: 550px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #6d7d8b;

  @media screen and (max-width: 1150px) {
    font-size: 16px;
  }
`;

export const BottomPart = styled.div`
  margin-top: 100px;
  padding-bottom: 50px;
  background-color: rgba(27, 91, 247, 0.3);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

  ${Container} {
    display: flex;
    gap: 50px;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
      gap: 25px;
      justify-content: space-between;
    }
    @media screen and (max-width: 900px) {
      row-gap: 80px;
    }
  }
`;

export const Item = styled.div`
  margin-top: -30px;
  width: calc(100% / 4 - (50px * 3) / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 1000px) {
    width: calc(100% / 4 - (25px * 3) / 4);
  }
  @media screen and (max-width: 900px) {
    width: calc(100% / 2 - 25px / 2);
    row-gap: 15px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

Item.Number = styled.div`
  user-select: none;
  height: 60px;

  img {
    height: 100%;
  }
`;

Item.Icon = styled.div`
  margin-top: 20px;
  user-select: none;
  height: 50px;

  img {
    height: 100%;
  }
`;

Item.Title = styled.h2`
  margin-top: 20px;
  height: 50px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  color: #2a2a2a;
`;

Item.Line = styled.div`
  margin-top: 5px;
  width: 100px;
  height: 2px;
  background-color: rgba(51, 204, 197, 0.3);
  border-radius: 1px;
`;

Item.Text = styled.p`
  margin-top: 20px;
  max-width: 230px;
  text-align: center;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  color: #2a2a2a;

  @media screen and (max-width: 900px) {
    max-width: 300px;
  }
`;

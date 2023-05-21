import styled from "styled-components";
import { globalContainer } from "./../../root/style";

export const OuterContainer = styled.div`
  background-color: #fff;
  padding-block: 100px;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;

export const Box = styled.div`
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  padding: 50px 100px;
  display: flex;
  gap: 100px;

  @media screen and (max-width: 1000px) {
    gap: 50px;
    padding: 50px 30px;
  }

  @media screen and (max-width: 900px) {
    gap: 20px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 50px;
  }

  @media screen and (max-width: 500px) {
    padding: 50px 15px;
  }
`;

Box.LeftSide = styled.form`
  width: calc(60% - 50px);
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (max-width: 900px) {
    width: calc(60% - 10px);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    align-items: center;

    input,
    textarea {
      width: 100%;
    }
  }

  input,
  textarea {
    background: #fff;
    border: 1px solid #bbbbbb;
    border-radius: 25px;
    outline: none;
    padding: 15px 25px;

    &::placeholder {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      font-size: 14px;
      line-height: 1.2;
      color: #131313;
    }
    
    @media screen and (max-width: 500px) {
      border-radius: 10px;
      padding: 12px 18px;
    }
  }

  textarea {
    resize: none;

    &::-webkit-scrollbar-track {
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
    }
  }

  button {
    margin-top: 5px;
    padding: 15px 50px;
    background: #1b5bf7;
    border: none;
    border-radius: 30px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.2;
    color: #fff;
    cursor: pointer;
  }
`;

Box.RightSide = styled.div`
  width: calc(40% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;

  @media screen and (max-width: 900px) {
    width: calc(40% - 10px);
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const RightSideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
    user-select: none;
  }

  a {
    text-decoration: none;
  }

  a,
  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.15;
    text-align: center;
    color: #2124b1;
  }
`;

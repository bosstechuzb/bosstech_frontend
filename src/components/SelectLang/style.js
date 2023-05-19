import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #18191f;
  user-select: none;

  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }

  @media screen and (max-width: 990px) {
    font-size: 15px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 15px;
    font-size: 15px;
    font-weight: 600;
    padding-block: 5px;
  }
`;

export const Header = styled.div`
  position: relative;
  z-index: 12;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  transition: 0.2s linear;
  transform: rotate(${({ opened }) => (opened === "true" ? "180deg" : "0")});
`;

export const Layer = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
`;

export const Body = styled.div`
  position: absolute;
  z-index: 12;
  top: calc(100% + 10px);
  left: 0;
  min-width: 100%;
  padding-block: 10px;
  background-color: #fff;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  transition: 0.2s linear;

  ${({ opened }) =>
    opened === "true"
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 17px;
  background-color: #fff;
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: #e0e7f9;
  }

  img {
    width: 22px;
  }
`;

import styled, { css } from "styled-components";
import { globalButton, globalContainer } from "./../../root/style";
import { Link } from "react-router-dom";

export const OuterContainer = styled.div`
  background-color: #e0e7f9;
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
  padding-block: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ForLogo = styled(Link)`
  width: 147px;

  svg {
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    width: 120px;
  }

  @media screen and (max-width: 990px) {
    width: 100px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;

  @media screen and (max-width: 990px) {
    gap: 40px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  /* Mobile */
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  padding-block: 10px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #18191f;
  transition: 0.2s linear;

  &.active {
    color: #1b5bf7;
    border-bottom: 1px solid #1b5bf7;
  }

  &:hover {
    color: #1b5bf7;
  }

  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }

  @media screen and (max-width: 990px) {
    font-size: 15px;
  }

  @media screen and (max-width: 767px) {
    font-size: 15px;
    font-weight: 600;
    padding-block: 5px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media screen and (max-width: 990px) {
    gap: 30px;
  }

  /* Mobile */
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const Button = styled.a`
  ${globalButton}
`;

// --- Mobile

export const Burger = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-height: 35px;
  }

  @media screen and (min-width: 850.00000001px) {
    display: none;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100vh - 65px);
  overflow-y: auto;
  background-color: #e0e7f9;
  padding-block: 20px;
  transition: 0.1s linear;

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

export const MenuContainer = styled.div`
  ${globalContainer};
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

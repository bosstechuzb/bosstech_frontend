import styled from "styled-components";
import { globalContainer } from "./../../root/style";
import { Link } from "react-router-dom";

export const NavbarDiv = styled.div`
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
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const NavbarLink = styled(Link)`
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
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const Button = styled(Link)`
  text-decoration: none;
  padding: 10px 28px;
  border-radius: 8px;
  background-color: #1b5bf7;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

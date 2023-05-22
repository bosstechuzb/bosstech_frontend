import styled from "styled-components";
import { globalButton, globalContainer } from "./../../root/style";
import { Link } from "react-router-dom";

export const OuterContainer = styled.div`
  margin-top: 75px;
  padding-top: 275px;
  background-color: #0099ff;
  clip-path: polygon(
    100% 100%,
    0% 100%,
    0% 22.22%,
    2% 21.66%,
    4% 21.14%,
    6% 20.68%,
    8% 20.26%,
    10% 19.9%,
    12% 19.6%,
    14% 19.36%,
    16% 19.18%,
    18% 19.06%,
    20% 19.01%,
    22% 19.01%,
    24% 19.08%,
    26% 19.21%,
    28% 19.4%,
    30% 19.65%,
    32% 19.96%,
    34% 20.33%,
    36% 20.75%,
    38% 21.22%,
    40% 21.75%,
    42% 22.32%,
    44% 22.94%,
    46% 23.59%,
    48% 24.28%,
    50% 25.01%,
    52% 25.76%,
    54% 26.54%,
    56% 27.33%,
    58% 28.14%,
    60% 28.96%,
    62% 29.79%,
    64% 30.62%,
    66% 31.45%,
    68% 32.26%,
    70% 33.07%,
    72% 33.86%,
    74% 34.62%,
    76% 35.36%,
    78% 36.07%,
    80% 36.74%,
    82% 37.38%,
    84% 37.97%,
    86% 38.52%,
    88% 39.02%,
    90% 39.47%,
    92% 39.86%,
    94% 40.2%,
    96% 40.48%,
    98% 40.7%,
    100% 40.86%
  );

  @media screen and (max-width: 768px) {
    padding-top: 175px;

    clip-path: polygon(
      100% 100%,
      0% 100%,
      0% 11.4%,
      1.43% 11.41%,
      2.86% 11.43%,
      4.29% 11.47%,
      5.71% 11.53%,
      7.14% 11.6%,
      8.57% 11.68%,
      10% 11.78%,
      11.43% 11.9%,
      12.86% 12.03%,
      14.29% 12.17%,
      15.71% 12.33%,
      17.14% 12.5%,
      18.57% 12.69%,
      20% 12.89%,
      21.43% 13.1%,
      22.86% 13.33%,
      24.29% 13.56%,
      25.71% 13.81%,
      27.14% 14.07%,
      28.57% 14.34%,
      30% 14.62%,
      31.43% 14.9%,
      32.86% 15.2%,
      34.29% 15.5%,
      35.71% 15.82%,
      37.14% 16.13%,
      38.57% 16.46%,
      40% 16.79%,
      41.43% 17.12%,
      42.86% 17.46%,
      44.29% 17.81%,
      45.71% 18.15%,
      47.14% 18.5%,
      48.57% 18.85%,
      50% 19.2%,
      51.43% 19.55%,
      52.86% 19.9%,
      54.29% 20.25%,
      55.71% 20.59%,
      57.14% 20.94%,
      58.57% 21.28%,
      60% 21.61%,
      61.43% 21.94%,
      62.86% 22.27%,
      64.29% 22.58%,
      65.71% 22.9%,
      67.14% 23.2%,
      68.57% 23.5%,
      70% 23.78%,
      71.43% 24.06%,
      72.86% 24.33%,
      74.29% 24.59%,
      75.71% 24.84%,
      77.14% 25.07%,
      78.57% 25.3%,
      80% 25.51%,
      81.43% 25.71%,
      82.86% 25.9%,
      84.29% 26.07%,
      85.71% 26.23%,
      87.14% 26.37%,
      88.57% 26.5%,
      90% 26.62%,
      91.43% 26.72%,
      92.86% 26.8%,
      94.29% 26.87%,
      95.71% 26.93%,
      97.14% 26.97%,
      98.57% 26.99%,
      100% 27%
    );
  }

  @media screen and (max-width: 576px) {
    padding-top: 100px;

    clip-path: polygon(
      100% 100%,
      0% 100%,
      0% 0.02%,
      2% 0%,
      4% 0%,
      6% 0.02%,
      8% 0.05%,
      10% 0.1%,
      12% 0.17%,
      14% 0.25%,
      16% 0.34%,
      18% 0.45%,
      20% 0.57%,
      22% 0.71%,
      24% 0.86%,
      26% 1.02%,
      28% 1.19%,
      30% 1.38%,
      32% 1.57%,
      34% 1.77%,
      36% 1.99%,
      38% 2.21%,
      40% 2.44%,
      42% 2.67%,
      44% 2.91%,
      46% 3.15%,
      48% 3.4%,
      50% 3.65%,
      52% 3.9%,
      54% 4.15%,
      56% 4.4%,
      58% 4.65%,
      60% 4.9%,
      62% 5.14%,
      64% 5.38%,
      66% 5.61%,
      68% 5.84%,
      70% 6.06%,
      72% 6.27%,
      74% 6.47%,
      76% 6.67%,
      78% 6.85%,
      80% 7.02%,
      82% 7.18%,
      84% 7.32%,
      86% 7.46%,
      88% 7.58%,
      90% 7.68%,
      92% 7.77%,
      94% 7.85%,
      96% 7.91%,
      98% 7.96%,
      100% 7.98%
    );
  }
`;

export const Container = styled.div`
  ${globalContainer};
  margin-inline: auto;
`;

export const LogoRow = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

export const ForLogo = styled(Link)`
  margin-bottom: 30px;
  width: 147px;
  display: flex;
  align-items: center;

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

export const Links = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 50px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    gap: 25px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 25px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

LinkColumn.Title = styled.div`
  margin-bottom: 15px;

  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.1;
    color: #fff;
    border-bottom: 2px solid #01cab0;
    padding-block: 4px;
  }
`;

LinkColumn.Link = styled(Link)`
  text-decoration: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
`;

export const Row = styled.div`
  margin-top: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const RowLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

RowLeftSide.Link = styled.a`
  text-decoration: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40%;

    path {
      fill: #0099ff;
    }
  }
`;

export const RowRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 10px;
  }
`;

RowRightSide.Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #fff;
`;

RowRightSide.Form = styled.form`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 300px;
    max-width: 100%;
    height: 40px;
    background-color: #fff;
    outline: none;
    border: none;
    padding: 7px 15px;
    border-radius: 2px;

    &::placeholder {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #757575;
    }

    @media screen and (max-width: 350px) {
      min-width: 250px;
      width: 100%;
    }
  }

  button {
    max-width: 100%;
    height: 40px;
    ${globalButton};
    cursor: pointer;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: #f9fcfb;
  }
`;

export const Bottom = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-top: 25px;
  }
`;

Bottom.Hr = styled.div`
  display: flex;
  justify-content: center;

  span {
    width: 100%;
    max-width: 500px;
    height: 1px;
    background-color: #f9fcfb;
    border-radius: 0.5px;
  }
`;

Bottom.Copyright = styled.p`
  margin-block: 20px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.1;
  color: #f9fcfb;
  display: flex;
  justify-content: center;
  text-align: center;
`;

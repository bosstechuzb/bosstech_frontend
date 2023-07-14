import React, { useContext } from "react";
import {
  Container,
  Item,
  Items,
  LeftSide,
  OuterContainer,
  RightSide,
  Text,
  Title,
} from "./style";
import img from "../../assets/images/solution/right-side.svg";
import check from "../../assets/icons/check.svg";
import { Fade } from "react-reveal";
import { LangContext } from "./../../context/lang";
import { data_seo_solution } from "../../utils/data";

function SeoSolution() {
  const [language] = useContext(LangContext);

  return (
    <OuterContainer id="direction">
      <Container>
        <LeftSide>
          <Fade bottom>
            <Title>{data_seo_solution[language]?.title}</Title>
          </Fade>
          <Fade bottom>
            <Text>{data_seo_solution[language]?.description}</Text>
          </Fade>
          <Items>
            {data_seo_solution[language]?.items.map((item, index) => (
              <Item key={index}>
                <Fade right>
                  <img src={check} alt={item} /> {item}
                </Fade>
              </Item>
            ))}
          </Items>
        </LeftSide>
        <RightSide>
          <Fade right>
            <img src={img} alt="The best SEO solution" />
          </Fade>
        </RightSide>
      </Container>
    </OuterContainer>
  );
}

export default SeoSolution;

import React, { useContext, useState } from "react";
import { Body, Container, Header, Arrow, Layer, Row } from "./style";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import eng from "../../assets/images/flags/eng.svg";
import ru from "../../assets/images/flags/ru.svg";
import uz from "../../assets/images/flags/uz.png";
import { LangContext } from "../../context/lang";

function Select() {
  const [opened, setOpened] = useState(false);
  const [options, setOptions] = useState([
    {
      id: 0,
      img: uz,
      name: "Uzbek",
      shortName: "Uz",
      countryCode: "uz",
      selected: localStorage.getItem("lang")
        ? localStorage.getItem("lang") === "uz"
        : false,
    },
    {
      id: 1,
      img: eng,
      name: "English",
      shortName: "Eng",
      countryCode: "en",
      selected: localStorage.getItem("lang")
        ? localStorage.getItem("lang") === "en"
        : true,
    },
    {
      id: 2,
      img: ru,
      name: "Русский",
      shortName: "Рус",
      countryCode: "ru",
      selected: localStorage.getItem("lang")
        ? localStorage.getItem("lang") === "ru"
        : false,
    },
  ]);
  const [, setLanguage] = useContext(LangContext);

  const select = (id, countryCode) => {
    setOptions(
      options.map((item) => {
        if (item.id === id) return { ...item, selected: true };
        else return { ...item, selected: false };
      })
    );
    document.documentElement.lang = countryCode;
    localStorage.setItem("lang", countryCode);
    setLanguage(countryCode);
    setOpened(false);
  };

  return (
    <Container>
      <Header onClick={() => setOpened((p) => !p)}>
        {options.find(({ selected }) => selected).name}
        <Arrow opened={`${opened}`}>
          <ArrowDown />
        </Arrow>
      </Header>
      <Body opened={`${opened}`}>
        {options
          .filter(({ selected }) => !selected)
          .map(({ id, img, shortName, countryCode }) => (
            <Row onClick={() => select(id, countryCode)} key={id}>
              <img src={img} alt={id + "-icon"} />
              {shortName}
            </Row>
          ))}
      </Body>
      {opened ? <Layer onClick={() => setOpened(false)} /> : null}
    </Container>
  );
}

export default Select;

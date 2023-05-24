import React from "react";
import { TypeAnimation } from "react-type-animation";
import { data_header } from "../../resources/data";

function Uzbek() {
  return (
    <TypeAnimation
      sequence={data_header?.uz?.specialities}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
}

export default Uzbek;

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { data_header } from "../../resources/data";

function English() {
  return (
    <TypeAnimation
      sequence={data_header?.en?.specialities}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
}

export default English;

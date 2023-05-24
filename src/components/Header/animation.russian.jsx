import React from "react";
import { TypeAnimation } from "react-type-animation";
import { data_header } from "../../resources/data";

function Russian() {
  return (
    <TypeAnimation
      sequence={data_header?.ru?.specialities}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
}

export default Russian;

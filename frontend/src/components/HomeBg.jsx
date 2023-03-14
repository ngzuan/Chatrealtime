import React from "react";
import hero2 from "../image/hero/2.svg";
import hero3 from "../image/hero/3.svg";
import hero1 from "../image/hero/hero1.svg";

function HomeBg() {
  return (
    <div className=" bg-homeColor_primary h-full overflow-x-hidden absolute z-0 top-0 left-0 w-full">
      <img
        src={hero1}
        alt=""
        className=" bottom-0 top-auto absolute left-[50%] ml-[-900px]"
      />

      <img
        src={hero2}
        alt=""
        className=" sm:z-[1] sm:ml-[-80px]  sm:max-w-[880px] sm:block absolute md:bottom-0 md:ml-[-1000px] md:left-[50%]"
      />
      <img
        src={hero3}
        alt=""
        className=" absolute mr-[-1000px] bottom-0 right-[50%]"
      />
    </div>
  );
}

export default HomeBg;

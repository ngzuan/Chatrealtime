import React from "react";
import hero2 from "../image/hero/2.svg";
import hero3 from "../image/hero/3.svg";
import hero1 from "../image/hero/hero1.svg";

function HomeBg() {
  return (
    <div className="block bg-homeColor_primary h-full overflow-x-hidden absolute z-0 top-0 left-0 w-full">
      <img
        src={hero1}
        alt=""
        className=" bottom-0 top-auto absolute left-[50%] ml-[-900px]"
      />

      <img
        src={hero2}
        alt=""
        className="sm:w-[90%] sm:z-0 md:hidden sm:ml-[-60px] lg:block sm:max-w-[700px] sm:block absolute bottom-0 md:ml-[-1000px] md:left-[50%]"
      />
      <img
        src={hero3}
        alt=""
        className="md:block sm:hidden md:w-[75%] md:ml-[45%] absolute sm:max-w-[700px] lg:mr-[-1000px] bottom-0 lg:right-[50%]"
      />
    </div>
  );
}

export default HomeBg;

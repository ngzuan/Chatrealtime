import React from "react";
import section4 from "../image/section4.svg";
function Section3() {
  return (
    <div className="grid lg:grid-cols-12  px-6 lg:w-[1180px]  sm:row-auto md:grid-rows-1  md:grid-cols-8 md:px-10 sm:grid-cols-4 max-w-[1260px] lg:mx-auto py-20 gap-x-5 ">
      <div className="lg:col-start-1 my-auto sm:col-span-4 lg:col-end-8 md:col-start-1 md:col-end-5">
        <img src={section4} className="" alt="" />
      </div>
      <div className="lg:col-start-9 lg:my-6  sm:col-span-4 flex flex-col lg:col-end-13 md:col-start-5 md:col-end-9">
        <h1 className="text-back font-font_display leading-[120%] md:text-[38px] text-[24px] font-extrabold ">
          Tạo một nơi cho bạn và chỉ cho những người nhận được lời mời
        </h1>
        <span className="lg:mt-8 text-base font-font_display font-normal leading-7">
          Máy chủ Discord được sắp xếp theo các kênh chủ đề mà bạn có thể quản
          lý, chia sẻ và nói về cuộc sống hàng ngày của mình mà không làm ảnh
          hưởng đến nhóm trò chuyện.
        </span>
      </div>
    </div>
  );
}

export default Section3;

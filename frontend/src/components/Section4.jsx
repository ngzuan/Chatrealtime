import React from "react";
import { BsDownload } from "react-icons/bs";
import section5 from "../image/section5.svg";
import star from "../image/star.svg";

function Section4() {
  return (
    <section className=" bg-off_white">
      <div className="grid lg:grid-cols-12 w-full  px-6 lg:w-[1180px]  sm:row-auto md:grid-rows-1  md:grid-cols-8 md:px-10 sm:grid-cols-4 max-w-[1260px] lg:mx-auto py-20 gap-x-5 ">
        <div className=" lg:col-start-2 lg:my-6 text-center sm:col-span-4 flex flex-col lg:col-end-12 md:col-start-5 md:col-end-9">
          <h1 className="text-back font-font_display uppercase  leading-[120%] md:text-[38px] text-[24px] font-extrabold ">
            CÔNG NGHỆ ĐÁNG TIN CẬY ĐỂ GIỮ LIÊN LẠC VỚI NHAU
          </h1>
          <span className="lg:mt-6 text-base font-font_display font-lg leading-7">
            Thoại và video với độ trễ thấp giúp tạo cảm giác như đang nói chuyện
            trực diện. Vẫy tay chào khi trò chuyện video, xem bạn bè stream game
            của họ, hoặc tụ tập và vẽ cho nhau xem bằng tính năng chia sẻ màn
            hình.
          </span>
        </div>
        <div className="lg:col-start1 lg:col-end-13 w-full  my-auto sm:col-span-4 md:col-start-1 md:col-end-5">
          <img src={section5} className="w-[100%] mx-auto" alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto  px-6 lg:w-[1180px] ">
        <div className="flex mb-40 justify-center items-center w-full flex-col relative">
          <div className=" absolute top-0">
            <img src={star} alt="" />
          </div>
          <h4 className="text-back font-font_display mt-6 leading-[120%] md:text-[38px] text-[24px] font-semibold ">
            Sẵn sàng để bắt đầu cuộc phiêu lưu chưa?
          </h4>
          <button className=" items-center text-xl mt-6 mr-6 px-5 py-4 font-semibold text-white hover:opacity-95  flex md:py-4 md:px-8 bg-[#5865f2] rounded-full">
            <BsDownload /> Tải về cho Windows
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section4;

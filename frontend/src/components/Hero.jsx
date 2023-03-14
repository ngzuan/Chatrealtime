import React from "react";
import { BsDownload } from "react-icons/bs";
function Hero() {
  return (
    <main className="mb-auto grid lg:grid-cols-12 z-[1] w-full px-6 lg:w-[1180px] h-full  md:grid-cols-8 md:px-10 sm:grid-cols-4 max-w-[1260px] lg:mx-auto py-20 gap-5 ">
      <div className="lg:col-start-3  sm:col-start-1 sm:col-end-6 md:col-start-1 md:col-end-6 lg:col-end-11">
        <div className=" text-white">
          <h1 className="uppercase text-xl sm:text-3xl md:text-6xl font-font_headline text-render lg:text-center lg:font-extrabold font-extrabold leading-[100%] lg:leading-[95%] text-[56px]">
            HÃY TƯỞNG TƯỢNG MỘT NƠI…
          </h1>
          <div className=" md:text-lg text-base mt-10 lg:text-center">
            …nơi mà bạn có thể tham gia một câu lạc bộ trường học, một nhóm chơi
            game hoặc một cộng đồng nghệ thuật. Nơi mà chỉ có bạn và một số bạn
            bè dành thời gian cho nhau. Một nơi giúp bạn dễ dàng trò chuyện hàng
            ngày và gặp mặt thường xuyên hơn.
          </div>
        </div>
        <div className="md:flex-wrap  md:flex lg:justify-center sm:text-lg">
          <button className=" items-center mt-6 mr-6 px-5 py-4 font-semibold flex bg-white md:py-4 md:px-8 hover:text-blue-700 rounded-full">
            <BsDownload /> Tải về cho Windows
          </button>
          <button className=" bg-black hover:bg-gray-600 font-semibold px-5 py-4 transition-opacity text-white md:py-4 mt-6 md:px-8 rounded-full">
            {" "}
            Mở Discord trong trình duyệt
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;

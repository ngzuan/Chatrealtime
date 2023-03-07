import React from "react";
import { SiDiscord } from "react-icons/si";
import { FaUserFriends } from "react-icons/fa";
// import { Background } from "../image/background.svg";

const Channels = () => {
  return (
    <div className="flex">
      <div className=" flex-col w-[72px] h-screen bg-primaryBlack">
        <div className=" flex justify-center items-center">
          <div className="w-full border-r-1 border-gray-800 ">
            <SiDiscord className=" mx-auto my-2 relative rounded-2xl px-2 w-11 h-11 text-white bg-blue-500 " />
            <div className="w-[32px] m-auto bg-gray-300 h-0.5"></div>
          </div>
        </div>
      </div>
      <div className=" h-screen w-[calc(100%-72px)]">
        <nav className="flex h-12 w-full bg-softGray border-b-2 shadow border-gray-700">
          <div className="flex justify-center items-center w-[240px]  bg-[#1e1f22] border-b border-r border-gray-600 shadow ">
            <button className=" text-[12px] font-sans p-1 text-[#989aa2] bg-primaryBlack1 rounded">
              Tìm hoặc bắt đầu cuộc trò chuyện
            </button>
          </div>
          <div className="w-[calc(100%-240px)] shadow">
            <ui className="flex space-x-2 h-full  items-center list-none font-sans text-base text-[#e0e1e5]">
              <li className="flex border-r border-[#4e5058]">
                <FaUserFriends className=" text-2xl ml-4 text-[#82858f]" />
                <button className="mx-2">Bạn bè</button>
              </li>
              <li>
                <button>Trực tuyến</button>
              </li>
              <li>
                <button>Tất cả</button>
              </li>
              <li>
                <button>Đang chờ xử lý</button>
              </li>
              <li>
                <button>Đã chặn</button>
              </li>
              <li>
                <button>Thêm bạn</button>
              </li>
            </ui>
          </div>
        </nav>
        <main className="flex w-full h-full">
          <div className="w-[240px] border-r border-gray-700 bg-[#2B2D31]"></div>
          <div className="w-[calc(100%-240px)] bg-softGray">
            {/* <Background /> */}
          </div>
        </main>
      </div>
    </div>
  );
};
export default Channels;

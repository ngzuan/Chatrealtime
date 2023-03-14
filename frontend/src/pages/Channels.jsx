import React from "react";
import ServerIcon from "../components/ServerIcon";
import { SiDiscord } from "react-icons/si";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import Channel from "../components/Channel";
import avatar from "../image/avatar.jpg";

const Channels = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-discord_serversBg p-3 min-w-max">
          <div className=" server-default hover:bg-discord_blue">
            <SiDiscord className="text-white w-6 h-6" />
          </div>
          <hr className=" border-gray-700 border w-8 mx-auto"></hr>
          <ServerIcon image={avatar} />
          <ServerIcon image={avatar} />
          <ServerIcon image={avatar} />
          <ServerIcon image={avatar} />

          <div className=" server-default group hover:bg-discord_green">
            <AiOutlinePlus className=" text-discord_green h-7 w-7 group-hover:text-white" />
          </div>
        </div>
        <div className=" bg-discord_channelsBg flex flex-col min-w-[232px]   ">
          <h2 className=" flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-discord_severNameHoverBg">
            Nguyen Van Tuan... <BsChevronDown className=" h-4 w-4 ml-2" />
          </h2>
          <div className="flex-grow overflow-y-scroll scrollbar-hide text-discord_channelText">
            <div className=" flex items-center p-2 mb-2">
              <BsChevronDown className="w-2 mr-1" />
              <h4 className=" font-semibold">Channels</h4>
              <AiOutlinePlus className="ml-auto w-7 h-5 cursor-pointer hover:text-white" />
            </div>
            <div className=" flex flex-col space-y-2 px-2 mb-4">
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
              <Channel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Channels;

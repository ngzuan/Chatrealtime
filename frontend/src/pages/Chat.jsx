import React from "react";
import { BsTwitter } from "react-icons/bs";

import { GrSend } from "react-icons/gr";

export const Chat = () => {
  return (
    <div className="flex h-screen">
      <div className=" md:w-1/4 w-1/6 border-r-gray-600">
        <BsTwitter className="text-blue-400 text-5xl" />
      </div>
      <div className=" bg-blue-100 c md:w-3/4 max-xl:w-4/6 p-2 flex flex-col">
        <div className="flex-grow"> messages with</div>
        <div className="flex gap-2 ">
          <input
            type="text"
            placeholder="Enter message..."
            className="bg-white p-2 border flex-grow rounded"
          />
          <button className=" ">
            <GrSend className="text-4xl text-blue-700 text-center" />
          </button>
        </div>
      </div>
    </div>
  );
};

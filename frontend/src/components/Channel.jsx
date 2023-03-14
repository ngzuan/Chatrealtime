import { HiOutlineHashtag } from "react-icons/hi";

function Channel() {
  return (
    <div className=" flex items-center p-1 font-sans text-left text-base font-bold hover:rounded-md hover:bg-discord_hoverBg hover:text-discord_textHover">
      <HiOutlineHashtag className=" w-6 h-5 mr-1" />
      channel
    </div>
  );
}

export default Channel;

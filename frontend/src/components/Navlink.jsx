import React from "react";
import { Link } from "react-router-dom";
function Navlink({ path, name }) {
  return (
    <>
      <Link
        to={path}
        className=" hover:underline p-[10px] m-[10px] font-semibold"
      >
        {name}
      </Link>
    </>
  );
}

export default Navlink;

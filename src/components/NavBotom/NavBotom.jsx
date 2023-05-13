import React from "react";
const NavBotom = ({ children }) => {
  return (
    <div className="relative">
      <div className="bg-custom h-[326px] flex flex-1 items-center justify-center">
        <p className="text-center mx-auto text-5xl mt-14 font-bold top-7 absolute">{children}</p>
      </div>
        {/* <div><img className="bottom left-0" src={Vector} alt="" /></div> */}
    </div>
  );
};

export default NavBotom;

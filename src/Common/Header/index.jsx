import React, { useState } from "react";
import { BiRefresh } from "react-icons/bi"

const Header = () => {
  const [spinClass, setSpinClass] = useState('w-6 h-6 flex items-center justify-center cursor-pointer');

  // const windowReload = () => {
  //   setSpinClass("w-6 h-6 animate-spin hover:bg-slate flex items-center justify-center cursor-pointer");
  //   chrome.runtime.reload();
  //   setSpinClass("w-6 h-6 hover:bg-slate flex items-center justify-center cursor-pointer");
  // }

  return (
    <div className="w-full h-8 bg-hyper-dark-blue flex relative justify-center items-center select-none">
      <div className="text-lg text-white font-bold">HyperExtension</div>
      <div className="absolute right-2 flex gap-1">
        <div className={spinClass} >
          <BiRefresh fontSize={25} color="white" />
        </div>
        <div
          className="text-xl text-white font-bold w-6 h-6 cursor-pointer flex items-end justify-center"
          onClick={() => window.close()}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Header;

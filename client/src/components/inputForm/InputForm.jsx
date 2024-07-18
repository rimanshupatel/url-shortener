import axios from "axios";
import React, { useEffect } from "react";
const InputForm = ({ shorten, setUrl }) => {
  //   const handleChange = (e) => {
  //     console.log(e.target.value);
  //   };

  return (
    <form onSubmit={(e) => shorten(e)} method="post" className="pt-2 w-full">
      <div>
        <div className=" py-5 "></div>
        <div className="text-xl my-2 poppins tracking-[.05em]">
          <strong>paste your link here</strong>
        </div>
        <div className="flex justify-between  h-[70px] w-full gap-3 MainShadow p-1">
          <div className="flex items-center ml-4 w-full">
            <input
              type="text"
              placeholder="https://example.com"
              className="p-3 w-full text-lg bg-transparent outline-none transition delay-150"
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            type="button"
            className=" py-1 px-5 m-1 tracking-[.05em] rounded-lg bg-indigo-950 text-white font-semibold"
            onClick={shorten}
          >
            shorten
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;

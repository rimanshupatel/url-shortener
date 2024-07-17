import React from "react";

const ShortUrl = () => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center  h-[90px] w-full gap-3 MainShadow p-1">
        <div className="flex items-center ml-4 w-full">
          <input
            type="text"
            value={`https://localhost:8000/dfdkfdkf`}
            className="p-3 w-full text-lg outline-none transition delay-150 border-blue-500 ring-1 ring-blue-500 rounded-lg"
            readOnly
          />
        </div>
        <button className="h-14 py-0 px-7 m-1 tracking-[.05em] rounded-lg bg-green-500 text-white font-semibold">
          copy
        </button>
      </div>
    </div>
  );
};

export default ShortUrl;

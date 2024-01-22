import React from "react";

type props = {
  name: string;
};

const TextButton = ({ name }: props) => {
  return (
    <button className="flex h-[58px] w-[265px] bg-black text-white font-montserrat text-[20px] rounded-full justify-center items-center">
      {name}
    </button>
  );
};

export default TextButton;

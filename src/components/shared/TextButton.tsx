import React from "react";

type props = {
  name: string;
  color: string;
};

const TextButton = ({ name, color }: props) => {
  return (
    <button className={`flex h-[58px] w-[265px] bg-[${color}] text-white font-montserrat text-[20px] rounded-full justify-center items-center`}>
      {name}
    </button>
  );
};

export default TextButton;

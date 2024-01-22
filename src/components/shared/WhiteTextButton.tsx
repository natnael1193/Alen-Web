import React from "react";

type props = {
    name: string;
};

const WhiteTextButton = ({ name }: props) => {
    return (
        <button className="flex h-[58px] w-[265px] bg-white text-black font-montserrat text-[20px] border-[1px] border-black rounded-full justify-center items-center">
            {name}
        </button>
        );
};

export default WhiteTextButton;

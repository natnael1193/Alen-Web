import React from "react";
import SearchIcon from "@mui/icons-material/Search";

type props = {
  name: string;
};

const SearchIconButton = () => {
  return (
    <button className="flex justify-center items-center bg-black h-[58px] w-[58px] rounded-full">
      <SearchIcon
        style={{
          color: "white",
        }}
      />
    </button>
  );
};

const SearchWhiteIconButton = () => {
  return (
    <button className="flex justify-center items-center bg-white border-[1px] border-black h-[58px] w-[58px] rounded-full">
      <SearchIcon
        style={{
        color: "black",
        }}
      />
    </button>
    );
};

const IconButton = {
  SearchIconButton, SearchWhiteIconButton
};

export default IconButton;

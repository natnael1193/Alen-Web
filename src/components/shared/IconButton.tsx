import React from "react";
import SearchIcon from "@mui/icons-material/Search";

type props = {
  color: string;
};

const SearchIconButton = ({color}: props) => {
  console.log("color", color)
  return (
    <button className={`flex justify-center items-center bg-[${color}] h-[58px] w-[58px] rounded-full`}>
      <SearchIcon
        style={{
          color: "white",
        }}
      />
    </button>
  );
};

const IconButton = {
  SearchIconButton,
};

export default IconButton;

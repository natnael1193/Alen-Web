import React from "react";

type props = {
  name: string;
};
const Title = ({ name }: props) => {
  return (
    <div className="font-montserrat text-[36px] lg:text-[56px]">{name}</div>
  );
};

export default Title;

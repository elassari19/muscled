import { Typogrphy } from "components";
import { FlexColumn } from "layout";
import { NextPage } from "next";
import React from "react";

interface IProps {
  services: string[];
}

const CardServices: NextPage<IProps> = ({ services }) => {
  return (
    <FlexColumn className="w-[390px] mx-[20px] h-[360px] my-3 justify-between bg-red-10 p-[30px]">
      {services.map((item: string, idx: number) => {
        return idx == 0 ? (
          <Typogrphy extraBold sm key={idx}>
            {item}
          </Typogrphy>
        ) : (
          <Typogrphy key={idx} xs>
            {item}
          </Typogrphy>
        );
      })}
    </FlexColumn>
  );
};

export default CardServices;

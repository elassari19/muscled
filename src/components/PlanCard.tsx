import { NextPage } from "next";
import { Buttons, Typogrphy } from "components";
import React from "react";
import { Star, Vector1 } from "public";
import { FlexColumn, FlexRow } from "layout";

interface IProps {
  className?: string;
  stars: number;
  title: string;
  hour: number;
  quantity: number;
  monthly: string;
  inverstment: string;
  bgcolor?: string;
  opacity?: string;
}
const index: NextPage<IProps> = ({
  className,
  stars,
  title,
  hour,
  quantity,
  monthly,
  inverstment,
  bgcolor,
  opacity,
}) => {
  return (
    <FlexColumn className=" rounded-[10px] border border-black border-solid mx-[10px] ">
      <FlexColumn
        height={300}
        className={`${bgcolor} rounded-[10px] justify-around p-[40px] w-full ${className}`}
      >
        <FlexRow className="justify-center">
          {stars &&
            new Array(stars)
              .fill("")
              .map((item: string, idx: number) => (
                <Star
                  key={idx}
                  className={`${
                    stars == 1
                      ? "opacity-40"
                      : stars == 2
                      ? "opacity-70"
                      : "opacity-90"
                  } text-3xl`}
                />
              ))}
        </FlexRow>
        <Typogrphy xs bold>
          {title}
        </Typogrphy>
        <Typogrphy md bold className="text-red-700">
          {hour} hours
        </Typogrphy>
      </FlexColumn>
      <FlexColumn className="pl-[30px] py-[40px] text-start">
        <div className="pb-[40px]">
          <div className="flex items-start justify-start p-2">
            <Vector1 className="text-[20px]" />
            <Typogrphy className="pl-2 -mt-1" xs>
              ${quantity} hours quarterly
            </Typogrphy>
          </div>
          <div className="flex items-start justify-start p-2 ">
            <Vector1 className="text-[20px]" />
            <Typogrphy className="pl-2 -mt-1" xs>
              ${monthly} monthly investment
            </Typogrphy>
          </div>
          <div className="flex items-start justify-start p-2 ">
            <Vector1 className="text-[20px]" />
            <Typogrphy className="pl-2 -mt-1" xs>
              Best for websites under 250 pages
            </Typogrphy>
          </div>
        </div>
        <div className="w-full mx-[20px] h-[1px] bg-black mb-[40px]" />
        <FlexColumn className="items-center">
          <Typogrphy className="mb-[20px]" xs>
            ${inverstment} INITIAL INVESTMENT
          </Typogrphy>
          <Buttons
            title="Send Proposal"
            bgColor="bg-black"
            color="text-white"
            className="w-[226px]"
            height="h-[40px]"
          />
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  );
};

export default index;

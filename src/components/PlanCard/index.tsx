import { NextPage } from "next";
import Image from "next/image";
import { CustomButton } from "components";
import React from "react";
import { Star, Vector1 } from "public";

interface IProps {
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
    <div className=" rounded-[10px] border border-black border-solid mx-[10px] ">
      <div className={`${bgcolor} py-[40px] px-[100px] rounded-[10px]`}>
        <div className="flex justify-center">
          {new Array(stars).fill("").map((item: string, idx: number) => (
            <Image
              key={idx}
              src={Star}
              alt="star"
              className={`opacity-300*${idx}`}
            />
          ))}
        </div>
        <h2 className="mt-[20px] mb-[77px] text-[24px] font-bold">{title}</h2>
        <p className="text-[40px] text-red font-bold text-red-800">
          {hour} hours
        </p>
      </div>
      <div className="py-[40px]">
        <div className="pb-[40px]">
          <div className="flex  mt-3 items-center justify-start   ml-[40px]">
            <Image src={Vector1} alt="vector" />{" "}
            <p className="pl-2">{quantity} hours quarterly</p>
          </div>
          <div className="flex  mt-3 items-center justify-start  ml-[40px]">
            <Image src={Vector1} alt="vector" />{" "}
            <p className="pl-2">${monthly} monthly investment</p>
          </div>
          <div className="flex  mt-3 items-center justify-start  ml-[40px]">
            <Image src={Vector1} alt="vector" />{" "}
            <p className="pl-2">Best for websites under 250 pages</p>
          </div>
        </div>
        <div className="mx-[20px] h-[1px] bg-black mb-[40px]" />
        <div className="px-[40px] items-center flex flex-col text-center">
          <p className="mb-3">${inverstment} INITIAL INVESTMENT</p>
          <CustomButton
            title="Send Proposal"
            bgColor="bg-black"
            color="text-white"
            className="w-[226px]"
          />
        </div>
      </div>
    </div>
  );
};

export default index;

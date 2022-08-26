import { headerOptions } from "../../constants";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MUSCLED, Vector } from "public";
import { CustomButton } from "components";

const index: NextPage = () => {
  return (
    <div className="flex items-center justify-around py-4">
      <div className="cursor-pointer">
        <Link href={"/"}>
          <Image src={MUSCLED} alt="muscled" />
        </Link>
      </div>
      {headerOptions.map((item: string) => (
        <div
          key={item}
          className="flex-row justify-center hidden cursor-pointer place-items-center text-2xs center hover:text-red-600 md:flex "
        >
          <Link href={`/${item}`}>{item}</Link>
          <div className="pl-1">
            <Image src={Vector} alt="vector" />
          </div>
        </div>
      ))}

      <CustomButton
        title="Send Proposal"
        bgColor={"bg-black"}
        color="text-white"
        rounded="rounded-full"
      />
    </div>
  );
};

export default index;

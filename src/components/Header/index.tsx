import { headerOptions } from "../../constants";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MUSCLED, Vector } from "public";
import { Buttons } from "components";
import { FlexRow } from "layout";

const index: NextPage = () => {
  return (
    <FlexRow className="justify-between px-8 py-3">
      <div>
        <Link href={"/"}>
          <MUSCLED className="h-10 cursor-pointer text-9xl" />
        </Link>
      </div>
      {headerOptions.map((item: string) => (
        <FlexRow
          key={item}
          className="hidden cursor-pointer text-2xs hover:text-red-600 md:flex"
        >
          <Link href={`/${item}`}>{item}</Link>
          <div className="pl-1">
            <Vector fill="red" />
          </div>
        </FlexRow>
      ))}

      <Buttons
        title="Send Proposal"
        rounded="rounded-full"
        height="h-[40px]"
        width="w-[180px]"
        pointer
      />
    </FlexRow>
  );
};

export default index;

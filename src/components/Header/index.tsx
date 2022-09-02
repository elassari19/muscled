/* eslint-disable react-hooks/rules-of-hooks */
import { motion } from "framer-motion";
import { headerOptions } from "../../constants";
import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import { MUSCLED, Vector } from "public";
import { Buttons } from "components";
import { FlexColumn, FlexRow } from "layout";
import FlatList from "flatlist-react";

const index: NextPage = () => {
  const [value, setValue] = useState<number>(-1);
  const amimate = {
    opacity: 1,
    height: "auto",
    display: "absolute",
    transition: {
      duration: 0.5,
    },
  };
  const initial = {
    opacity: 0,
    height: 0,
    display: "hidden",
    transition: {
      duration: 0.5,
    },
  };
  console.log(value);

  return (
    <>
      <FlexRow className="items-center justify-between px-8 py-3">
        <div>
          <Link href={"/"}>
            <MUSCLED className="h-10 cursor-pointer text-9xl" />
          </Link>
        </div>
        {headerOptions.map((item: string, idx: number) => (
          <FlexRow
            key={idx}
            onClick={() => setValue(idx == value ? -1 : idx)}
            className={`items-center hidden cursor-pointer text-2xs hover:text-red md:flex ${
              idx == value && "text-red"
            }`}
          >
            <div>{item}</div>
            <div className="pl-1">
              <Vector
                fill="red"
                className={`${idx == value ? "rotate-150" : " -rotate-180"}`}
              />
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
      <motion.div
        className={`h-80 w-full bg-white`}
        animate={value > -1 ? amimate : initial}
      >
        <FlexRow className="pl-[250px] pr-[250px] text-black justify-between text-center">
          <FlexColumn className="w-auto">
            <FlatList
              list={["text link", "text link", "text link", "text link"]}
              renderItem={(item: string, idx: number) => (
                <div key={idx} className="p-4 hover:text-red">
                  <Link href={`${item.replace(" ", "")}`}>{item}</Link>
                </div>
              )}
            />
          </FlexColumn>

          <FlexColumn className="w-auto">
            <FlatList
              list={["text link", "text link", "text link", "text link"]}
              renderItem={(item: string, idx: number) => (
                <div key={idx} className="p-4 hover:text-red">
                  <Link href={`${item.replace(" ", "")}`}>{item}</Link>
                </div>
              )}
            />
          </FlexColumn>

          <FlexColumn className="w-auto">
            <FlatList
              list={["text link", "text link", "text link", "text link"]}
              renderItem={(item: string, idx: number) => (
                <div key={idx} className="p-4 hover:text-red">
                  <Link href={`${item.replace(" ", "")}`}>{item}</Link>
                </div>
              )}
            />
          </FlexColumn>

          <FlexColumn className="w-auto">
            <FlatList
              list={["text link", "text link", "text link", "text link"]}
              renderItem={(item: string, idx: number) => (
                <div key={idx} className="p-4 hover:text-red">
                  <Link href={`${item.replace(" ", "")}`}>{item}</Link>
                </div>
              )}
            />
          </FlexColumn>

          <FlexColumn className="w-auto">
            <FlatList
              list={["text link", "text link", "text link", "text link"]}
              renderItem={(item: string, idx: number) => (
                <div key={idx} className="p-4 hover:text-red">
                  <Link href={`${item.replace(" ", "")}`}>{item}</Link>
                </div>
              )}
            />
          </FlexColumn>
        </FlexRow>
      </motion.div>
    </>
  );
};
export default index;

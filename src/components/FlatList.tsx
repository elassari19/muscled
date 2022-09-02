import { Typogrphy } from "components";
import { FlexColumn } from "layout";
import { NextPage } from "next";
import React from "react";

interface IProps {
  items: string[];
  ExtractKey: (idx: number) => void;
  ExtractData: (item: any) => void;
}

const FlatList: NextPage<IProps> = ({ items, ExtractKey, ExtractData }) => {
  return (
    <FlexColumn>
      {items.map((item: string, idx: number) => (
        <Typogrphy
          key={idx}
          onClick={() => console.log(item)}
          sm={idx == 0}
          extraBold={idx == 0}
          className={`my-2 cursor-pointer ${
            idx != 0 && "text-gray-400 text-lg"
          }  hover:text-white`}
        >
          {item}
        </Typogrphy>
      ))}
    </FlexColumn>
  );
};

export default FlatList;

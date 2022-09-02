import { Typogrphy } from "components";
import { dataOfContent } from "constants/";
import { FlexColumn, FlexRow } from "layout";
import { NextPage } from "next";
import { DoubleArrow, TableVector, Vector } from "public";
import React from "react";

interface IProps {
  content: string[];
  height?: number;
}

const TableOfContent: NextPage<IProps> = ({ content, height }) => {
  return (
    <FlexColumn
      height={height}
      className="w-[440px] border border-blackLight rounded-md overflow-hidden"
    >
      {content.map((item: string, idx: number) =>
        idx == 0 ? (
          <FlexRow
            key={idx}
            className="justify-between px-4 bg-grayLight p-[15px] mb-3"
          >
            <FlexRow>
              <FlexRow className="px-2 mx-4 rounded-md place-items-center bg-blackLight">
                <TableVector />
              </FlexRow>
              <Typogrphy xs bold>
                {item}
              </Typogrphy>
            </FlexRow>
            <Vector />
          </FlexRow>
        ) : (
          <FlexRow
            key={idx}
            className="justify-start items-center my-3 px-[30px]"
          >
            <div>
              <DoubleArrow className="mr-4" />
            </div>
            <Typogrphy fontSize={16}>{item}</Typogrphy>
          </FlexRow>
        )
      )}
    </FlexColumn>
  );
};

export default TableOfContent;

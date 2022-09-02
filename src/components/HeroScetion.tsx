import { Typogrphy } from "components";
import { FlexColumn, FlexRow } from "layout";
import { NextPage } from "next";
import React from "react";

interface IProps {
  className?: string;
  text: {
    title?: string;
    subTitle?: string;
    bold?: string;
    boldWithMargin?: string;
    li?: { li?: string; span?: string };
    lo?: string[];
    paragaph?: string;
    content?: string;
    begTitle?: string;
  }[];
}

const Promotoin: NextPage<IProps> = ({ text, className }) => {
  return (
    <FlexColumn className={`${className}`}>
      {text?.map((item: any, idx: number) => {
        return item.title ? (
          <Typogrphy key={idx} className="mb-9" extraBold md>
            {item?.title}
          </Typogrphy>
        ) : item.begTitle ? (
          <Typogrphy key={idx} className="mb-2" extraBold>
            {item?.begTitle}
          </Typogrphy>
        ) : item?.subTitle ? (
          <Typogrphy key={idx} sm bold className="mb-9">
            {item.subTitle}
          </Typogrphy>
        ) : item?.bold ? (
          <Typogrphy key={idx} xs extraBold>
            {item.bold}
          </Typogrphy>
        ) : item?.boldWithMargin ? (
          <Typogrphy key={idx} xs extraBold className="mb-9">
            {item.boldWithMargin}
          </Typogrphy>
        ) : item?.lo ? (
          item.lo.map((item: string, idx: number) => (
            <Typogrphy key={item.slice(0, 10)} xs>
              <FlexRow>
                <FlexColumn>{idx + 1}. </FlexColumn>
                <FlexColumn className="pl-2">{item}</FlexColumn>
              </FlexRow>
            </Typogrphy>
          ))
        ) : item?.li ? (
          <Typogrphy key={idx} xs className="mb-8 ml-9">
            <li className="font-bold">
              {item?.li.li}
              <span className="font-normal">{item?.li.span}</span>
            </li>
          </Typogrphy>
        ) : item?.content ? (
          <Typogrphy key={idx} xs className="mb-8">
            {item?.content}
          </Typogrphy>
        ) : (
          <Typogrphy key={idx} sm className="mb-8">
            {item?.paragaph}
          </Typogrphy>
        );
      })}
    </FlexColumn>
  );
};

export default Promotoin;

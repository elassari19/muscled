import { Typogrphy } from "components";
import { Grid } from "layout";
import { NextPage } from "next";
import { Check, Phone } from "public";
import React, { ReactNode } from "react";
import Buttons from "./Buttons";

interface IProps {
  className?: string;
  children?: ReactNode;
  bold?: boolean;
  data: {
    title: {
      content: string;
      phone: string;
    };
    plan1: {
      valid: boolean;
      content: string;
      button: boolean;
    };
    plan2: {
      valid: boolean;
      content: string;
      button: boolean;
    };
    plan3: {
      valid: boolean;
      content: string;
      button: boolean;
    };
  };
}

const TypoH1: NextPage<IProps> = ({ className, children, data, bold }) => {
  return (
    <Grid
      columns={3}
      className={`border-x border-t border-[#0002] ${className}`}
    >
      <div
        className={`justify-center items-center flex-col p-[30px] bg-[#000000] ${
          bold && "font-extrabold "
        } text-white`}
      >
        <Typogrphy fontSize={16}>{data.title.content}</Typogrphy>
        {data.title.phone && (
          <span className="flex items-center justify-around">
            <Phone />{" "}
            <Typogrphy fontSize={24} extraBold className="text-blue">
              {data.title.phone}
            </Typogrphy>
          </span>
        )}
      </div>
      <div
        className={`justify-center items-center flex p-[30px] text-center bg-[#C4000010] ${
          bold && "font-extrabold "
        }`}
      >
        {data.plan1.valid ? (
          <Check />
        ) : data.plan1.button ? (
          <Buttons
            title="Get Started"
            pointer
            onClick={() => console.log("clicked")}
          />
        ) : (
          <Typogrphy fontSize={16}>{data.plan1.content}</Typogrphy>
        )}
      </div>
      <div
        className={`justify-center items-center flex p-[30px] text-center bg-[#C4000020] ${
          bold && "font-extrabold "
        }`}
      >
        {data.plan2.valid ? (
          <Check />
        ) : data.plan2.button ? (
          <Buttons
            title="Get Started"
            pointer
            onClick={() => console.log("clicked")}
          />
        ) : (
          <Typogrphy fontSize={16}>{data.plan2.content}</Typogrphy>
        )}
      </div>
      <div
        className={`justify-center items-center flex p-[30px] text-center bg-[#C4000030] ${
          bold && "font-extrabold "
        }`}
      >
        {data.plan3.valid ? (
          <Check />
        ) : data.plan3.button ? (
          <Buttons
            title="Get Started"
            pointer
            onClick={() => console.log("clicked")}
          />
        ) : (
          <Typogrphy fontSize={16}>{data.plan3.content}</Typogrphy>
        )}
      </div>
    </Grid>
  );
};

export default TypoH1;

import { NextPage } from "next";
import React, { ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
  fontSize?: number;
  bold?: boolean;
  bolder?: boolean;
  extraBold?: boolean;
  lineHeight?: number;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
}

const TypoH1: NextPage<IProps> = ({
  className,
  children,
  fontSize,
  bold,
  bolder,
  extraBold,
  lineHeight,
  xs,
  sm,
  md,
  lg,
}) => {
  return (
    <p
      className={`
      ml-0
      ${bold && "font-bold"} 
      ${bolder && "font-[600]"} 
      ${extraBold && "font-extrabold "}
      ${
        xs
          ? "text-xl "
          : sm
          ? "text-2xl"
          : md
          ? "text-4xl"
          : lg
          ? "text-5xl"
          : "text-6xl"
      }
      ${lineHeight} ${className} `}
      style={{ fontSize }}
    >
      {children}
    </p>
  );
};

export default TypoH1;

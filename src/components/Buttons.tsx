import { FlexRow } from "layout";
import { NextPage } from "next";
import Image from "next/image";
import React, { ReactNode } from "react";

interface IProps {
  className?: string;
  children?: ReactNode;
  title: string;
  bgColor?: string;
  color?: string;
  height?: string;
  width?: string;
  rounded?: string;
  shadow?: string;
  fontSize?: string;
  pointer?: boolean;
  EndIcon?: SVGSVGElement;
  border?: string;
  onClick?: () => void;
}

const Buttons: NextPage<IProps> = ({
  className,
  title,
  bgColor = "bg-black",
  color = "text-white",
  height = "h-[60px]",
  width = "w-[205px]",
  rounded = "rounded-[5px]",
  fontSize = "font-[20px]",
  EndIcon,
  shadow,
  border,
  children,
  pointer,
  onClick,
}) => {
  return (
    <FlexRow
      onClick={onClick}
      className={`font-semibold ${fontSize} ${bgColor} ${color} ${width}
      ${height} ${rounded} ${className} ${border}${shadow && "drop-shadow"} ${
        pointer && "cursor-pointer"
      } p-[20px] justify-center items-center `}
    >
      <span>{title}</span>
      {children}
    </FlexRow>
  );
};

export default Buttons;

import { NextPage } from "next";
import React, { CSSProperties } from "react";

interface IProps {
  rounded?: string;
  bgColor?: string;
  color?: string;
  title: string;
  className?: string;
  style?: CSSProperties;
}

const index: NextPage<IProps> = ({
  rounded,
  color,
  bgColor,
  title,
  className,
  style,
}) => {
  return (
    <div
      className={`p-2 px-4 cursor-pointer ${className} ${rounded} ${color} ${bgColor} `}
      style={style}
    >
      {title}
    </div>
  );
};

export default index;

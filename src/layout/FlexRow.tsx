import { NextPage } from "next";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  height?: number;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
}

const FlexRow: NextPage<IProps> = ({
  children,
  className,
  height,
  bgColor,
  color,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex ${bgColor} ${color} ${className}`}
      style={{ height }}
    >
      {children}
    </div>
  );
};

export default FlexRow;

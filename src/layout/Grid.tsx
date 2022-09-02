import { NextPage } from "next";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  height?: number;
  bgColor?: string;
  color?: string;
  onClick?: () => void;
  columns: number;
}

const FlexRow: NextPage<IProps> = ({
  children,
  className,
  height,
  bgColor,
  color,
  onClick,
  columns,
}) => {
  return (
    <div
      onClick={onClick}
      className={`grid grid-cols-4 ${bgColor} ${color} ${className}`}
      style={{ height }}
    >
      {children}
    </div>
  );
};

export default FlexRow;

import { NextPage } from "next";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  height?: number;
}

const FlexColumn: NextPage<IProps> = ({ children, className, height }) => {
  return (
    <div style={{ height }} className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default FlexColumn;

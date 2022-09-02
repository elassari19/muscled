import { NextPage } from "next";
import React, { CSSProperties, FC, SetStateAction } from "react";

interface Props {
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  onChange?: (ev: React.SetStateAction<string>) => void;
  style?: CSSProperties;
  value: string | number;
  label?: string;
}

const index: NextPage<Props> = ({
  className,
  id,
  placeholder,
  type,
  value,
  onChange,
  style,
  label,
}) => {
  return (
    <div id={id}>
      {label && (
        <label htmlFor={label} className="px-2 my-1">
          {label}
        </label>
      )}

      <input
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={(e: any) =>
          // @ts-ignore
          onChange(e.target.value)
        }
        style={style}
        className={`w-[100%] py-3 pl-4 outline-none ${className}`}
      />
    </div>
  );
};

export default index;

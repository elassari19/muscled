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

const index: FC<Props> = ({
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
    <div className={`${className}`} id={id}>
      {label && (
        <label htmlFor={label} className="px-2 my-1">
          {label}
        </label>
      )}

      <div>
        <input
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={(e: any) =>
            // @ts-ignore
            onChange(e.target.value)
          }
          style={style}
          className="w-[100%] py-2 pl-4 outline-none"
        />
      </div>
    </div>
  );
};

export default index;

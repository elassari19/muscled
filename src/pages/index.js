/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

const index = () => {
  const [value, setValue] = useState(0);
  const [rotate, setRotate] = useState(0);

  const handelElement = (id) => {
    const diff = Math.abs(value - id);
    setValue(id);
    setRotate(
      diff <= 4
        ? value < id
          ? rotate - 45 * diff
          : rotate + 45 * diff
        : diff > 4
        ? value < id
          ? rotate - 45 * (diff - 8)
          : rotate + 45 * (diff - 8)
        : 0
    );
  };

  return (
    <div
      className="relative h-96 w-96 mx-auto my-40 rounded-full border-red-500 p-20 bg-gray-500"
      style={{ transform: `rotate(${rotate}deg)`, transition: "1s" }}
    >
      {[
        [0, 45],
        [15, 75],
        [45, 85],
        [70, 70],
        [80, 45],
        [70, 15],
        [45, 5],
        [15, 10],
      ].map((item, idx) => {
        const top = `${item[0]}%`;
        const left = `${item[1]}%`;
        // const rotate =
        //   value > idx && value < idx + 4
        //     ? ((idx + 1) / 2) * -45
        //     : ((idx + 1) / 2) * 45;
        // console.log(item[2]);
        return (
          <div
            key={idx}
            onClick={() => handelElement(idx)}
            className={`bg-green-600 absolute px-4 py-2 rounded-full text-white cursor-pointer`}
            style={{
              top,
              left,
              transform: `scale(${value == idx ? 1.5 : 1})`,
              transition: "1.4s",
            }}
          >
            {idx}
          </div>
        );
      })}
    </div>
  );
};

export default index;

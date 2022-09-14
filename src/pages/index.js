/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

const index = () => {
  const [value, setValue] = useState(0);
  const [rotate, setRotate] = useState(0);

  const handelElement = (id, rot) => {
    setValue(id);
    setRotate(Math.abs(rot[0] - rotate) < 180 ? rot[0] : rot[1]);
  };
  return (
    <div
      className="relative h-96 w-96 mx-auto my-40 rounded-full border-red-500 p-20 bg-gray-500"
      style={{ transform: `rotate(${rotate}deg)`, transition: "1s" }}
    >
      {[
        [0, 45, [-360, 0]],
        [15, 75, [-45, 315]],
        [45, 85, [-90, 270]],
        [70, 70, [-135, 225]],
        [80, 45, [180, -180]],
        [70, 15, [-235, 135]],
        [45, 5, [-280, 90]],
        [15, 10, [-325, 45]],
      ].map((item, idx) => {
        const top = `${item[0]}%`;
        const left = `${item[1]}%`;
        // const rotate =
        //   value > idx && value < idx + 4
        //     ? ((idx + 1) / 2) * -45
        //     : ((idx + 1) / 2) * 45;
        // console.log(top, left);
        return (
          <div
            key={idx}
            onClick={() => handelElement(idx, item[2])}
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

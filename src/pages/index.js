import React, { useState } from "react";

const Input = () => {
  const [value, setvalue] = useState("");
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  return (
    <div className="divInput">
      <input value={value} onChange={handleChange} className={`input`} />
      <button className="button">Get the Course</button>
    </div>
  );
};

export default Input;

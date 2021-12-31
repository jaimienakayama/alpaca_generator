import React from "react";

const Input = ({ value, onChange }) => {
  return (
    <>
      <input
        type="radio"
        id={value}
        name="radioOptions"
        value={value}
        onChange={onChange}
      />
      <label for={value}>{value}</label>
    </>
  );
};

export default Input;

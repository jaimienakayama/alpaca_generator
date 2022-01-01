import React from "react";

const Button = ({ value, onChange }) => {
  return (
    <div>
      <button className="btn" onClick={onChange}>
        {value}
      </button>
    </div>
  );
};

export default Button;

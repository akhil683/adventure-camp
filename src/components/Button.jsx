import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-8 py-2 text-base lg:text-lg rounded-full text-white hover:bg-black duration-200 font-poppins bg-red-600">
      {children}
    </button>
  );
};

export default Button;

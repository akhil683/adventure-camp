const Button = ({ children }) => {
  return (
    <button className="px-8 py-2 border-2 border-red-600 text-base lg:text-lg rounded-full text-white hover:bg-black duration-200 font-poppins bg-red-600">
      {children}
    </button>
  );
};

export default Button;

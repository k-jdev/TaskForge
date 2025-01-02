import React from "react";
interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="font-bold text-sm md:text-base text-customPurple bg-customRed p-2 rounded-md hover:scale-110 hover:shadow-[0_4px_20px_rgba(255,99,71,0.8)] hover:text-white transition-all duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default Button;

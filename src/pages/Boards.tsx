import React from "react";
import Navbar from "./../components/NavBar/Navbar";

const Boards: React.FC = () => {
  return (
    <div>
      <Navbar />
      <button className="flex justify-self-center mt-10 bg-customRed text-white px-4 py-2 rounded-md hover:bg-red-600">
        Створити дошку
      </button>
    </div>
  );
};

export default Boards;

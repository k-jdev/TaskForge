import React from "react";
import Navbar from "./../components/NavBar/Navbar";
import Button from "./../components/Button/Button";

function Boards() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-10">
        <Button text="Створити дошку +" />
      </div>
    </div>
  );
}

export default Boards;

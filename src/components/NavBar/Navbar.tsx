import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="m-5 flex justify-between items-center">
        <div className="flex">
          <h2 className=" text-3xl font-bold text-customOrange  ">
            <a href="">TaskForge</a>
          </h2>
        </div>
        <div className="flex items-center text-customRed font-bold text-lg">
          <ul className="flex">
            <li className="mr-8">
              <a href="">Дошки</a>
            </li>
            <li className="mr-8">
              <a href="">Користувачі</a>
            </li>
          </ul>
          <ul className="place-items-center">
            <li>
              <a href="">Зареєструватися</a>
            </li>
            <li>
              <a href="">Увійти</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className=" border-customRed border-1 rounded-xl" />
    </nav>
  );
};

export default Navbar;

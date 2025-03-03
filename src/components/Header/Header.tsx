import React from "react";
import headerImg from "../../assets/image.png";
import { motion } from "framer-motion";

import { useState } from "react";

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <header className="mt-10 mx-5 md:mt-20 md:mx-20 flex flex-col md:flex-row justify-between items-center text-center">
        <div className="w-full md:w-80 mb-8 md:mb-0">
          <div>
            <h3 className="text-white p-2 text-xl md:text-3xl font-bold italic rounded-lg">
              TaskForge: Створюйте свій успіх разом з нами
            </h3>
            <p className="text-white text-sm md:text-lg mt-4">
              Організовуйте завдання, працюйте в команді та досягайте цілей
              швидше з нашим інтуїтивним інструментом управління
            </p>
            {/* <button className="mt-6 md:mt-10 font-bold text-sm md:text-base text-customGray bg-customWhiteGray p-2 rounded-md ">
            Почати використання
          </button> */}
          </div>
        </div>
        <div className="relative group w-full md:w-auto">
          <img
            className="rounded-2xl transform group-hover:scale-110 group-hover:rotate-3 group-hover:translate-y-2 transition-transform duration-500 ease-out z-10 relative w-full md:w-auto"
            src={headerImg}
            alt=""
          />
        </div>
      </header>
    </motion.div>
  );
}

export default Header;

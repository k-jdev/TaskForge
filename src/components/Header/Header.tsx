import React from "react";
import headerImg from "../../assets/image.png";

function Header() {
  return (
    <header className="mt-10 mx-5 md:mt-20 md:mx-20 flex flex-col md:flex-row justify-between items-center text-center">
      <div className="w-full md:w-80 mb-8 md:mb-0">
        <div>
          <h3 className="text-customOrange p-2 text-xl md:text-2xl font-bold italic rounded-lg">
            TaskForge: Створюйте свій успіх разом з нами
          </h3>
          <p className="text-customRed text-sm md:text-lg mt-4">
            Організовуйте завдання, працюйте в команді та досягайте цілей швидше
            з нашим інтуїтивним інструментом управління
          </p>
          <button className="mt-6 md:mt-10 font-bold text-sm md:text-base text-customPurple bg-customRed p-2 rounded-md hover:scale-110 hover:shadow-[0_4px_20px_rgba(255,99,71,0.8)] hover:text-white transition-all duration-300 ease-in-out">
            Почати використання
          </button>
        </div>
      </div>
      <div className="relative group w-full md:w-auto">
        {/* Градієнтний фон */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-customRed to-customOrange rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md z-0"></div>

        {/* Зображення */}
        <img
          className="rounded-2xl transform group-hover:scale-110 group-hover:rotate-3 group-hover:translate-y-2 transition-transform duration-500 ease-out z-10 relative w-full md:w-auto"
          src={headerImg}
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;

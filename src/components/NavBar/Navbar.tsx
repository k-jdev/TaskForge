import React, { useState } from "react";
import RegisterModal from "../RegisterForm/RegisterForm";
import LoginModal from "../LoginForm/LoginForm";

const Navbar = () => {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const toggleBodyScroll = (isModalOpen: boolean) => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  };

  const openModal = (type: string) => {
    toggleBodyScroll(true);
    if (type === "register") setRegisterModalOpen(true);
    else if (type === "login") setLoginModalOpen(true);
  };

  const closeModal = () => {
    toggleBodyScroll(false);
    setRegisterModalOpen(false);
    setLoginModalOpen(false);
  };

  return (
    <nav>
      <div className="m-5 flex justify-between items-center">
        <div className="flex">
          <h2 className="text-3xl font-bold text-customOrange hover:text-white duration-300">
            <a href="/">TaskForge</a>
          </h2>
        </div>
        <div className="flex items-center text-customRed font-bold text-lg ">
          <ul className="flex">
            <li className="mr-8 hover:text-white duration-300">
              <a href="/boards">Дошки</a>
            </li>
            <li className="mr-8 hover:text-white duration-300">
              <a href="/users">Користувачі</a>
            </li>
          </ul>
          <ul className="place-items-center">
            <li className="hover:text-white duration-300">
              <button className="mr-4" onClick={() => openModal("register")}>
                Зареєструватися
              </button>
            </li>
            <li className="hover:text-white duration-300">
              <button onClick={() => openModal("login")}>Увійти</button>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-customRed border-1 rounded-xl" />

      {/* Модальні вікна */}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={closeModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;

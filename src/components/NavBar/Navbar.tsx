import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Link } from "react-router-dom";

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
    <nav className="">
      <div className="mx-40 flex justify-between items-center">
        <div className="flex"></div>
        <div className="flex items-center text-customGray font-bold text-lg mt-4">
          <ul className="flex">
            <li className="mr-8">
              <Link to="/boards">Дошки</Link>
            </li>
            <li className="mr-8">
              <Link to="/users">Користувачі</Link>
            </li>
          </ul>
          <ul className="place-items-center flex ">
            <li>
              <button className="mr-4" onClick={() => openModal("register")}>
                Зареєструватися
              </button>
            </li>
            <li>
              <button onClick={() => openModal("login")}>Увійти</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Модальне вікно реєстрації */}
      <RegisterForm
        closeModal={closeModal}
        isRegisterModalOpen={isRegisterModalOpen}
      />
      {/* Модальне вікно входу до системи */}
      <LoginForm closeModal={closeModal} isLoginModalOpen={isLoginModalOpen} />
    </nav>
  );
};

export default Navbar;

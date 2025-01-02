import React, { useState } from "react";

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
          <h2 className="text-3xl font-bold text-customOrange">
            <a href="/">TaskForge</a>
          </h2>
        </div>
        <div className="flex items-center text-customRed font-bold text-lg">
          <ul className="flex">
            <li className="mr-8">
              <a href="/boards">Дошки</a>
            </li>
            <li className="mr-8">
              <a href="/users">Користувачі</a>
            </li>
          </ul>
          <ul className="place-items-center">
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
      <hr className="border-customRed border-1 rounded-xl" />

      {/* Модальне вікно реєстрації */}
      {isRegisterModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-customOrange mb-4">
              Зареєструватися
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Ім'я</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Електронна пошта</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Пароль</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-customRed text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Зареєструватися
              </button>
            </form>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              Закрити
            </button>
          </div>
        </div>
      )}

      {/* Модальне вікно входу до системи */}
      {isLoginModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-customOrange mb-4">
              Увійти
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Електронна пошта</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Пароль</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-customRed text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Увійти
              </button>
            </form>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

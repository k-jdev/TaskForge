import React from "react";

type Props = {
  closeModal: any;
  isRegisterModalOpen: any;
};

const RegisterForm: React.FunctionComponent<Props> = ({
  closeModal,
  isRegisterModalOpen,
}) => {
  return (
    <div>
      {" "}
      {isRegisterModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-5 rounded-lg shadow-lg w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-customGray mb-4">
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
    </div>
  );
};

export default RegisterForm;

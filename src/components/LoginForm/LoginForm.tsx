import React from "react";
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const LoginForm: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-5 rounded-lg shadow-lg w-1/3 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-customOrange mb-4">Увійти</h2>
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
          onClick={onClose}
        >
          Закрити
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

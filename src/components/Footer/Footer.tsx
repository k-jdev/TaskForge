import React from "react";

function Footer() {
  return (
    <footer className=" text-customOrange py-6 text-center mt-12">
      <hr className="border-customOrange" />
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold mt-2">
          TaskForge © {new Date().getFullYear()} | Створюйте свій успіх разом з
          нами
        </p>
        <p className="text-sm mt-2">
          Організовуйте завдання, співпрацюйте з командою та досягайте цілей
          швидше. Наша платформа — це інструмент для ефективного управління
          вашим часом і проєктами.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:underline text-customOrange text-sm">
            Політика конфіденційності
          </a>
          <a href="#" className="hover:underline text-customOrange text-sm">
            Умови використання
          </a>
          <a href="#" className="hover:underline text-customOrange text-sm">
            Зв'язатися з нами
          </a>
        </div>
        <p className="text-xs mt-4">Створено з ❤️ для продуктивних команд</p>
      </div>
    </footer>
  );
}

export default Footer;

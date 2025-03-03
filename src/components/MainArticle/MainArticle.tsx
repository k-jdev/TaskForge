import { useState } from "react";
import { motion } from "framer-motion";

type Props = {};
const roadmapData = [
  {
    quarter: "Q1 - 2025",
    tasks: [
      "Запуск MVP",
      "Базові функції таск-менджера",
      "Підтримка drag & drop",
    ],
  },
  {
    quarter: "Q2 - 2025",
    tasks: [
      "Інтеграція з Google Calendar",
      "Повідомлення",
      "Хмарне зберігання",
    ],
  },
  {
    quarter: "Q3 - 2025",
    tasks: ["Мобільна версія", "Підтримка темної теми", "Автоматизація задач"],
  },
  {
    quarter: "Q4 - 2025",
    tasks: [
      "Налаштування прав доступу",
      "Оптимізація вашої продуктивності",
      "Підтримка оффлайн режиму",
    ],
  },
];

function MainArticle({}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col items-center text-white p-10 bg-gradient-to-b  to-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-10">Чому ми?</h1>
        <div className="relative w-full max-w-5xl h-64 flex justify-center perspective-1000">
          {roadmapData.map((item, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;
            const translateX = offset * 150;
            const rotateY = offset;
            const zIndex = isActive ? 10 : 5 - Math.abs(offset);
            const scale = isActive ? 1.1 : 0.9;

            return (
              <div
                key={index}
                className={`absolute w-96 p-6 rounded-xl transition-transform duration-500 shadow-lg backdrop-blur-lg border border-white/20 bg-gradient-to-r from-indigo-800 to-gray-800/50 cursor-pointer`}
                style={{
                  transform: `translate3d(${translateX}px, 0, ${
                    zIndex * 10
                  }px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex: zIndex,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <h2 className="text-2xl font-semibold mb-3">{item.quarter}</h2>
                <ul className="list-disc pl-5 cursor-pointer">
                  {item.tasks.map((task, i) => (
                    <li key={i} className="text-lg">
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default MainArticle;

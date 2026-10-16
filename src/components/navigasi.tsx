import { useState } from "react";
import NavigasiCard from "./navigasiCard";
import navigasiData from "../data/navigasiData";
import ThemeToggle from "./themeToggle";

export default function Navigasi() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-5 px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          HMR
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-gray-700 dark:text-white font-semibold">
            {navigasiData.map((item) => (
              <NavigasiCard
                key={item.id}
                label={item.label}
                href={item.href}
              />
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            className="text-gray-900 dark:text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-white dark:bg-slate-900 text-gray-700 dark:text-white font-semibold">
          {navigasiData.map((item) => (
            <NavigasiCard
              key={item.id}
              label={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </ul>
      )}
    </nav>
  );
}
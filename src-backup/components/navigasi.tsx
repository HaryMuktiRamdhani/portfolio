import { useState } from "react";
import NavigasiCard from "./navigasiCard";
import navigasiData from "../data/navigasiData";

export default function Navigasi() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-5 px-6">

        <h1 className="text-2xl md:text-3xl font-bold text-white">
          HMR
        </h1>

        <ul className="hidden md:flex gap-8 text-white font-semibold">
          {navigasiData.map((item) => (
            <NavigasiCard
              key={item.id}
              label={item.label}
              href={item.href}
            />
          ))}
        </ul>

        <button
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-5 px-6 pb-6 bg-slate-900 text-white font-semibold">
          {navigasiData.map((item) => (
            <NavigasiCard
              key={item.id}
              label={item.label}
              href={item.href}
            />
          ))}
        </ul>
      )}
    </nav>
  );
}
import type { ReactNode } from "react";

interface SkillsCardProps {
  icon: ReactNode;
  title: string;
}

export default function SkillCard({ icon, title }: SkillsCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl py-10 px-6 flex flex-col items-center">
      {icon}

      <h3 className="text-white text-lg font-semibold mt-5">{title}</h3>
    </div>
  );
}

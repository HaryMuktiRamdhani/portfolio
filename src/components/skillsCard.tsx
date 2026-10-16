import type { ReactNode } from "react";

interface SkillsCardProps {
  icon: ReactNode;
  title: string;
}

export default function SkillCard({ icon, title }: SkillsCardProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl py-10 px-6 flex flex-col items-center">
      {icon}

      <h3 className="text-gray-900 dark:text-white text-lg font-semibold mt-5">{title}</h3>
    </div>
  );
}

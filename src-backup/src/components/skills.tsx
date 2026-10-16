import SkillCard from "./skillsCard";
import skillsData from "../data/skillsData";

export default function Skills() {
  return (
    <section id="Skills" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>

      <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
        Keterampilan yang saya miliki.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
        {skillsData.map((skill) => {
          const Icon = skill.icon;

          return (
            <SkillCard
              key={skill.id}
              icon={<Icon size={60} className={skill.color} />}
              title={skill.title}
            />
          );
        })}
      </div>
    </section>
  );
}

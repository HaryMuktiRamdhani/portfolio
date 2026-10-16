import PortfolioData from "../data/portfolioData";
import Hero from "./portfolioCard";

export default function Portfolio() {
  return (
    <section id="Portfolio" className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white">Portfolio</h2>

      <p className="text-center text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
        Berikut beberapa project yang pernah saya kerjakan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {PortfolioData.map((portfolio) => {
          return (
            <Hero
              key={portfolio.id}
              imageUrl={portfolio.imageUrl}
              title={portfolio.title}
              description={portfolio.description}
            />
          );
        })}
      </div>
    </section>
  );
}

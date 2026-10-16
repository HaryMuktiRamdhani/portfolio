import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import PortfolioData from "../data/portfolioData";

export default function AllPortfolio() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 cursor-pointer mb-10 font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
        <ArrowLeft size={20} />
        Kembali
      </button>

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Semua Project
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-gray-500 dark:text-gray-400 leading-8">
          Kumpulan project yang pernah saya kerjakan dalam proses belajar dan
          mengembangkan kemampuan di bidang teknologi.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PortfolioData.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >

            <div className="sm:w-1/2 bg-gray-100 dark:bg-gray-950 flex items-center justify-center p-5">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="max-h-52 w-full object-contain group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="sm:w-1/2 p-6 flex flex-col">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 leading-7 line-clamp-5">
                {project.description}
              </p>

              <button
                onClick={() => navigate(`/portfolio/${project.id}`)}
                className="mt-auto pt-6 flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition cursor-pointer"
              >
                Lihat Detail
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

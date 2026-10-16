import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

import PortfolioData from "../data/portfolioData";

export default function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openImage, setOpenImage] = useState(false);
  const project = PortfolioData.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto py-32 text-center">
        <h1 className="text-4xl font-bold dark:text-white">
          Project tidak ditemukan
        </h1>
      </div>
    );
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 cursor-pointer mb-10 font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <ArrowLeft size={20} />
          Kembali
        </button>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="overflow-hidden rounded-3xl border border-gray-200  dark:border-gray-800">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div>
            <span
              className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 
              px-4 py-1 rounded-full font-semibold"
            >
              Portfolio Project
            </span>

            <h1 className="text-5xl font-bold mt-6  text-gray-900 dark:text-white">
              {project.title}
            </h1>

            <p className="mt-6 leading-8 text-gray-500 dark:text-gray-400">
              {project.description}
            </p>

            <button
              onClick={() => setOpenImage(true)}
              className="mt-10 px-7 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibol hover:scale-105 transition cursor-pointer"
            >
              Lihat Gambar Asli
            </button>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Project
          </h2>

          <p className="mt-6 leading-8 text-gray-500 dark:text-gray-400">
            Project ini merupakan salah satu hasil pembelajaran saya dalam
            mengembangkan aplikasi menggunakan teknologi modern. Fokus utama
            pada project ini adalah membuat tampilan yang bersih, responsive,
            dan mudah digunakan oleh pengguna.
          </p>
        </section>
      </section>

      {openImage && (
        <div
          onClick={() => setOpenImage(false)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center 
        justify-center p-8"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="max-w-6xl max-h-[90vh] rounded-3xl"
          />
        </div>
      )}
    </>
  );
}

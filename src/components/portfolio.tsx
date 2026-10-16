import { useNavigate } from "react-router-dom";
import PortfolioCard from "./portfolioCard";
import { useEffect, useState } from "react";
import axios from "axios";

interface Portfolio {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface ApiProject {
  id: number;
  image_url: string;
  title: string;
  description: string;
}

export default function Portfolio() {
  const navigate = useNavigate();

  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get<ApiProject[]>(
          `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/project`,
          {
            headers: {
              apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            },
          }
        );

        const data = response.data;

        const formattedData: Portfolio[] = data.map((project) => ({
          id: project.id,
          imageUrl: project.image_url,
          title: project.title,
          description: project.description,
        }));

        setPortfolio(formattedData);
      } catch (error) {
        console.error("Error mengambil data:", error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <section id="Portfolio" className="max-w-6xl mx-auto py-20 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Portfolio
        </h2>

        <p className="mt-5 max-w-2xl mx-auto leading-8 text-gray-500 dark:text-gray-400">
          Berikut beberapa project yang pernah saya kerjakan di sekolah dan
          hasil beberapa project tugas akhir yang saya kerjakan bersama tim
          saya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {portfolio.map((project) => (
          <PortfolioCard
            key={project.id}
            id={project.id}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button
          onClick={() => navigate("/portfolio")}
          className="cursor-pointer px-8 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition"
        >
          Lihat Semua Project
        </button>
      </div>
    </section>
  );
}
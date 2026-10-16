import GalleryCard from "./galleryCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface ProjectGallery {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ApiGallery {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

export default function Gallery() {
  const navigate = useNavigate();

  const [galleryData, setGalleryData] = useState<ProjectGallery[]>([]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get<ApiGallery[]>(
          `${import.meta.env.VITE_SUPABASE_URL_GALLERY}/rest/v1/gallery`,
          {
            headers: {
              apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY_GALLERY,
            },
          }
        );

        console.log("Response Supabase:", response.data);

        const formattedData: ProjectGallery[] = response.data.map(
          (item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            imageUrl: item.image_url,
          })
        );

        console.log("Formatted data:", formattedData);

        setGalleryData(formattedData);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Status:", error.response?.status);
          console.error("Response:", error.response?.data);
        } else {
          console.error("Error:", error);
        }
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <section
      id="Gallery"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
        Gallery
      </h2>

      <p className="text-center text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
        Gallery project sekolah yang pernah saya kerjakan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {galleryData.map((foto) => (
          <GalleryCard
            key={foto.id}
            id={foto.id}
            imageUrl={foto.imageUrl}
            title={foto.title}
            description={foto.description}
          />
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <button
          onClick={() => navigate("/gallery")}
          className="cursor-pointer px-8 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition"
        >
          Lihat semua project
        </button>
      </div>
    </section>
  );
}
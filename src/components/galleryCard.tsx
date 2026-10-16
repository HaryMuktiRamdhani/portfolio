import { useNavigate } from "react-router-dom";

interface GalleryCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export default function GalleryCard({
  id,
  imageUrl,
  title,
  description,
}: GalleryCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/gallery/${id}`)}
      className=" group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="bg-gray-100 dark:bg-gray-950 h-60 flex items-center justify-center p-5">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-gray-900 dark:text-white text-xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 mt-2 leading-7 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

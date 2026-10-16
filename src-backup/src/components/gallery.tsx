import galleryData from "../data/galleryData";
import GalleryCard from "./galleryCard";

export default function Gallery() {
  return (
    <section id="Portfolio" className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white">Gallery</h2>

      <p className="text-center text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
        Gallery project sekolah yang pernah saya kerjakan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {galleryData.map((foto) => {
          return (
            <GalleryCard
              key={foto.id}
              imageUrl={foto.imageUrl}
              title={foto.title}
              description={foto.description}
            />
          );
        })}
      </div>
    </section>
  );
}

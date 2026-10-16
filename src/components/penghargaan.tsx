import penghargaanData from "../data/penghargaanData";
import Penghargaan from "./penghargaanCard";

export default function Certificate() {
  return (
    <section id="Certificate" className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
        Certificates
      </h2>

      <p className="text-center text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        Penghargaan yang di dapat mengikuti program sekolah
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {penghargaanData.map((penghargaan) => {
          return (
            <Penghargaan
              key={penghargaan.id}
              imageUrl={penghargaan.imgUrl}
              title={penghargaan.title}
              description={penghargaan.description}
            />
          );
        })}
      </div>
    </section>
  );
}

import penghargaanData from "../data/penghargaanData";
import Penghargaan from "./penghargaanCard";

export default function Certificate() {
  return (
    <section
      id="Certificate"
      className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24 px-5 sm:px-6"
    >
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">
        Certificates
      </h2>

      <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
        Penghargaan yang di dapat mengikuti program sekolah
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-14">
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
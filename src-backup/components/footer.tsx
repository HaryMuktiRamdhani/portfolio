import SosialCard from "./footerCard";
import sosialData from "../data/footerData";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white">Hary Mukti Ramdhani</h3>

          <p className="inline-block mt-3 bg-white text-black px-4 py-1 rounded-lg font-semibold text-sm">
            Web Developer & Designer
          </p>

          <p className="text-gray-500 text-sm mt-4">
            @ 2026 Hary Mukti Ramdhani
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-white font-semibold mb-4">Link</h4>

          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <a href="#Home">Home</a>

            <a href="#Certificate">Certificate</a>

            <a href="#About">About</a>

            <a href="#Skills">Skills</a>

            <a href="#Portfolio">Portfolio</a>

            <a href="#Contact">Contact</a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-5">
        {sosialData.map((sosial) => {

          return (
            <SosialCard
              key={sosial.id}
              icon={sosial.icon}
              href={sosial.href}
            />
          );
        })}
        </div>
      </div>
    </footer>
  );
}

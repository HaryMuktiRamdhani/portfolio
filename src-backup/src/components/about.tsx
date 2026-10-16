import ngoding1Img from "../assets/ngoding1.jpeg";
import AboutData from "../data/aboutData";
import AboutCards from "./aboutCard";
export default function About() {
  return (
    <>
      <section id="About" className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-100 h-111 border-4 border-blue-600 rounded-xl"></div>
              <img
                src={ngoding1Img}
                alt="Hary"
                className="relative w-100 h-111 object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="text-gray-900 dark:text-white">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-8">
              Halo! Berikut adalah riwayat pendidikan yang telah saya tempuh.
              Setiap jenjang memberikan pengalaman, pengetahuan, dan
              keterampilan yang membentuk kemampuan saya hingga saat ini.
            </p>

            <div className="mt-8 space-y-4">
              {AboutData.map((about) => {
                return (
                  <AboutCards
                    key={about.id}
                    image={about.image}
                    school={about.school}
                    year={about.year}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

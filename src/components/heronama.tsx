import ketigaImg from "../assets/hary.jpeg";

export default function HeroNama() {
  return (
    <>
      <section id="Home" className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-16 lg:py-24 px-6 bg-white dark:bg-black">
        
        <div className="text-gray-900 dark:text-white max-w-xl text-center lg:text-left">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold">
            Hi everyone!
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            I'm{" "}
            <span className="text-blue-600 dark:text-blue-500 font-extrabold">
              Hary Mukti Ramdhani
            </span>
          </h1>

          <p className="inline-block mt-6 bg-slate-900 text-white dark:bg-white dark:text-black px-5 py-2 rounded-xl font-semibold">
            Web Developer & Designer
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-7 sm:leading-8 text-sm sm:text-base">
            Saya adalah siswa dari jurusan Perangkat Lunak yang gemar membuat
            situs web modern dan ramah pengguna. Saya senang mempelajari
            teknologi baru dan mewujudkan ide menjadi aplikasi web nyata.
          </p>

          <a href="#Portfolio">
            <button className="mt-8 w-full sm:w-auto bg-slate-900 text-white dark:bg-white dark:text-black px-8 py-3 rounded-xl font-semibold cursor-pointer hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300">
              Lihat Portfolio
            </button>
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={ketigaImg}
            alt="Profile"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-blue-600 shadow-lg"
          />
        </div>
      </section>
    </>
  );
}

import ketigaImg from "../assets/hary.jpeg";
export default function HeroNama() {
  return (
    <>
      <section
        id="Home"
        className="max-w-6xl mx-auto flex items-center justify-between py-24 px-6 bg-white dark:bg-black"
      >
        <div className="text-gray-900 dark:text-white max-w-xl">
          <p className="text-2xl font-semibold">Hi everyone!</p>

          <h1 className="text-6xl font-bold mt-4 leading-tight">
            I'm{" "}
            <span className="text-blue-600 dark:text-blue-500 font-extrabold">
              Hary Mukti Ramdhani
            </span>
          </h1>

          <p className="inline-block mt-6 bg-slate-900 text-white dark:bg-white dark:text-black px-5 py-2 rounded-xl font-semibold">
            Web Developer & Designer
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">
            Saya adalah Siswa dari jurusan Perangkat Lunak yang gemar membuat
            situs web modern dan ramah pengguna. Saya senang mempelajari
            teknologi baru dan mewujudkan ide menjadi aplikasi web nyata.
          </p>

          <a href="#Portfolio">
            <button className="mt-8 bg-slate-900 text-white dark:bg-white dark:text-black px-8 py-3 rounded-xl font-semibold cursor-pointer">
              Lihat Portfolio
            </button>
          </a>
        </div>

        <div>
          <img
            src={ketigaImg}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full border-4 border-blue-600"
          />
        </div>
      </section>
    </>
  );
}

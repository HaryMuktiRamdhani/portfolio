import "./App.css";
import Navigasi from "./components/navigasi";
import HeroNama from "./components/heronama";
import What from "./components/penghargaan";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Gallery from "./components/gallery";

function App() {
  return (
    <>
      {/* Navigasi */}
      <div className="min-h-screen bg-black">
        <Navigasi></Navigasi>
        {/* <nav className="bg-slate-900 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-5 px-6">
          <h1 className="text-3xl font-bold text-white">
            HMR
          </h1>
          <ul className="flex gap-8 text-white font-semibold">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </nav> */}

        {/* Home */}
        <HeroNama></HeroNama>
        {/* <section id="Home" className="max-w-6xl mx-auto flex items-center justify-between py-24 px-6">

        <div className="text-white max-w-xl">

          <p className="text-2xl font-semibold">
            Hi There!
          </p>

          <h1 className="text-6xl font-bold mt-4 leading-tight">
          I'm{" "}
           <span className="text-blue-500 font-extrabold">
            Hary Mukti Ramdhani
           </span>
          </h1>

          <p className="inline-block mt-6 bg-white text-black px-5 py-2 rounded-xl font-semibold">
            Web Developer & Designer
          </p>

          <p className="mt-6 text-gray-300 leading-8">
            I'm a Software Engineering student who enjoys creating modern,
            responsive, and user-friendly websites. I love learning new
            technologies and turning ideas into real web applications.
          </p>

          <a>
            <button className="mt-8 bg-white text-black px-8 py-3 rounded-xl font-semibold cursor-pointer">
              View Portfolio
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

      </section> */}

        {/* What I do */}
        <What></What>
        {/* <section className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-center text-4xl font-bold text-white">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white rounded-xl p-6">
            <img
              src={codeImg}
              alt="code"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="mt-5 text-xl font-bold">
              Web Development
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              I created this project for my final school project together with my team.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <img
              src={literasiImg}
              alt="website google sites"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="mt-5 text-xl font-bold">
              Website Google Sites
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              I created a digital literacy website using Google Sites.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6">
            <img
              src={desainImg}
              alt="UI design"
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="mt-5 text-xl font-bold">
              UI Design
            </h3>
            <p className="mt-3 text-gray-600 leading-7">
              I design clean and simple user interfaces focusing on usability and visual comfort.
            </p>
          </div>

        </div>

      </section> */}

        {/* About */}
        <About></About>

        <Skills></Skills>

        {/* <section id="About" className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-80 h-80 border-4 border-blue-600 rounded-xl"></div>
              <img
                src={ngoding1Img}
                alt="Hary"
                className="relative w-80 h-80 object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-gray-300 leading-8">
              Hi! I'm Hary, a software engineering student who enjoys creating responsive websites and modern user interfaces. I love learning new technologies and building projects that solve real-world problems.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                HTML, CSS, JavaScript
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                TypeScript, Python
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                UI Design Website
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Figma, Canva, Adobe Ilustrator
              </div>
            </div>
          </div>
        </div>
      </section> */}

        {/* Portfolio */}
        <Portfolio />

        <Gallery/>

        <Contact></Contact>
        {/* <section id="Portfolio" className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-center text-4xl font-bold text-white">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          <div className="group relative overflow-hidden rounded-xl">
            <img
              src={storeImg}
              alt="Toko Laptop"
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />
              <p className="mt-3 text-black leading-7 font-bold text-1xl text-center bg-white rounded-xl">
                WEBSITE STORE ELECTRON

                <p className="text-center text-gray-500 text-sm p-3">
                  Aplikasi ini dibuat menggunakan electron
                </p>
              </p>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white font-bold text-lg">Toko Laptop</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <img
              src={gameImg}
              alt="Game Gesture"
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />
             <p className="mt-3 text-black leading-7 font-bold text-1xl text-center bg-white rounded-xl">
                GAME GESTURE CONTROL

                <p className="text-center text-gray-500 text-sm p-3">
                  Project ini dibuat menggunakan Python
                </p>
              </p>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white font-bold text-lg">Game Gesture</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <img
              src={desainImg}
              alt="Poster Designs"
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />
             <p className="mt-3 text-black leading-7 font-bold text-1xl text-center bg-white rounded-xl">
                DESAIN WEBSITE PARIWISATA

                <p className="text-center text-gray-500 text-sm p-3">
                  Desain ini dibuat menggunakan Figma
                </p>
              </p>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white font-bold text-lg">Desain Website</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <img
              src={literasiImg}
              alt="Website UI Mockups"
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />
             <p className="mt-3 text-black leading-7 font-bold text-1xl text-center bg-white rounded-xl">
                WEBSITE LITERASI DIGITAL

                <p className="text-center text-gray-500 text-sm p-3">
                  Website ini dibuat menggunakan Google Sites
                </p>
              </p>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white font-bold text-lg">Website UI Mockups</p>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-black px-8 py-3 rounded-xl font-semibold cursor-pointer">
            View My Projects
          </button>
        </div>

      </section> */}

        {/* Skills */}

        {/* <section id="skills" className="max-w-6xl mx-auto py-20 px-6">

        <h2 className="text-center text-4xl font-bold text-white">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="font-bold text-lg">Web Development</h3>
            <p className="text-gray-500 text-sm mt-2">HTML, CSS, JavaScript, React</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="font-bold text-lg">Website</h3>
            <p className="text-gray-500 text-sm mt-2">create with google sites</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="font-bold text-lg">Design to Code</h3>
            <p className="text-gray-500 text-sm mt-2">Figma to HTML & Tailwind CSS</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center">
            <h3 className="font-bold text-lg">Graphic Designing</h3>
            <p className="text-gray-500 text-sm mt-2">Figma, Canva, Adobe Ilustrator</p>
          </div>

        </div>
        

      </section> */}

        {/* Footer */}
        <Footer></Footer>
        {/* <footer id="Contact" className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

          <div>
            <h3 className="text-2xl font-bold text-white">Hary Mukti Ramdhani</h3>
            <p className="inline-block mt-3 bg-white text-black px-4 py-1 rounded-lg font-semibold text-sm">
              Web Developer & Designer
            </p>
            <p className="text-gray-500 text-sm mt-4">
              @ 2026 Hary Mukti Ramdhani
            </p>  
          </div>

          <form className="flex flex-col gap-4 w-full max-w-md">
         <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 outline-none"
              />

              <textarea
               placeholder="Pesan"
               rows={5}
               className="w-full h-12 rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 outline-none resize-none"
               ></textarea>

              <button
              type="submit"
              className="bg-orange-600 text-white font-semibold py-3 rounded-lg cursor-pointer"
  >
              Kirim Pesan
              </button>
            </form>

          <div className="text-gray-300 space-y-3">
            <p>Email: harymukti757@email.com</p>
            <p>GitHub: github.com/harymukti</p>
            <p>Instagram: @harymktrmdnn</p>
          </div>

        </div>
      </footer> */}
      </div>
    </>
  );
}

export default App;

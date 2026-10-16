import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(`Login berhasil!\nEmail: ${email}`);

    setEmail("");
    setPassword("");
  };

  return (
    <section
      id="Login"
      className="min-h-screen flex items-center justify-center bg-black px-6 py-24"
    >
      <div className="w-full max-w-md">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Login</h2>

          <p className="text-gray-400 mt-4 leading-7">
            Masuk ke akun Anda untuk melanjutkan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label className="block text-white mb-2 font-medium">Email</label>

            <input
              type="email"
              placeholder="Masukan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-4 text-white outline-none focus:border-blue-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukan password Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-4 pr-12 text-white outline-none focus:border-blue-500 transition"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-sm cursor-pointer"
              >
                {showPassword ? "Sembunyikan" : "Tampilkan"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-700 bg-gray-900"
              />
              Ingat saya
            </label>

            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              Lupa password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-xl font-semibold cursor-pointer hover:bg-gray-200 transition"
          >
            Masuk
          </button>

          <p className="text-center text-gray-400 text-sm">
            Belum punya akun?{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              Daftar sekarang
            </a>
          </p>
          <p>

          </p>
        </form>
      </div>
    </section>
  );
}

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(`Nama: ${name}\nEmail: ${email}\nPesan: ${message}`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="Contact" className="max-w-3xl mx-auto py-24 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Contact Me</h2>

        <p className="text-gray-400 mt-4 leading-7">
          Kontak saya jika ada yang ingin di tanyakan.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-12 space-y-6">
        <div>
          <label className="block text-white mb-2 font-medium">Nama</label>

          <input
            type="text"
            placeholder="Masukan nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-4 text-white outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-medium">Email</label>

          <input
            type="email"
            placeholder="Masukan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-4 text-white outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-white mb-2 font-medium">Pesan</label>

          <textarea
            rows={6}
            placeholder="Tulis pesan Anda"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-4 text-white outline-none resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-4 rounded-xl font-semibold cursor-pointer"
        >
          Kirim pesan
        </button>
      </form>
    </section>
  );
}

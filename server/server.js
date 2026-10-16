import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    imageUrl: "/images/project.png",
    title: "Website Store Electron",
    description:
      "Aplikasi desktop penjualan produk elektronik yang dibangun menggunakan Electron sebagai project akhir sekolah. Dikembangkan bersama tim dengan fitur pengelolaan produk dan antarmuka yang mudah digunakan.",
  },
  {
    id: 2,
    imageUrl: "/images/game.jpg",
    title: "Game Gesture Control",
    description:
      "Project berbasis Python yang memanfaatkan gesture tangan sebagai media kontrol permainan. Dibuat untuk mengeksplorasi teknologi computer vision dan interaksi tanpa perangkat fisik.",
  },
  {
    id: 3,
    imageUrl: "/images/desain.png",
    title: "Desain Website",
    description:
      "Perancangan UI/UX website bertema pariwisata dengan fokus pada tampilan modern, navigasi yang mudah, dan pengalaman pengguna yang nyaman di berbagai perangkat.",
  },
  {
    id: 4,
    imageUrl: "/images/literasi.jpg",
    title: "Website Google Sites",
    description:
      "Website edukasi mengenai literasi digital yang dibuat menggunakan Google Sites. Berisi materi pembelajaran, informasi, serta berbagai sumber yang mudah diakses oleh pengguna.",
  },
  {
    id: 5,
    imageUrl: "/images/cmd.png",
    title: "Membuat Database di CMD",
    description:
      "Project yang mendokumentasikan proses pembuatan dan pengelolaan database melalui Command Prompt (CLI). Bertujuan untuk memahami dasar-dasar administrasi database menggunakan perintah terminal.",
  },
  {
    id: 6,
    imageUrl: "/images/todolist.jpeg",
    title: "Aplikasi To-Do List",
    description:
      "Aplikasi desktop berbasis Electron yang membantu pengguna mengelola daftar tugas harian. Memiliki fitur menambah, mengedit, menghapus, dan menandai tugas yang telah selesai.",
  },
  {
    id: 7,
    imageUrl: "/images/kontak.png",
    title: "Aplikasi Kelola Kontak",
    description:
      "Aplikasi berbasis PHP untuk mengelola data kontak secara sederhana. Mendukung fitur CRUD sehingga pengguna dapat menambah, mengubah, melihat, dan menghapus data kontak.",
  },
  {
    id: 8,
    imageUrl: "/images/tinkercard.png",
    title: "Running Text LCD",
    description:
      "Simulasi running text menggunakan LCD dan Arduino IDE melalui Tinkercad. Project ini dibuat untuk mempelajari dasar pemrograman mikrokontroler serta penggunaan komponen elektronik virtual.",
  },
];

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.listen(3000, () => {
  console.log("API server berjalan di http://localhost:3000");
});
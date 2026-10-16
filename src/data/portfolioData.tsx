import projectImg from "../assets/project.png";
import gameImg from "../assets/game.jpg";
import desainImg from "../assets/desain.png";
import literasiImg from "../assets/literasi.jpg";
import cmdImg from "../assets/cmd.png";
import todolistImg from "../assets/todolist.jpeg";
import kontakImg from "../assets/kontak.png";
import tinkercardImg from "../assets/tinkercard.png";
const PortfolioData = [
  {
    id: 1,
    imageUrl: projectImg,
    title: "Website Store Electron",
    description:
      "Aplikasi desktop penjualan produk elektronik yang dibangun menggunakan Electron sebagai project akhir sekolah. Dikembangkan bersama tim dengan fitur pengelolaan produk dan antarmuka yang mudah digunakan.",
  },
  {
    id: 2,
    imageUrl: gameImg,
    title: "Game Gesture Control",
    description:
      "Project berbasis Python yang memanfaatkan gesture tangan sebagai media kontrol permainan. Dibuat untuk mengeksplorasi teknologi computer vision dan interaksi tanpa perangkat fisik.",
  },
  {
    id: 3,
    imageUrl: desainImg,
    title: "Desain Website",
    description:
      "Perancangan UI/UX website bertema pariwisata dengan fokus pada tampilan modern, navigasi yang mudah, dan pengalaman pengguna yang nyaman di berbagai perangkat.",
  },
  {
    id: 4,
    imageUrl: literasiImg,
    title: "Website Google Sites",
    description:
      "Website edukasi mengenai literasi digital yang dibuat menggunakan Google Sites. Berisi materi pembelajaran, informasi, serta berbagai sumber yang mudah diakses oleh pengguna.",
  },
  {
    id: 5,
    imageUrl: cmdImg,
    title: "Membuat Database di CMD",
    description:
      "Project yang mendokumentasikan proses pembuatan dan pengelolaan database melalui Command Prompt (CLI). Bertujuan untuk memahami dasar-dasar administrasi database menggunakan perintah terminal.",
  },
  {
    id: 6,
    imageUrl: todolistImg,
    title: "Aplikasi To-Do List",
    description:
      "Aplikasi desktop berbasis Electron yang membantu pengguna mengelola daftar tugas harian. Memiliki fitur menambah, mengedit, menghapus, dan menandai tugas yang telah selesai.",
  },
  {
    id: 7,
    imageUrl: kontakImg,
    title: "Aplikasi Kelola Kontak",
    description:
      "Aplikasi berbasis PHP untuk mengelola data kontak secara sederhana. Mendukung fitur CRUD sehingga pengguna dapat menambah, mengubah, melihat, dan menghapus data kontak.",
  },
  {
    id: 8,
    imageUrl: tinkercardImg,
    title: "Running Text LCD",
    description:
      "Simulasi running text menggunakan LCD dan Arduino IDE melalui Tinkercad. Project ini dibuat untuk mempelajari dasar pemrograman mikrokontroler serta penggunaan komponen elektronik virtual.",
  },
];

export default PortfolioData;

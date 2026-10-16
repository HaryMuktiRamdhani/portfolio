import tinkecardImg from "../assets/tinkercard.png";
import todolistImg from "../assets/todolist.jpeg";
import kontakImg from "../assets/kontak.png";
import cmdImg from "../assets/cmd.png";

const galleryData = [
    {
        id: 1,
        imageUrl: tinkecardImg,
        title: "Running Text LCD",
        description: "Running text menggunakan LCD dan Arduino IDE di TinkerCard",
    },
    {
        id: 2,
        imageUrl: todolistImg,
        title: "Aplikasi To-Do-List",
        description: "Project tugas akhir membuat aplikasi To-Do-List menggunakan Electron",
    },
    {
        id: 3,
        imageUrl: kontakImg,
        title: "Aplikasi Kelola Kontak",
        description: "Project tugas akhir membuat Aplikasi Kontak menggunakan PHP",
    },
    {
        id: 4,
        imageUrl: cmdImg,
        title: "Membuat database menggunakan CLI",
        description: "Tugas Basis Data membuat database menggunakan CLI",
    },
];

export default galleryData;
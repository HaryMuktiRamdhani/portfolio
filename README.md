<div align="center">

# Portfolio — Hary Mukti Ramdhani

Website portofolio pribadi: profil, keahlian, dan proyek.

![React](https://img.shields.io/badge/React-19-149ECA?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=flat&logo=reactrouter&logoColor=white)
![Express](https://img.shields.io/badge/Express-v5-000000?style=flat&logo=express&logoColor=white)

<!--
Aktifkan blok ini setelah situs live dan gambar tersedia:

<a href="https://URL-SITUS-KAMU">
  <img src="docs/screenshots/home-dark.png" alt="Tampilan beranda" width="860">
</a>
-->

</div>

---

## Ringkasan

Portfolio adalah situs pribadi yang merangkum profil, keahlian, dan proyek yang pernah dikerjakan. Dibangun dengan React, TypeScript, dan Vite, dengan Tailwind CSS v4 untuk styling dan tambahan server Express untuk kebutuhan backend.

Arah desainnya sengaja dibuat sederhana dan terkontrol:

- **Tanpa animasi dan transisi CSS** — antarmuka statis, cepat, dan tidak mengganggu
- **Tanpa Google Fonts** — tidak ada permintaan jaringan ke layanan font eksternal
- **Dark dan light mode** — dengan deteksi preferensi sistem dan penyimpanan pilihan di `localStorage`
- **Konten berbasis data** — bagian yang berulang dirender dari array data, bukan ditulis berulang di JSX
- **Palet slate dan biru** — latar gelap `slate-900` dengan aksen biru

<!--
## Tampilan

<table>
  <tr>
    <td align="center" width="50%">
      <b>Dark mode</b><br>
      <img src="docs/screenshots/home-dark.png" alt="Dark mode">
    </td>
    <td align="center" width="50%">
      <b>Light mode</b><br>
      <img src="docs/screenshots/home-light.png" alt="Light mode">
    </td>
  </tr>
</table>
-->

## Stack

| Layer | Teknologi |
|---|---|
| UI | React 19 |
| Bahasa | TypeScript |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router DOM v7 |
| Ikon | Lucide React, React Icons |
| HTTP client | Axios |
| Server | Express 5, CORS |
| Linting | ESLint, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` |
| Compiler | React Compiler (`babel-plugin-react-compiler`) |

## Struktur

```
.
├── public/          Aset statis
├── server/          Server Express
├── src/             Kode aplikasi (React + TypeScript)
├── index.html
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── package.json
```

TypeScript dipisah menjadi tiga konfigurasi: `tsconfig.app.json` untuk kode aplikasi di `src/`, `tsconfig.node.json` untuk berkas konfigurasi Vite, dan `tsconfig.json` sebagai root yang mereferensikan keduanya.

## Development

Prasyarat: Node.js (LTS) dan npm.

```bash
git clone https://github.com/HaryMuktiRamdhani/portfolio.git
cd portfolio
npm install
npm run dev
```

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan Vite |
| `npm run build` | Type-check dengan `tsc -b`, lalu build produksi |
| `npm run lint` | Menjalankan ESLint |
| `npm run preview` | Preview hasil build secara lokal |

## Author

Hary Mukti Ramdhani — [@HaryMuktiRamdhani](https://github.com/HaryMuktiRamdhani)
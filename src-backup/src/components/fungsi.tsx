import { useState } from "react";
export default function Button() {
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => {
    setJumlah(jumlah + 1);
  };

  const kurang = () => {
    setJumlah(jumlah - 1);
  };

  return (
    <>
      <div className="text-2xl w-700 h-300 bg-red-600">
        <p className="flex">{jumlah}</p>
        <button onClick={tambah}>Tambah</button>
        <button onClick={kurang}>Kurang</button>
      </div>
    </>
  );
}

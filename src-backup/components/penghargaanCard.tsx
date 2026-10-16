interface PenghargaanProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function Penghargaan({
  imageUrl,
  title,
  description,
}: PenghargaanProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 h-full">
      <div className="bg-gray-950 h-48 sm:h-56 md:h-64 flex items-center justify-center p-4">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="p-5 flex flex-col h-full">
        <h3 className="text-white text-lg sm:text-xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-400 mt-3 leading-6 sm:leading-7 text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
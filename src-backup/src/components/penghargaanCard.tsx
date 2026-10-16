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
    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-950 h-64 flex items-center justify-center p-4">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="p-5">
        <h3 className="text-gray-900 dark:text-white text-xl font-semibold">{title}</h3>

        <p className="text-gray-500 dark:text-gray-400 mt-3 leading-7">{description}</p>
      </div>
    </div>
  );
}

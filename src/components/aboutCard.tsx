interface AboutCardProps {
  image: string;
  school: string;
  major: string;
  year: string;
}

export default function AboutCards({ image, school, major, year, }: AboutCardProps) {
  return (
    <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
      <img
        src={image}
        alt={school}
        className="w-14 h-14 rounded-lg object-cover"
      />

      <div>
        <h3 className="text-gray-900 dark:text-white font-semibold">{school}</h3>
        <p className="text-blue-500 font-medium">{major}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{year}</p>
      </div>
    </div>
  );
}

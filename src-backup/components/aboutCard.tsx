interface AboutCardProps {
  image: string;
  school: string;
  year: string;
}

export default function AboutCards({ image, school, year }: AboutCardProps) {
  return (
    <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
      <img
        src={image}
        alt={school}
        className="w-14 h-14 rounded-lg object-cover"
      />

      <div>
        <h3 className="text-white font-semibold">{school}</h3>

        <p className="text-gray-400 text-sm">{year}</p>
      </div>
    </div>
  );
}

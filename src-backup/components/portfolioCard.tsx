interface HeroProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function Hero({ imageUrl, title, description }: HeroProps) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
      <div className="bg-gray-950 h-60 flex items-center justify-center p-5">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="p-5">
        <h3 className="text-white text-xl font-semibold">{title}</h3>

        <p className="text-gray-400 mt-2 leading-7">{description}</p>
      </div>
    </div>
  );
}

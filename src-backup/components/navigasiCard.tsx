interface NavigasiCardProps {
  label: string;
  href: string;
}

export default function NavigasiCard({
  label,
  href,
}: NavigasiCardProps) {
  return (
    <li>
      <a
        href={href}
        className="block hover:text-blue-400 transition-colors duration-300"
      >
        {label}
      </a>
    </li>
  );
}
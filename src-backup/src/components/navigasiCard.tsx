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
        className="hover:text-blue-600 dark:hover:text-blue-400"
      >
        {label}
      </a>
    </li>
  );
}
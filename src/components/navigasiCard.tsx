import { useLocation, useNavigate } from "react-router-dom";

interface NavigasiCardProps {
  label: string;
  href: string;
  onClick?: () => void;
}

export default function NavigasiCard({
  label,
  href,
  onClick,
}: NavigasiCardProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    onClick?.();

    if (location.pathname === "/") {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }

      return;
    }

    navigate("/", {
      state: {
        scrollTo: href,
      },
    });
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="block py-1 hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        {label}
      </a>
    </li>
  );
}
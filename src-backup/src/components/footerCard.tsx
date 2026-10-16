interface SocialCardProps {
    href: string;
    icon: React.ElementType;
  }
  
  export default function SosialCard({
    href,
    icon: Icon,
  }: SocialCardProps) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white"
      >
        <Icon />
      </a>
    );
  }
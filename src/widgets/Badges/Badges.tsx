import clsx from "clsx";

type BadgesProps = {
  className?: string;
};

const Badges: React.FC<BadgesProps> = ({ className }) => {
  const badges = [
    {
      title: "NPM Version",
      href: "https://www.npmjs.com/package/react-ghosta",
      image: "https://badgen.net/npm/v/react-ghosta",
    },
    {
      title: "Downloads",
      href: "https://badgen.net/npm/dm/react-ghosta",
      image: "https://badgen.net/npm/dm/react-ghosta",
    },
    {
      title: "License",
      href: "https://badgen.net/npm/license/react-ghosta",
      image: "https://badgen.net/npm/license/react-ghosta",
    },
  ];

  return (
    <div className={clsx("flex items-center gap-2 flex-wrap", className)}>
      {badges.map((badge, index) => {
        return (
          <a
            key={index}
            href={badge.href}
            target="_blank"
            aria-label={badge.title}
          >
            <img src={badge.image} alt={badge.title} />
          </a>
        );
      })}
    </div>
  );
};

export default Badges;

import sprite from "@assets/sprite.svg";
import Icon from "./Icon";

// import "./style.css";

const socialMediaIcons = ["facebook", "twitter", "linkedin", "github"];

const SocialMedia: React.FC = () => {
  return (
    <>
      {socialMediaIcons.map((icon) => (
        <a
          key={icon}
          className="p-2 inline-block"
          href="#"
          aria-label={`${icon} account`}
        >
          <Icon
            name={icon}
            style="text-title dark:text-title_dark dark:hover:text-secondary"
          />
        </a>
      ))}
    </>
  );
};

export default SocialMedia;

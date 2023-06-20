import sprite from "../sprite.svg";
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
          <svg className="md:w-8 md:h-8 xs:w-7 xs:h-7 text-primary dark:text-dark_text hover:text-secondary transition-all">
            <use href={sprite + `#${icon}`} />
          </svg>
        </a>
      ))}
    </>
  );
};

export default SocialMedia;

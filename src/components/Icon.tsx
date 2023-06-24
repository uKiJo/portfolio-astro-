import sprite from "@assets/sprite.svg";

interface IconProps {
  name: string;
  style?: string;
}

const Icon: React.FC<IconProps> = ({ name, style }) => {
  return (
    <svg className={`md:w-7 md:h-7 xs:w-6 xs:h-6 transition-all ${style}`}>
      <use href={sprite + `#${name}`} />
    </svg>
  );
};

export default Icon;

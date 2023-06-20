import sprite from "../sprite.svg";

const Fallback: React.FC = () => {
  return (
    <div className="z-20 absolute left-0 dark:bg-primary bg-white h-screen w-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <rect width="10" height="10" x="1" y="1" fill="#888888" rx="1">
          <animate
            id="svgSpinnersBlocksShuffle20"
            fill="freeze"
            attributeName="x"
            begin="0;svgSpinnersBlocksShuffle27.end"
            dur="0.2s"
            values="1;13"
          />
          <animate
            id="svgSpinnersBlocksShuffle21"
            fill="freeze"
            attributeName="y"
            begin="svgSpinnersBlocksShuffle24.end"
            dur="0.2s"
            values="1;13"
          />
          <animate
            id="svgSpinnersBlocksShuffle22"
            fill="freeze"
            attributeName="x"
            begin="svgSpinnersBlocksShuffle25.end"
            dur="0.2s"
            values="13;1"
          />
          <animate
            id="svgSpinnersBlocksShuffle23"
            fill="freeze"
            attributeName="y"
            begin="svgSpinnersBlocksShuffle26.end"
            dur="0.2s"
            values="13;1"
          />
        </rect>
        <rect width="10" height="10" x="1" y="13" fill="#888888" rx="1">
          <animate
            id="svgSpinnersBlocksShuffle24"
            fill="freeze"
            attributeName="y"
            begin="svgSpinnersBlocksShuffle20.end"
            dur="0.2s"
            values="13;1"
          />
          <animate
            id="svgSpinnersBlocksShuffle25"
            fill="freeze"
            attributeName="x"
            begin="svgSpinnersBlocksShuffle21.end"
            dur="0.2s"
            values="1;13"
          />
          <animate
            id="svgSpinnersBlocksShuffle26"
            fill="freeze"
            attributeName="y"
            begin="svgSpinnersBlocksShuffle22.end"
            dur="0.2s"
            values="1;13"
          />
          <animate
            id="svgSpinnersBlocksShuffle27"
            fill="freeze"
            attributeName="x"
            begin="svgSpinnersBlocksShuffle23.end"
            dur="0.2s"
            values="13;1"
          />
        </rect>
      </svg>
    </div>
  );
};

export default Fallback;

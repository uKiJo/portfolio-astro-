interface DescriptionProps {
  children: string;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return (
    <div className="mb-8 ">
      <p className="desc lg:leading-8 md:text-xl xs:text-base lg:max-w-full md:max-w-md font-normal sm:m-0 xs:m-auto dark:text-paragraph_dark text-paragraph">
        {children}
      </p>
    </div>
  );
};

export default Description;

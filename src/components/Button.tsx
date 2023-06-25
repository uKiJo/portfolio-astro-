interface ButtonProps {
  url: string;
  children: string;
}

function CustomButton({ children, url }: ButtonProps) {
  return (
    <a
      href={`${url}`}
      className="inline-block bg-secondary text-primary font-bold md:px-8 py-2 xs:px-6 hover:shadow-card transition rounded"
    >
      {children}
    </a>
  );
}

export default CustomButton;

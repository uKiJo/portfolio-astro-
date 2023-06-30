interface ThumbnailProps {
  thumbImage: string;
  title: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ title, thumbImage }) => {
  return (
    <div className="w-48 h-32 p-4 bg-gradient-180 from-gray-100 to-white dark:bg-transparent dark:bg-gradient-180 dark:from-transparent dark:to-lgrey shadow-card2 hover:shadow-card hover:-translate-y-1 cursor-pointer rounded overflow-hidden flex justify-center transition">
      <a href="/projects">
        <img
          className="h-full w-full"
          src={thumbImage}
          alt={title}
          width="100%"
          height="100%"
        />
      </a>
    </div>
  );
};

export default Thumbnail;

interface SearchResultItemProps {
  author: string;
  dateTaken: string;
  thumbnail: { [key: string]: string };
}

export const SearchResultItem = ({
  author,
  dateTaken,
  thumbnail,
}: SearchResultItemProps) => {
  const getAuthor = () => {
    return author.split('"')[1];
  };

  const getDateTaken = () => {
    const date = new Date(Date.parse(dateTaken));
    return date.toLocaleDateString();
  };

  return (
    <a
      href="/"
      className="border-2 rounded-xl inline-block overflow-hidden hover:shadow-md"
    >
      <div
        className="bg-cover h-36 ease-in duration-200 hover:scale-110"
        style={{ backgroundImage: `url(${thumbnail.m})` }}
      ></div>
      <div className="p-4">
        <div className="text-lg font-bold text-pink-800">{getAuthor()}</div>
        <div className="text-xs text-gray-500">{getDateTaken()}</div>
      </div>
    </a>
  );
};

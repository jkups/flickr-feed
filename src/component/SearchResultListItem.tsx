interface SearchResultItemProps {
  author: string;
  dateTaken: string;
  thumbnail: { [key: string]: string };
  children: JSX.Element;
}

export const SearchResultListItem = ({
  author,
  dateTaken,
  thumbnail,
  children,
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
      className="flex border-2 rounded-xl overflow-hidden hover:shadow-md"
    >
      <div
        className="basis-80 shrink-0 bg-cover w-64 min-h-[10rem] ease-in duration-200 hover:scale-110"
        style={{ backgroundImage: `url(${thumbnail.m})` }}
      ></div>
      <div className="p-4 w-full">
        <div className="flex justify-between">
          <div>
            <div className="text-lg font-bold text-pink-800">{getAuthor()}</div>
            <div className="text-xs text-gray-500 mb-8">{getDateTaken()}</div>
          </div>
          <button className="h-full bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full">
            Click to View
          </button>
        </div>
        {children}
      </div>
    </a>
  );
};

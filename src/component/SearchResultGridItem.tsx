import { flickrFeedItemInterface } from "./utility/extractFlickrFeedData";

interface SearchResultItemProps {
  author: string;
  dateTaken: string;
  tags: string;
  thumbnail: flickrFeedItemInterface;
}

export const SearchResultGridItem = ({
  author,
  dateTaken,
  tags,
  thumbnail,
}: SearchResultItemProps) => {
  const getAuthor = () => {
    return author.split('"')[1];
  };

  const getDateTaken = () => {
    const date = new Date(Date.parse(dateTaken));
    return date.toLocaleDateString();
  };

  const tagsCollection = tags.split(" ");

  return (
    <a
      href="/"
      className="border-2 rounded-xl overflow-hidden hover:shadow-md"
      data-testid="item"
    >
      <div
        data-testid="thumbnail"
        className="bg-cover h-36 ease-in duration-200 hover:scale-110"
        style={{ backgroundImage: `url(${thumbnail.m})` }}
      >
        <span className="inline-block m-4 px-1 py-0.5 text-xs rounded-md bg-pink-300 text-pink-800">
          {tagsCollection.length} tags
        </span>
      </div>
      <div className="p-4">
        <div className="text-lg font-bold text-pink-800">{getAuthor()}</div>
        <div className="text-xs text-gray-500">{getDateTaken()}</div>
      </div>
    </a>
  );
};

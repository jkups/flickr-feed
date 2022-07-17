import { flickrFeedItemInterface } from "./utility/extractFlickrFeedData";
import { CustomModal } from "./CustomModal";
import { useState } from "react";

interface SearchResultItemProps {
  author: string;
  dateTaken: string;
  thumbnail: flickrFeedItemInterface;
  children: JSX.Element;
}

export const SearchResultListItem = ({
  author,
  dateTaken,
  thumbnail,
  children,
}: SearchResultItemProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState("");

  const handleClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const getAuthor = () => {
    return author.split('"')[1];
  };

  const getDateTaken = () => {
    const date = new Date(Date.parse(dateTaken));
    return date.toLocaleDateString();
  };

  const getImage = () => {
    const thumbnailUrl = thumbnail.m as string;
    const imageUrl = thumbnailUrl.replace("_m", "_b");
    setImage(imageUrl);
    handleClick();
  };

  return (
    <>
      <button
        className="flex border-2 text-left rounded-xl overflow-hidden hover:shadow-md"
        data-testid="item"
        onClick={getImage}
      >
        <div
          data-testid="thumbnail"
          className="h-full basis-80 shrink-0 bg-cover bg-center w-64 min-h-[10rem] ease-in duration-200 hover:scale-110"
          style={{ backgroundImage: `url(${thumbnail.m})` }}
        ></div>
        <div className="p-4 w-full">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-lg font-bold text-pink-800">
                {getAuthor()}
              </div>
              <div className="text-xs text-gray-500 mb-8">{getDateTaken()}</div>
            </div>
            <button className="text-lg font-bold border rounded-full px-4 border-pink-800 text-pink-800 hover:bg-pink-800 hover:text-white">
              view
            </button>
          </div>
          {children}
        </div>
      </button>
      <CustomModal
        modalIsOpen={modalIsOpen}
        imageUrl={image}
        author={getAuthor()}
        dateTaken={getDateTaken()}
        onClick={handleClick}
      />
    </>
  );
};

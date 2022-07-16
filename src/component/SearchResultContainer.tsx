import { flickrFeedItemInterface } from "./utility/extractFlickrFeedData";
import { SearchResultItem } from "./SearchResultItem";

interface SearchResultContainerProps {
  data: flickrFeedItemInterface[];
}

export const SearchResultContainer = ({ data }: SearchResultContainerProps) => {
  return (
    <div id="container" className="max-w-screen-xl mx-auto p-x4 py-10">
      <div className="grid grid-cols-4 gap-6">
        {data.map((item, idx: number) => {
          return (
            <SearchResultItem
              key={idx}
              author={item.author}
              dateTaken={item.date_taken}
              thumbnail={item.media as unknown as flickrFeedItemInterface}
            />
          );
        })}
      </div>
    </div>
  );
};

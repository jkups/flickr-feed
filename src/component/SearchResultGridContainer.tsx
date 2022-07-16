import { flickrFeedItemInterface } from "./utility/extractFlickrFeedData";
import { SearchResultGridItem } from "./SearchResultGridItem";

interface SearchResultContainerProps {
  data: flickrFeedItemInterface[];
  isLoading: boolean;
}

export const SearchResultGridContainer = ({
  data,
  isLoading,
}: SearchResultContainerProps) => {
  return (
    <div id="container" className="max-w-screen-xl mx-auto py-6">
      {isLoading ? (
        <div>Loading results...</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item, idx: number) => {
            return (
              <SearchResultGridItem
                key={idx}
                author={item.author}
                dateTaken={item.date_taken}
                tags={item.tags}
                thumbnail={item.media as unknown as flickrFeedItemInterface}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

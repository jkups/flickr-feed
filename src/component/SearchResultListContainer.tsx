import { flickrFeedItemInterface } from "./utility/extractFlickrFeedData";
import { SearchResultListItem } from "./SearchResultListItem";
import { Tags } from "./Tags";
import { divide } from "lodash";

interface SearchResultContainerProps {
  data: flickrFeedItemInterface[];
  isLoading: boolean;
}

export const SearchResultListContainer = ({
  data,
  isLoading,
}: SearchResultContainerProps) => {
  return (
    <div id="container" className="max-w-screen-xl mx-auto py-6">
      {isLoading ? (
        <div>Loading results...</div>
      ) : (
        <div className="grid gap-6">
          {data.map((item, idx: number) => {
            return (
              <SearchResultListItem
                key={idx}
                author={item.author}
                dateTaken={item.date_taken}
                thumbnail={item.media as unknown as flickrFeedItemInterface}
              >
                <Tags tags={item.tags} />
              </SearchResultListItem>
            );
          })}
        </div>
      )}
    </div>
  );
};

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
    <div
      data-testid="container"
      id="container"
      className="max-w-screen-xl mx-auto py-6"
    >
      {isLoading ? (
        <div>Loading results...</div>
      ) : (
        <div className="grid gap-6">
          {data.map((item, idx: number) => {
            return (
              <SearchResultListItem
                key={idx}
                author={item.author as string}
                dateTaken={item.date_taken as string}
                thumbnail={item.media as flickrFeedItemInterface}
              >
                <Tags tags={item.tags as string} />
              </SearchResultListItem>
            );
          })}
        </div>
      )}
    </div>
  );
};

import { flickrFeedItemInterface } from "./utility/extractFlickrFeedData";
import { SearchResultListItem } from "./SearchResultListItem";
import { Tags } from "./Tags";

interface SearchResultContainerProps {
  data: flickrFeedItemInterface[];
}

export const SearchResultListContainer = ({
  data,
}: SearchResultContainerProps) => {
  return (
    <div id="container" className="max-w-screen-xl mx-auto py-6">
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
    </div>
  );
};

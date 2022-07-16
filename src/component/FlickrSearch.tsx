import { useEffect, useState } from "react";

import { flickrFeedEndpoint } from "./config/endpoints";
import { extractFlickrFeedData } from "./utility/extractFlickrFeedData";
import { flickrFeedItemInterface } from "./utility/extractFlickrFeedData";
import { fetchJsonpUrl } from "./utility/fetchJsonpUrl";

import { SearchResultGridContainer } from "./SearchResultGridContainer";
import { SearchResultListContainer } from "./SearchResultListContainer";

import { ToggleSwitch } from "./ui/toggleSwitch";
import { useMediaQuery } from "./hooks/useMediaQuery";

interface FlickrSearchProps {
  term: string;
}

export const FlickrSearch = ({ term }: FlickrSearchProps) => {
  const [data, setData] = useState([] as flickrFeedItemInterface[]);
  const [listView, setListView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleSearch = () => {
    return fetchJsonpUrl({
      endpoint: flickrFeedEndpoint,
      term: term,
    });
  };

  const refetchOnScroll = (resultContainer: Element) => {
    const containerRect = resultContainer?.getBoundingClientRect();
    const containerHeight = containerRect?.height;
    const containerTop = containerRect?.top;
    const windowHeight = window.innerHeight;

    if (containerHeight && containerTop) {
      const bottom =
        ((containerHeight + containerTop - windowHeight - 150) /
          containerHeight) *
        100;

      if (bottom < 5) {
        handleSearch().then((result) => {
          const flickrFeedData = extractFlickrFeedData({
            data: result.items,
            keys: ["author", "date_taken", "tags", "media"],
          });

          setData((prevState) => [...prevState, ...flickrFeedData]);
        });
      }
    }
  };

  useEffect(() => {
    handleSearch().then((result) => {
      const flickrFeedData = extractFlickrFeedData({
        data: result.items,
        keys: ["author", "date_taken", "tags", "media"],
      });

      setIsLoading(false);
      setData(flickrFeedData);
    });
  }, [term]);

  useEffect(() => {
    const resultContainer = document.querySelector("#container") as Element;
    window.addEventListener("scroll", () => refetchOnScroll(resultContainer));

    return () =>
      window.removeEventListener("scroll", () =>
        refetchOnScroll(resultContainer)
      );
  }, [term]);

  return (
    <div className="px-4 2xl:px-0">
      {!isMobile && (
        <div className="max-w-screen-xl mx-auto pt-8 bg-white flex items-center gap-2">
          <span>Grid View</span>
          <ToggleSwitch
            right={listView}
            onClick={() => setListView(!listView)}
          />
          <span>List View</span>
        </div>
      )}
      {listView && !isMobile ? (
        <SearchResultListContainer data={data} isLoading={isLoading} />
      ) : (
        <SearchResultGridContainer data={data} isLoading={isLoading} />
      )}
    </div>
  );
};

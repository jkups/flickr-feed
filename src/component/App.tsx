import { useEffect, useState } from "react";

import { flickrFeedEndpoint } from "./config/endpoints";
import { extractFlickrFeedData } from "./utility/extractFlickrFeedData";
import { flickrFeedItemInterface } from "./utility/extractFlickrFeedData";
import { fetchJsonpUrl } from "./utility/fetchJsonpUrl";

import { SearchResultGridContainer } from "./SearchResultGridContainer";
import { SearchResultListContainer } from "./SearchResultListContainer";

import { ToggleSwitch } from "./ui/toggleSwitch";
import { useMediaQuery } from "./hooks/useMediaQuery";
// import FlickrLogo from "./flickrlogo.svg";

const App = () => {
  const [data, setData] = useState([] as flickrFeedItemInterface[]);
  const [term, setTerm] = useState("car");
  const [listView, setListView] = useState(false);
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
    <>
      <div className="sticky top-0 ">
        <div className="bg-white border-b border-pink-500 shadow px-4 2xl:px-0">
          <div className="max-w-screen-xl mx-auto relative">
            <header className="py-4 flex justify-between items-center sticky top-0">
              <input
                className="rounded-lg font-semibold text-lg w-full md:w-96"
                type="text"
                placeholder="hello"
                onKeyUp={(event) => setTerm(event.target.value)}
              ></input>
              <span className="text-2xl font-bold text-pink-800 hidden md:block">
                {term.toUpperCase()} SEARCH
              </span>
            </header>
          </div>
        </div>
      </div>
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
          <SearchResultListContainer data={data} />
        ) : (
          <SearchResultGridContainer data={data} />
        )}
      </div>
    </>
  );
};

export default App;

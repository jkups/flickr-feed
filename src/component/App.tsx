import { useEffect, useState, KeyboardEvent } from "react";

import { flickrFeedEndpoint } from "./config/endpoints";
import { extractFlickrFeedData } from "./utility/extractFlickrFeedData";
import { flickrFeedItemInterface } from "./utility/extractFlickrFeedData";
import { fetchJsonpUrl } from "./utility/fetchJsonpUrl";

import { SearchResultContainer } from "./SearchResultContainer";
// import FlickrLogo from "./flickrlogo.svg";

const App = () => {
  const [data, setData] = useState([] as flickrFeedItemInterface[]);
  const [term, setTerm] = useState("car");

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
      <div className="bg-white border-b border-pink-500 sticky top-0 shadow">
        <div className="max-w-screen-xl mx-auto relative">
          <header className="py-4 sticky top-0">
            <input
              className="rounded-lg font-semibold text-lg"
              type="text"
              placeholder="hello"
              onKeyUp={(event) => setTerm(event.target.value)}
            ></input>
          </header>
        </div>
      </div>
      <SearchResultContainer data={data} />
    </>
  );
};

export default App;

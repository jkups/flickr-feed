import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  const media = window.matchMedia(query);

  useEffect(() => {
    const handleMediaMatch = (match: boolean) => setMatches(match);
    handleMediaMatch(media.matches);

    media.addEventListener("change", () => handleMediaMatch(media.matches));
    return () =>
      media.removeEventListener("change", () =>
        handleMediaMatch(media.matches)
      );
  }, [matches, query]);

  return matches;
};

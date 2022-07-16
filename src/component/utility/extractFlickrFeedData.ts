export interface flickrFeedItemInterface {
  [key: string]: string;
}

interface extractFlickrFeedInterface {
  data: flickrFeedItemInterface[];
  keys: string[];
  strict?: boolean;
}

export const extractFlickrFeedData = ({
  data,
  keys,
  strict = false,
}: extractFlickrFeedInterface): flickrFeedItemInterface[] => {
  return data.flatMap((item) => {
    const results: flickrFeedItemInterface[] = [];
    const result: flickrFeedItemInterface = {};

    for (const key of keys) {
      if (!!item[key] && strict) return [];
      result[key] = item[key];
    }

    results.push(result);
    return results;
  });
};

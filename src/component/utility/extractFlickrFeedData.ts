export interface flickrFeedItemInterface {
  [key: string]: string | flickrFeedItemInterface;
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
      if (strict && attributeIsMissing(item, key)) return [];
      result[key] = item[key];
    }

    results.push(result);
    return results;
  });
};

const isEmptyArray = (value: flickrFeedItemInterface, key: string): boolean => {
  return Array.isArray(value[key]) && value[key].length === 0;
};

const isEmptyObject = (
  value: flickrFeedItemInterface,
  key: string
): boolean => {
  return typeof value[key] === "object" && Object.keys(value[key]).length === 0;
};

const isEmptyString = (
  value: flickrFeedItemInterface,
  key: string
): boolean => {
  return typeof value[key] === "string" && !value[key].trim();
};

const attributeIsMissing = (
  value: flickrFeedItemInterface,
  key: string
): boolean => {
  return (
    isEmptyArray(value, key) ||
    isEmptyObject(value, key) ||
    isEmptyString(value, key)
  );
};

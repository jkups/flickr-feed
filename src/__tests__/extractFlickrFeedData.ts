import { extractFlickrFeedData } from "../component/utility/extractFlickrFeedData";

describe("extractFlickrFeedData", () => {
  const keys = ["author", "date_taken", "tags", "media"];
  const data = [
    {
      author: "Mike",
      date_taken: "22/02/2022",
      tags: "car vehicle truck bike",
      media: { m: "http://example-image.com" },
      others: "Other possible attribte values",
    },
    {
      author: "James",
      date_taken: "11/11/2021",
      tags: "machine elevator chair",
      media: " ",
      others: "Other possible attribte values",
    },
  ];

  it("extracts the right keys from the data feed", () => {
    const result = extractFlickrFeedData({ data: data, keys: keys });

    const expected = [
      {
        author: "Mike",
        date_taken: "22/02/2022",
        tags: "car vehicle truck bike",
        media: { m: "http://example-image.com" },
      },
      {
        author: "James",
        date_taken: "11/11/2021",
        tags: "machine elevator chair",
        media: " ",
      },
    ];

    expect(result).toEqual(expected);
  });

  describe("when in strict mode", () => {
    it("extracts only data with no missing attribute", () => {
      const result = extractFlickrFeedData({
        data: data,
        keys: keys,
        strict: true,
      });

      const expected = [
        {
          author: "Mike",
          date_taken: "22/02/2022",
          tags: "car vehicle truck bike",
          media: { m: "http://example-image.com" },
        },
      ];

      expect(result).toEqual(expected);
    });
  });
});

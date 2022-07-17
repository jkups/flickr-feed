/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { SearchResultGridItem } from "../component/SearchResultGridItem";

import "@testing-library/jest-dom";

describe("SearchResultGridItem", () => {
  it("displays item with author, tag count, date taken and thumbnail", async () => {
    const gridItem = render(
      <SearchResultGridItem
        author={'mike@example.com ("Mike")'}
        dateTaken={"2022-07-15T16:54:16-08:00"}
        tags={"car vehicle truck"}
        thumbnail={{ m: "http://example-image.com" }}
      />
    );

    const item = await gridItem.findByTestId("item");
    const thumbnail = await gridItem.findByTestId("thumbnail");

    expect(item).toHaveTextContent("Mike");
    expect(item).toHaveTextContent("16/07/2022");
    expect(item).toHaveTextContent("3 tags");
    expect(thumbnail.style.backgroundImage).toContain(
      "http://example-image.com"
    );
  });
});

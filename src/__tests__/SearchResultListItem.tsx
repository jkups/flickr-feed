/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { SearchResultListItem } from "../component/SearchResultListItem";
import { Tags } from "../component/Tags";

import "@testing-library/jest-dom";

describe("SearchResultListItem", () => {
  it("displays item with author, tags, date taken and thumbnail", async () => {
    const gridItem = render(
      <SearchResultListItem
        author={'mike@example.com ("Mike")'}
        dateTaken={"2022-07-15T16:54:16-08:00"}
        thumbnail={{ m: "http://example-image.com" }}
      >
        <Tags tags={"car vehicle truck"} />
      </SearchResultListItem>
    );

    const item = await gridItem.findByTestId("item");
    const thumbnail = await gridItem.findByTestId("thumbnail");

    expect(item).toHaveTextContent("Mike");
    expect(item).toHaveTextContent("16/07/2022");
    expect(item).toHaveTextContent("car");
    expect(item).toHaveTextContent("vehicle");
    expect(item).toHaveTextContent("truck");
    expect(thumbnail.style.backgroundImage).toContain(
      "http://example-image.com"
    );
  });
});

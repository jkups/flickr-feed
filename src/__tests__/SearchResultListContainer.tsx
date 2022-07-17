/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { SearchResultListContainer } from "../component/SearchResultListContainer";

import "@testing-library/jest-dom";

describe("SearchResultListContainer", () => {
  it("displays loading state", async () => {
    const gridContainer = render(
      <SearchResultListContainer data={[]} isLoading={true} />
    );
    const container = await gridContainer.findByTestId("container");
    expect(container).toHaveTextContent("Loading results...");
  });

  it("does not display loading state", async () => {
    const gridContainer = render(
      <SearchResultListContainer data={[]} isLoading={false} />
    );
    const container = await gridContainer.findByTestId("container");
    expect(container).not.toHaveTextContent("Loading results...");
  });
});

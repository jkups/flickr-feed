/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { SearchResultGridContainer } from "../component/SearchResultGridContainer";

import "@testing-library/jest-dom";

describe("SearchResultGridContainer", () => {
  it("displays loading state", async () => {
    const gridContainer = render(
      <SearchResultGridContainer data={[]} isLoading={true} />
    );
    const container = await gridContainer.findByTestId("container");
    expect(container).toHaveTextContent("Loading results...");
  });

  it("does not display loading state", async () => {
    const gridContainer = render(
      <SearchResultGridContainer data={[]} isLoading={false} />
    );
    const container = await gridContainer.findByTestId("container");
    expect(container).not.toHaveTextContent("Loading results...");
  });
});

import { render } from "@testing-library/react";
import { FlickrSearch } from "../component/FlickrSearch";

test("renders learn react link", () => {
  const { getByText } = render(<FlickrSearch term={"car"} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

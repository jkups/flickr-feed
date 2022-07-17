/**
 * @jest-environment jsdom
 */

import "../mock/matchMedia.mock";
import { render } from "@testing-library/react";
import { useMediaQuery } from "../component/hooks/useMediaQuery";

const getMedia = (value: string) => {
  let response;

  function TestComponent() {
    response = useMediaQuery(value);
    return null;
  }

  render(<TestComponent />);

  return response;
};

describe("useMediaQuery", () => {
  it("returns true when mobile view", () => {
    const isMobile = getMedia("(max-width: 768px)");
    expect(isMobile).toBeTruthy;
  });
});

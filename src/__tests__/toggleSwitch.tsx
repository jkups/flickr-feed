/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { ToggleSwitch } from "../component/ui/toggleSwitch";

import "@testing-library/jest-dom";

describe("ToggleSwitch", () => {
  it("switch to left when 'right' is false", async () => {
    const toggleSwitch = render(
      <ToggleSwitch right={false} onClick={() => {}} />
    );
    const toggle = await toggleSwitch.findByTestId("toggle");
    expect(toggle).not.toHaveClass("right-0");
  });

  it("switch to right when 'right' is true", async () => {
    const toggleSwitch = render(
      <ToggleSwitch right={true} onClick={() => {}} />
    );
    const toggle = await toggleSwitch.findByTestId("toggle");
    expect(toggle).toHaveClass("right-0");
  });
});

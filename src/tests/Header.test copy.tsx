import React from "react";
import { render } from "@testing-library/react";

import Header from "../components/Header/Header";

describe("Header component tests", () => {
  it("Renders coorectly header component", () => {
    const { getByText } = render(<Header />);
    const title = getByText("React Weather");
    expect(title).toBeTruthy;
  });
});

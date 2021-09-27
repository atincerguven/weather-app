import React from "react";
import { render } from "@testing-library/react";

import Footer from "../components/Footer/Footer";

describe("Footer component tests", () => {
  it("Renders correctly footer component", () => {
    const { getByText } = render(<Footer />);
    const title = getByText("React Weather Test Application");
    expect(title).toBeTruthy;
  });
});

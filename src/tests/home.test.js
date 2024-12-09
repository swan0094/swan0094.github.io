import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/home";

test("renders home page with news articles", () => {
  render(<Home />);
  const headingElement = screen.getByText(
    /stay updated with the latest afc news/i
  );
  expect(headingElement).toBeInTheDocument();

  const articleElements = screen.getAllByRole("heading", { level: 4 });
  expect(articleElements.length).toBeGreaterThan(0);
});

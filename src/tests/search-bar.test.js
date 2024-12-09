/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/search_bar";

test("renders search bar", () => {
  render(<SearchBar />);
  const inputElement = screen.getByPlaceholderText(/search.../i);
  expect(inputElement).toBeInTheDocument();
});

test("highlights matching text on search", () => {
  document.body.innerHTML = `
    <div class="highlightable">This is some searchable text.</div>
    <div class="highlightable">Another piece of searchable text.</div>
  `;

  render(<SearchBar />);
  const inputElement = screen.getByPlaceholderText(/search.../i);
  const buttonElement = screen.getByRole("button", { name: /search/i });

  fireEvent.change(inputElement, { target: { value: "searchable" } });
  fireEvent.click(buttonElement);

  const highlightedElements = document.querySelectorAll(".highlight");
  expect(highlightedElements.length).toBe(2);
  highlightedElements.forEach((element) => {
    expect(element).toHaveTextContent("searchable");
  });
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PlayerProfile from "../pages/player_profile";
import playersData from "../data/players.json";

jest.mock(
  "../components/modal",
  () =>
    ({ show, handleClose, children }) =>
      show ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      ) : null
);

test("renders player profile list", () => {
  render(<PlayerProfile />);
  expect(screen.getByText(/player profiles/i)).toBeInTheDocument();
  playersData.forEach((player) => {
    expect(screen.getByText(player.name)).toBeInTheDocument();
  });
});

test("selects a player and displays player details", () => {
  render(<PlayerProfile />);
  const playerCard = screen.getByText(playersData[0].name);
  fireEvent.click(playerCard);

  expect(screen.getByText(/player overview/i)).toBeInTheDocument();
  expect(screen.getByText(playersData[0].name)).toBeInTheDocument();
  expect(screen.getByText(playersData[0].position)).toBeInTheDocument();
  expect(screen.getByText(playersData[0].team)).toBeInTheDocument();
  expect(screen.getByText(playersData[0].birthdate)).toBeInTheDocument();
  expect(screen.getByText(playersData[0].nationality)).toBeInTheDocument();
});

test("likes an image", () => {
  render(<PlayerProfile />);
  const playerCard = screen.getByText(playersData[0].name);
  fireEvent.click(playerCard);

  const likeButton = screen.getAllByRole("button", { name: /like/i })[0];
  fireEvent.click(likeButton);

  expect(likeButton).toHaveTextContent(
    `👍 Like - ${playersData[0].galleryImages[0].likes + 1}`
  );
});

test("shows comment modal on comment button click", () => {
  render(<PlayerProfile />);
  const playerCard = screen.getByText(playersData[0].name);
  fireEvent.click(playerCard);

  const commentButton = screen.getAllByRole("button", { name: /comment/i })[0];
  fireEvent.click(commentButton);

  expect(screen.getByText(/submit a comment/i)).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/write your comment here/i)
  ).toBeInTheDocument();
});

test("shows confirmation modal on comment submission", () => {
  render(<PlayerProfile />);
  const playerCard = screen.getByText(playersData[0].name);
  fireEvent.click(playerCard);

  const commentButton = screen.getAllByRole("button", { name: /comment/i })[0];
  fireEvent.click(commentButton);

  const commentTextarea = screen.getByPlaceholderText(
    /write your comment here/i
  );
  fireEvent.change(commentTextarea, { target: { value: "Great player!" } });

  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  expect(screen.getByText(/comment sent for review/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
});

test("closes confirmation modal when ok button is clicked", () => {
  render(<PlayerProfile />);
  const playerCard = screen.getByText(playersData[0].name);
  fireEvent.click(playerCard);

  const commentButton = screen.getAllByRole("button", { name: /comment/i })[0];
  fireEvent.click(commentButton);

  const commentTextarea = screen.getByPlaceholderText(
    /write your comment here/i
  );
  fireEvent.change(commentTextarea, { target: { value: "Great player!" } });

  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  const okButton = screen.getByRole("button", { name: /ok/i });
  fireEvent.click(okButton);

  expect(
    screen.queryByText(/comment sent for review/i)
  ).not.toBeInTheDocument();
});

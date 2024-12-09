import React from "react";
import { render, screen } from "@testing-library/react";
import PlayerUpdates from "../pages/player_updates";
import playerUpdatesData from "../data/player_updates.json";

test("renders player updates and recovery", () => {
  render(<PlayerUpdates />);

  // Check if the heading is rendered
  expect(screen.getByText(/player updates and recovery/i)).toBeInTheDocument();

  // Check if the description is rendered
  expect(
    screen.getByText(
      /stay up-to-date with the health status and recovery progress of your favorite afc players/i
    )
  ).toBeInTheDocument();

  // Check if player updates are rendered
  playerUpdatesData.forEach((player) => {
    expect(
      screen.getAllByText(`Player: ${player.name}`).length
    ).toBeGreaterThan(0);
    expect(screen.getAllByText(player.status).length).toBeGreaterThan(0);
    expect(screen.getAllByText(player.recoveryStage).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(player.nextMatchAvailability).length
    ).toBeGreaterThan(0);
    expect(screen.getByAltText(`${player.name} profile`)).toHaveAttribute(
      "src",
      player.profileImage
    );
  });
});

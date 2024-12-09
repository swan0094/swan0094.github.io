import React from "react";
import { render, screen } from "@testing-library/react";
import OurHistory from "../pages/our_history";
import crowdAndPlayersCelebrating from "../images/history_cards/crowd_and_players_celebrating.jpg";
import pastPlayers from "../images/history_cards/past_players.jpg";
import crowsMuseum from "../images/history_cards/crows_museum.jpg";
import crowsPremierships from "../images/history_cards/crows_premierships.jpg";
import crowsJumpers from "../images/history_cards/crows_jumpers.jpg";
import hallOfFame from "../images/history_cards/hall_of_fame.jpg";

test("renders OurHistory component with images and text", () => {
  render(<OurHistory />);

  // Check if images are rendered
  expect(screen.getByAltText("Crowd celebrating with players")).toHaveAttribute(
    "src",
    crowdAndPlayersCelebrating
  );
  expect(
    screen.getByAltText("Past AFC players singing the club song")
  ).toHaveAttribute("src", pastPlayers);
  expect(screen.getByAltText("Crows memorabilia")).toHaveAttribute(
    "src",
    crowsMuseum
  );
  expect(
    screen.getByAltText("Team captain Mark Bickley holding premiership cup")
  ).toHaveAttribute("src", crowsPremierships);
  expect(screen.getByAltText("Various Crows jumpers")).toHaveAttribute(
    "src",
    crowsJumpers
  );
  expect(screen.getByAltText("Hall of Fame members")).toHaveAttribute(
    "src",
    hallOfFame
  );

  // Check if text is rendered
  expect(screen.getByText("Seasons Through the Years")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Dive into detailed AFL and AFLW stats and stories for each season since 1991."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Honoring Past Players")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Discover the legacy and contributions of every past Crows AFL and AFLW player."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("The Crows Museum")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Explore a rich collection of memorabilia, awards, photos, and unforgettable moments."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Championship Glory")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Relive the triumphs of all AFLW and AFL premiership wins that defined the Club’s history."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("The Iconic Jumpers")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Explore every guernsey design and evolution that’s symbolized the Club since 1991."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Hall of Fame Legends")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Since 2015, our Hall of Fame celebrates the 12 remarkable figures who shaped Adelaide’s legacy."
    )
  ).toBeInTheDocument();
});

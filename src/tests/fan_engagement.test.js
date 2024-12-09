import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FanEngagement from "../pages/fan_engagement";
import fanEngagementData from "../data/fan_engagement.json";

jest.mock(
  "../components/Modal",
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

test("renders fan engagement table", () => {
  render(<FanEngagement />);
  expect(
    screen.getByText(/fan engagement & membership overview/i)
  ).toBeInTheDocument();
  expect(screen.getByRole("table")).toBeInTheDocument();
  fanEngagementData.forEach((row) => {
    expect(screen.getAllByText(row.season).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(row.ticketSales.toLocaleString()).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(row.fanInteractions.toLocaleString()).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(`$${row.merchandiseRevenue.toLocaleString()}`).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(row.videoPlays.toLocaleString()).length
    ).toBeGreaterThan(0);
  });
});

test("shows modal on download button click", () => {
  render(<FanEngagement />);
  const downloadButton = screen.getByRole("button", {
    name: /download the full fan engagement report/i,
  });
  fireEvent.click(downloadButton);
  expect(screen.getByText(/downloaded successfully/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
});

test("closes modal when ok button is clicked", () => {
  render(<FanEngagement />);
  const downloadButton = screen.getByRole("button", {
    name: /download the full fan engagement report/i,
  });
  fireEvent.click(downloadButton);
  const okButton = screen.getByRole("button", { name: /ok/i });
  fireEvent.click(okButton);
  expect(
    screen.queryByText(/downloaded successfully/i)
  ).not.toBeInTheDocument();
});

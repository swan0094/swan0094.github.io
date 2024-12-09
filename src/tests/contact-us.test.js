import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactUs from "../pages/contact_us";

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

test("renders contact us form", () => {
  render(<ContactUs />);
  expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});

test("enables submit button when form is filled", () => {
  render(<ContactUs />);
  const nameInput = screen.getByLabelText(/your name/i);
  const emailInput = screen.getByLabelText(/your email/i);
  const messageInput = screen.getByLabelText(/your message/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(messageInput, {
    target: { value: "Hello, this is a test message." },
  });

  expect(submitButton).not.toBeDisabled();
});

test("shows modal on form submission", () => {
  render(<ContactUs />);
  const nameInput = screen.getByLabelText(/your name/i);
  const emailInput = screen.getByLabelText(/your email/i);
  const messageInput = screen.getByLabelText(/your message/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(messageInput, {
    target: { value: "Hello, this is a test message." },
  });

  fireEvent.click(submitButton);

  expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
});

test("closes modal when ok button is clicked", () => {
  render(<ContactUs />);
  const nameInput = screen.getByLabelText(/your name/i);
  const emailInput = screen.getByLabelText(/your email/i);
  const messageInput = screen.getByLabelText(/your message/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  fireEvent.change(messageInput, {
    target: { value: "Hello, this is a test message." },
  });

  fireEvent.click(submitButton);

  const okButton = screen.getByRole("button", { name: /ok/i });
  fireEvent.click(okButton);

  expect(
    screen.queryByText(/message sent successfully/i)
  ).not.toBeInTheDocument();
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../Components/Bookings/BookingForm";

describe("BookingForm", () => {
  test("renders first name input field with required attribute", () => {
    render(<BookingForm availableTimes={[]} />);
    const firstNameInput = screen.getByLabelText("First Name");
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute("required");
  });

  test("renders last name input field with required attribute", () => {
    render(<BookingForm availableTimes={[]} />);
    const lastNameInput = screen.getByLabelText("Last Name");
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveAttribute("required");
  });

  test("renders email input field with required attribute", () => {
    render(<BookingForm availableTimes={[]} />);
    const emailInput = screen.getByLabelText("Email Address");
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("required");
  });

  test("validates first name input field", async () => {
    render(<BookingForm availableTimes={[]} />);
    const firstNameInput = screen.getByLabelText("First Name");

    // Provide an empty input value
    fireEvent.change(firstNameInput, { target: { value: "" } });
    fireEvent.blur(firstNameInput); // Trigger onBlur event

    // Check for error message
    const errorMessage = await screen.findByText("First Name is required");
    expect(errorMessage).toBeInTheDocument();
  });
});

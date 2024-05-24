import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../Components/Bookings/BookingForm";

test("Renders the BookingForm header", () => {
  render(
    <BookingForm
      availableTimes={[]}
      updateTimes={() => {}}
      submitForm={() => {}}
    />
  );
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

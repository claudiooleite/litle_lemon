import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import BookingPage from "../Components/BookingPage";
import { fetchAPI } from "../Components/apiSimulator";

// Mocking fetchAPI function
jest.mock("../Components/apiSimulator", () => ({
  fetchAPI: jest.fn(),
}));

test("initializeTimes sets available times correctly", async () => {
  const mockTimes = ["10:00 AM", "11:00 AM", "12:00 PM"];
  fetchAPI.mockResolvedValueOnce(mockTimes);

  render(
    <BrowserRouter>
      {" "}
      {/* Wrap the component with BrowserRouter */}
      <BookingPage />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(fetchAPI).toHaveBeenCalledTimes(1); // Ensure fetchAPI is called
    expect(screen.getByLabelText("Choose time")).toHaveValue(mockTimes[0]);
  });
});

test("updateTimes updates available times correctly", async () => {
  const mockDate = "2024-05-24"; // Mocked date
  const mockTimes = ["10:00 AM", "11:00 AM", "12:00 PM"]; // Mocked available times
  fetchAPI.mockResolvedValueOnce(mockTimes);

  render(
    <BrowserRouter>
      {" "}
      {/* Wrap the component with BrowserRouter */}
      <BookingPage />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(fetchAPI).toHaveBeenCalledTimes(1); // Ensure fetchAPI is called
  });

  // Dispatch an action with the mock date
  await act(async () => {
    await updateTimes(mockDate);
  });

  expect(screen.getByLabelText("Choose time")).toHaveValue(mockTimes[0]); // Check if the state is updated correctly
});

import { render, screen, waitFor } from "@testing-library/react";
import BookingPage from "../Components/Bookings/BookingPage";
import { fetchAPI, submitAPI } from "../Components/Bookings/apiSimulator";
import userEvent from "@testing-library/user-event";

// Mock the fetchAPI and submitAPI functions
jest.mock("../Components/Bookings/apiSimulator", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

describe("BookingPage component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes sets available times on mount", async () => {
    const mockTimes = ["18:00", "19:00", "20:00"];
    fetchAPI.mockResolvedValue(mockTimes);

    render(<BookingPage />);

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledTimes(1);
      expect(fetchAPI).toHaveBeenCalledWith(expect.any(String));
    });

    mockTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test("updateTimes sets available times based on selected date", async () => {
    const mockTimes = ["18:00", "19:00", "20:00"];
    fetchAPI.mockResolvedValue(mockTimes);

    render(<BookingPage />);

    const dateInput = screen.getByLabelText(/choose date/i);
    userEvent.type(dateInput, "2024-05-24");

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledWith("2024-05-24");
    });

    mockTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test("submitForm navigates to confirmed booking on successful submission", async () => {
    const mockNavigate = jest.fn();
    const mockFormData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      date: "2024-05-24",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    };

    submitAPI.mockResolvedValue(true);

    render(<BookingPage />);

    // Fill the form
    userEvent.type(
      screen.getByLabelText(/first name/i),
      mockFormData.firstName
    );
    userEvent.type(screen.getByLabelText(/last name/i), mockFormData.lastName);
    userEvent.type(screen.getByLabelText(/email/i), mockFormData.email);
    userEvent.type(screen.getByLabelText(/choose date/i), mockFormData.date);
    userEvent.selectOptions(
      screen.getByLabelText(/choose time/i),
      mockFormData.time
    );
    userEvent.type(
      screen.getByLabelText(/number of guests/i),
      mockFormData.guests.toString()
    );
    userEvent.selectOptions(
      screen.getByLabelText(/occasion/i),
      mockFormData.occasion
    );

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(submitAPI).toHaveBeenCalledWith(mockFormData);
    });

    expect(mockNavigate).toHaveBeenCalledWith("/confirmedbooking");
  });
});

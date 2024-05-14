import { render, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";
import {
  initializeTimesState,
  availableTimesReducer,
  ActionTypes,
} from "./Components/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});

// Import the functions you want to test

// Test for the initializeTimes functionw
test("initializeTimesState returns the expected initial state", () => {
  const expectedInitialState = {
    time1: "17:00",
    time2: "18:00",
    time3: "19:00",
    time4: "20:00",
    time5: "21:00",
    time6: "22:00",
  };

  const initialState = initializeTimesState();
  expect(initialState).toEqual(expectedInitialState);
});

// Test for the updateTimes function
test("availableTimesReducer returns the same state when action type is UPDATE_AVAILABLE_TIMES", () => {
  const initialState = {
    time1: "17:00",
    time2: "18:00",
    time3: "19:00",
    time4: "20:00",
    time5: "21:00",
    time6: "22:00",
  };

  const action = { type: ActionTypes.UPDATE_AVAILABLE_TIMES };
  const updatedState = availableTimesReducer(initialState, action);

  expect(updatedState).toEqual(initialState);
});

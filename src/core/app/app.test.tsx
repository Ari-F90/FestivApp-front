import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./app";
import { store } from "../../store/store";

describe("Given the app component", () => {
  describe("When it is rendered", () => {
    test("renders learn react link", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const element = screen.getByText(/Learn/i);
      expect(element).toBeInTheDocument();
    });
  });
});

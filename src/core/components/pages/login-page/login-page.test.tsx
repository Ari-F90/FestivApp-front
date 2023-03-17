import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../../store/store";
import LoginPage from "./login-page";

describe("Given Login page", () => {
  describe("When we render the component", () => {
    test("Then it should display the title", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <LoginPage />
          </MemoryRouter>
        </Provider>
      );
      const element = screen.getByText("LOGIN");
      expect(element).toBeInTheDocument();
    });
  });
});
